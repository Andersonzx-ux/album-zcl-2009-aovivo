/* UI do player DUAS HORAS DE SUCESSO — Zezé Di Camargo & Luciano
   O relógio da capa é o dial de progresso. Ao cruzar do Disco 1 para o Disco 2 (e de volta),
   a capa, a faixa de palco e toda a paleta trocam do âmbar para o azul. */

const ICONS = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
    repeat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>',
    repeatOne: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/></svg>'
};

const PALETTE_VARS = {
    blackMain: '--c-black-main', blackBrown: '--c-black-brown', brownDark: '--c-brown-dark',
    sepiaDark: '--c-sepia-dark', sepiaMedium: '--c-sepia-medium', goldMain: '--c-gold',
    cream: '--c-cream', light: '--c-light'
};
const TICKS = 120;       // marcações do dial
const TICK_R0 = 10;      // folga entre o relógio e as marcações (px da capa)
const SVG_NS = 'http://www.w3.org/2000/svg';

class UI {
    constructor(player, albumData) {
        this.player = player;
        this.albumData = albumData;
        this.currentLyrics = null;
        this.activeLyricIndex = -1;
        this.currentDisc = null;
        this.litTicks = 0;
        this.ready = false;

        const $ = (id) => document.getElementById(id);
        this.elements = {
            albumMeta: $('album-meta'), tracklist: $('tracklist'),
            currentKicker: $('current-kicker'), currentTitle: $('current-title'), currentComposers: $('current-composers'),
            progressBar: $('progress-bar'), timeCurrent: $('time-current'), timeTotal: $('time-total'),
            btnShuffle: $('btn-shuffle'), btnPrev: $('btn-prev'), btnPlay: $('btn-play-pause'),
            btnNext: $('btn-next'), btnRepeat: $('btn-repeat'), volumeBar: $('volume-bar'),
            lyricsSection: $('lyrics-section'), lyricsTitle: $('lyrics-title'), lyricsComposers: $('lyrics-composers'),
            lyricsContent: $('lyrics-content'), btnToggleLyrics: $('btn-toggle-lyrics'),
            btnExpandLyrics: $('btn-expand-lyrics'), btnTranslation: $('btn-translation'),
            btnAbout: $('btn-about'), btnAwards: $('btn-awards'), btnCredits: $('btn-credits'),
            metaTheme: $('meta-theme-color'),
            heroXf: $('hero-xf'), bandXf: $('band-xf'),
            dialPos: $('dial-pos'), dialTicks: $('dial-ticks'), dialFace: $('dial-face'), dialHit: $('dial-hit'),
            discButtons: document.querySelectorAll('.disc-btn')
        };
        this.init();
    }

    init() {
        this.renderAlbumInfo();
        this.renderTracklist();
        this.renderModals();
        this.buildDial();
        this.setupEventListeners();
        this.elements.btnPlay.innerHTML = ICONS.play;
        this.elements.volumeBar.value = this.player.audio.volume;
        this.updateRangeFill(this.elements.volumeBar, '--volume', this.player.audio.volume * 100);
        this.updateRepeatButton();
        this.elements.btnShuffle.classList.toggle('active', this.player.isShuffle);
        this.setupMediaSession();

        // Disco inicial aplicado sem animação (é o primeiro quadro da página)
        const first = this.albumData.tracks[0];
        const disc = first ? this.getDiscForTrack(first.number) : this.albumData.discs[0];
        if (disc) this.applyDisc(disc, { instant: true });

        let showTr = true;
        try { showTr = localStorage.getItem('zcl2009_translation') !== '0'; } catch (e) { /* padrão: ligado */ }
        this.elements.lyricsSection.classList.toggle('show-tr', showTr);
        this.elements.btnTranslation.setAttribute('aria-pressed', String(showTr));
        this.elements.btnTranslation.addEventListener('click', () =>
            this.setTranslationVisible(!this.elements.lyricsSection.classList.contains('show-tr')));
        requestAnimationFrame(() => { this.ready = true; });
    }

    formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '00:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    parseLRC(rawText) {
        if (!rawText) return null;
        const timeTag = /\[(\d{1,2}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
        const result = [];
        let hasTimestamps = false;
        rawText.split(/\r?\n/).forEach(line => {
            const tags = [...line.matchAll(timeTag)];
            if (tags.length === 0) return;
            hasTimestamps = true;
            const text = line.replace(timeTag, '').trim();
            tags.forEach(tag => {
                const ms = parseInt((tag[3] || '0').padEnd(3, '0').slice(0, 3), 10);
                result.push({ time: parseInt(tag[1], 10) * 60 + parseInt(tag[2], 10) + ms / 1000, text });
            });
        });
        if (!hasTimestamps) return null;
        return result.sort((a, b) => a.time - b.time);
    }

    updateRangeFill(el, prop, percent) {
        el.style.setProperty(prop, `${Math.max(0, Math.min(100, percent))}%`);
    }

    /* ---------- Discos: paleta, capa, faixa de palco ---------- */
    getDiscForTrack(trackNumber) {
        const discs = this.albumData.discs || [];
        return discs.find(d => trackNumber >= d.trackStart && trackNumber <= d.trackEnd) || null;
    }

    // Troca suave entre duas <img> empilhadas (a que está "on" some, a outra aparece)
    crossfade(container, src, instant) {
        const imgs = container.querySelectorAll('img');
        const cur = container.querySelector('img.on');
        const next = [...imgs].find(i => i !== cur) || imgs[0];
        if (cur && cur.getAttribute('src') === src) return;
        const show = () => {
            if (instant) container.classList.add('instant');
            next.classList.add('on');
            if (cur && cur !== next) cur.classList.remove('on');
            if (instant) requestAnimationFrame(() => requestAnimationFrame(() => container.classList.remove('instant')));
        };
        next.onload = show;
        next.onerror = show;
        next.src = src;
        if (next.complete && next.naturalWidth) show();
    }

    applyDisc(disc, { instant = false } = {}) {
        const root = document.documentElement;
        const { elements } = this;
        this.currentDisc = disc.number;
        root.dataset.disc = String(disc.number);

        Object.entries(PALETTE_VARS).forEach(([key, cssVar]) => {
            if (disc.palette && disc.palette[key]) root.style.setProperty(cssVar, disc.palette[key]);
        });
        if (disc.palette && disc.palette.blackMain) elements.metaTheme.setAttribute('content', disc.palette.blackMain);

        this.crossfade(elements.heroXf, disc.cover, instant);
        if (disc.strip) this.crossfade(elements.bandXf, disc.strip, instant);

        // posição do relógio desta capa
        if (disc.clock) {
            const { x, y, r } = disc.clock;
            this.placeDial(x, y, r, instant);
        }

        elements.discButtons.forEach(b => {
            const on = Number(b.dataset.disc) === disc.number;
            b.setAttribute('aria-pressed', String(on));
        });
    }

    /* ---------- Dial: marcações em volta do relógio da capa ---------- */
    buildDial() {
        const { dialTicks } = this.elements;
        dialTicks.innerHTML = '';
        this.ticks = [];
        const disc = (this.albumData.discs || [])[0];
        const r = disc && disc.clock ? disc.clock.r : 100;
        for (let i = 0; i < TICKS; i++) {
            const major = i % 10 === 0;
            const a = (i / TICKS) * Math.PI * 2 - Math.PI / 2;
            const r0 = r + TICK_R0;
            const r1 = r0 + (major ? 15 : 8);
            const line = document.createElementNS(SVG_NS, 'line');
            line.setAttribute('x1', (Math.cos(a) * r0).toFixed(2));
            line.setAttribute('y1', (Math.sin(a) * r0).toFixed(2));
            line.setAttribute('x2', (Math.cos(a) * r1).toFixed(2));
            line.setAttribute('y2', (Math.sin(a) * r1).toFixed(2));
            line.setAttribute('class', major ? 'tick major' : 'tick');
            dialTicks.appendChild(line);
            this.ticks.push(line);
        }
        this.elements.dialFace.setAttribute('r', r);
        this.elements.dialHit.setAttribute('r', r + TICK_R0 + 8);
        this.dialR = r;
        this.updateDial(0);

        // Arrastar sobre o anel = buscar na faixa; tocar no mostrador = tocar/pausar
        const { dialHit, dialFace } = this.elements;
        let dragging = false;
        const seekFromEvent = (e) => {
            const box = this.elements.dialPos.getBoundingClientRect();
            const cx = box.left + box.width / 2, cy = box.top + box.height / 2;
            let a = Math.atan2(e.clientY - cy, e.clientX - cx) + Math.PI / 2;
            if (a < 0) a += Math.PI * 2;
            const pct = (a / (Math.PI * 2)) * 100;
            this.player.seek(pct);
            this.updateDial(pct);
        };
        dialHit.addEventListener('pointerdown', (e) => {
            dragging = true;
            try { dialHit.setPointerCapture(e.pointerId); } catch (err) { /* ignora */ }
            seekFromEvent(e);
        });
        dialHit.addEventListener('pointermove', (e) => { if (dragging) seekFromEvent(e); });
        const stop = () => { dragging = false; };
        dialHit.addEventListener('pointerup', stop);
        dialHit.addEventListener('pointercancel', stop);
        dialFace.addEventListener('click', () => this.player.togglePlay());
    }

    placeDial(x, y, r, instant) {
        const { dialPos } = this.elements;
        if (instant) dialPos.style.transition = 'none';
        dialPos.style.transform = `translate(${x}px, ${y}px)`;
        if (instant) requestAnimationFrame(() => requestAnimationFrame(() => { dialPos.style.transition = ''; }));
    }

    updateDial(pct) {
        const p = Math.max(0, Math.min(100, pct));
        const lit = Math.floor((p / 100) * TICKS + 1e-6);
        if (lit === this.litTicks && this.headIndex !== undefined) return;
        this.ticks.forEach((t, i) => {
            t.classList.toggle('on', i < lit);
            t.classList.toggle('head', lit > 0 && i === lit - 1);
        });
        this.litTicks = lit;
        this.headIndex = lit - 1;
    }

    /* ---------- Cabeçalho ---------- */
    renderAlbumInfo() {
        const { elements, albumData } = this;
        const parts = [`${albumData.tracks.length} faixas`];
        if (albumData.releaseDate) parts.push(albumData.releaseDate);
        if (albumData.totalDuration) parts.push(albumData.totalDuration);
        elements.albumMeta.textContent = parts.join('  ·  ');

        // rótulos do seletor de disco: "Faixas 01–12"
        const pad = (n) => String(n).padStart(2, '0');
        elements.discButtons.forEach(btn => {
            const d = (albumData.discs || []).find(x => x.number === Number(btn.dataset.disc));
            if (!d) { btn.hidden = true; return; }
            btn.querySelector('.disc-btn-name').textContent = d.title || `Disco ${d.number}`;
            btn.querySelector('.disc-btn-range').textContent = `Faixas ${pad(d.trackStart)}–${pad(d.trackEnd)}`;
        });
    }

    composersText(track) {
        return track.composers && track.composers.length ? track.composers.join(' / ') : (this.albumData.artist || '');
    }

    /* ---------- Faixas ---------- */
    renderTracklist() {
        const { tracklist } = this.elements;
        tracklist.innerHTML = '';
        let lastDisc = null;
        this.albumData.tracks.forEach((track, index) => {
            const disc = this.getDiscForTrack(track.number);
            if (disc && disc.number !== lastDisc) {
                lastDisc = disc.number;
                const count = disc.trackEnd - disc.trackStart + 1;
                const head = document.createElement('li');
                head.className = 'disc-head';
                head.setAttribute('aria-hidden', 'true');
                head.innerHTML = '';
                if (disc.strip) {
                    const bg = document.createElement('img');
                    bg.className = 'disc-head-bg'; bg.alt = ''; bg.src = disc.strip; bg.decoding = 'async';
                    const veil = document.createElement('span');
                    veil.className = 'veil';
                    head.append(bg, veil);
                }
                const name = document.createElement('span');
                name.className = 'disc-head-name';
                name.textContent = disc.title || `Disco ${disc.number}`;
                const sub = document.createElement('span');
                sub.className = 'disc-head-sub';
                sub.textContent = `${disc.vol ? disc.vol + ' · ' : ''}${count} faixas`;
                head.append(name, sub);
                tracklist.appendChild(head);
            }

            const li = document.createElement('li');
            li.className = 'track-item';
            li.dataset.index = index;
            li.tabIndex = 0;
            li.setAttribute('role', 'button');
            li.setAttribute('aria-label', `Tocar faixa ${track.number}: ${track.title}`);

            const num = document.createElement('span');
            num.className = 'track-num';
            const numText = document.createElement('span');
            numText.className = 'track-num-text';
            numText.textContent = String(track.number).padStart(2, '0');
            const eq = document.createElement('span');
            eq.className = 'eq'; eq.setAttribute('aria-hidden', 'true');
            eq.innerHTML = '<i></i><i></i><i></i>';
            num.append(numText, eq);

            const details = document.createElement('div');
            details.className = 'track-details';
            const title = document.createElement('span');
            title.className = 'track-title';
            title.textContent = track.title;
            const note = document.createElement('span');
            note.className = 'track-note';
            note.textContent = track.composers && track.composers.length ? track.composers.join(' / ') : '';
            details.append(title, note);

            const dur = document.createElement('span');
            dur.className = 'track-duration';
            dur.textContent = track.duration || '';

            li.append(num, details, dur);
            const play = () => this.player.playTrack(index);
            li.addEventListener('click', play);
            li.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
            });
            tracklist.appendChild(li);
        });
    }

    /* ---------- Modais ---------- */
    renderModals() {
        const { albumData, elements } = this;
        const about = document.getElementById('about-content');
        const meta = [];
        if (albumData.releaseDate) meta.push(`<p><strong>Lançamento:</strong> ${albumData.releaseDate}</p>`);
        if (albumData.recordingDate) meta.push(`<p><strong>Gravação:</strong> ${albumData.recordingDate}</p>`);
        if (albumData.genre) meta.push(`<p><strong>Gênero:</strong> ${albumData.genre}</p>`);
        if (albumData.labels && albumData.labels.length) meta.push(`<p><strong>Gravadora:</strong> ${albumData.labels.join(', ')}</p>`);
        about.innerHTML = (albumData.description ? `<p>${albumData.description}</p><br>` : '') + meta.join('');

        const awards = (albumData.awards || []).filter(a => a && (a.award || a.title));
        if (awards.length === 0) elements.btnAwards.hidden = true;
        else document.getElementById('awards-content').innerHTML = awards.map(a => {
            const head = [a.award || a.title, a.result].filter(Boolean).join(' — ');
            const sub = [a.year, a.category].filter(Boolean).join(' · ');
            return `<div class="award-card"><h3>${head}</h3>${sub ? `<p class="award-meta">${sub}</p>` : ''}${a.description ? `<p>${a.description}</p>` : ''}</div>`;
        }).join('');

        const tc = albumData.technicalCredits || {};
        const labels = { production: 'Produção', direction: 'Direção', arrangements: 'Arranjos', recording: 'Gravação',
            mixing: 'Mixagem', mastering: 'Masterização', studios: 'Estúdios', photography: 'Fotografia', artwork: 'Projeto gráfico', musicians: 'Músicos' };
        const items = Object.keys(tc).filter(k => {
            const v = tc[k]; return Array.isArray(v) ? v.length : (v && String(v).trim());
        });
        if (items.length === 0) elements.btnCredits.hidden = true;
        else document.getElementById('credits-content').innerHTML =
            `<div class="credits-grid">${items.map(k => {
                const v = Array.isArray(tc[k]) ? tc[k].join('<br>') : tc[k];
                return `<div class="credit-item"><h4>${labels[k] || k}</h4><p>${v}</p></div>`;
            }).join('')}</div>`;
    }

    /* As animações (equalizador, brilho do dial) só rodam enquanto toca */
    syncPlaying() {
        document.documentElement.classList.toggle('is-playing', !!this.player.isPlaying);
    }

    /* ---------- Tela bloqueada / central de mídia (Media Session) ---------- */
    setupMediaSession() {
        if (!('mediaSession' in navigator)) return;
        const { player } = this;
        const audio = player.audio;
        const set = (action, fn) => { try { navigator.mediaSession.setActionHandler(action, fn); } catch (e) { /* não suportado */ } };

        set('play', () => audio.play());
        set('pause', () => audio.pause());
        set('previoustrack', () => player.prevTrack());
        set('nexttrack', () => player.nextTrack());
        set('seekto', (d) => {
            if (d.fastSeek && 'fastSeek' in audio) audio.fastSeek(d.seekTime); else audio.currentTime = d.seekTime;
            this.updatePositionState();
        });
        // Sem seekbackward/seekforward, o iOS mostra os botões de faixa em vez de ±10 s
        set('seekbackward', null);
        set('seekforward', null);
        set('stop', () => { audio.pause(); audio.currentTime = 0; });
    }

    updateMediaMetadata(track) {
        if (!('mediaSession' in navigator) || typeof MediaMetadata === 'undefined') return;
        const abs = (path) => new URL(path, document.baseURI).href;
        const disc = this.getDiscForTrack(track.number);
        const album = `${this.albumData.title || ''}${disc && disc.vol ? ' (' + disc.vol + ')' : ''}`;
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: this.albumData.artist || '',
            album,
            artwork: [
                { src: abs('assets/cover-512.jpg'), sizes: '512x512', type: 'image/jpeg' },
                { src: abs('assets/cover-256.jpg'), sizes: '256x256', type: 'image/jpeg' }
            ]
        });
    }

    updatePositionState() {
        if (!('mediaSession' in navigator) || !navigator.mediaSession.setPositionState) return;
        const a = this.player.audio;
        if (!isFinite(a.duration) || a.duration <= 0) return;
        try {
            navigator.mediaSession.setPositionState({
                duration: a.duration, playbackRate: a.playbackRate || 1, position: Math.min(a.currentTime, a.duration)
            });
        } catch (e) { /* valores inválidos momentâneos */ }
    }

    /* ---------- Eventos ---------- */
    setupEventListeners() {
        const { elements, player } = this;
        elements.btnPlay.addEventListener('click', () => player.togglePlay());
        elements.btnNext.addEventListener('click', () => player.nextTrack());
        elements.btnPrev.addEventListener('click', () => player.prevTrack());
        elements.btnShuffle.addEventListener('click', () => {
            elements.btnShuffle.classList.toggle('active', player.toggleShuffle());
        });
        elements.btnRepeat.addEventListener('click', () => { player.toggleRepeat(); this.updateRepeatButton(); });

        elements.progressBar.addEventListener('input', (e) => {
            const v = parseFloat(e.target.value);
            player.seek(v);
            this.updateRangeFill(elements.progressBar, '--progress', v);
            this.updateDial(v);
        });
        elements.volumeBar.addEventListener('input', (e) => {
            const v = parseFloat(e.target.value);
            player.setVolume(v);
            this.updateRangeFill(elements.volumeBar, '--volume', v * 100);
        });

        // Seletor de disco: toca a primeira faixa do disco (a paleta troca junto)
        elements.discButtons.forEach(btn => btn.addEventListener('click', () => {
            const d = (this.albumData.discs || []).find(x => x.number === Number(btn.dataset.disc));
            if (!d) return;
            const idx = this.albumData.tracks.findIndex(t => t.number === d.trackStart);
            if (idx >= 0) this.player.playTrack(idx);
        }));

        elements.btnToggleLyrics.addEventListener('click', () => {
            const collapsed = elements.lyricsSection.classList.toggle('lyrics-collapsed');
            elements.btnToggleLyrics.setAttribute('aria-expanded', String(!collapsed));
            elements.btnToggleLyrics.setAttribute('aria-label', collapsed ? 'Mostrar letra' : 'Esconder letra');
        });

        const setFocus = (on) => {
            elements.lyricsSection.classList.toggle('lyrics-focus', on);
            document.body.classList.toggle('lyrics-open', on);
            elements.btnExpandLyrics.setAttribute('aria-pressed', String(on));
            elements.btnExpandLyrics.setAttribute('aria-label', on ? 'Sair da tela cheia' : 'Letra em tela cheia');
            if (on) {
                elements.lyricsSection.classList.remove('lyrics-collapsed');
                elements.btnToggleLyrics.setAttribute('aria-expanded', 'true');
            }
            this.activeLyricIndex = -2;
            this.updateActiveLyric(player.audio.currentTime);
        };
        elements.btnExpandLyrics.addEventListener('click', () => setFocus(!elements.lyricsSection.classList.contains('lyrics-focus')));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.lyricsSection.classList.contains('lyrics-focus')) setFocus(false);
        });

        [['btn-about', 'modal-about'], ['btn-awards', 'modal-awards'], ['btn-credits', 'modal-credits']].forEach(([b, m]) => {
            const modal = document.getElementById(m);
            document.getElementById(b).addEventListener('click', () => modal.showModal());
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
            modal.querySelector('.close-modal').addEventListener('click', () => modal.close());
        });

        document.addEventListener('keydown', (e) => {
            if (e.target.closest && e.target.closest('input, textarea, dialog')) return;
            if (e.code === 'Space') { e.preventDefault(); player.togglePlay(); }
            else if (e.code === 'ArrowRight' && e.shiftKey) player.nextTrack();
            else if (e.code === 'ArrowLeft' && e.shiftKey) player.prevTrack();
        });
    }

    updateRepeatButton() {
        const { btnRepeat } = this.elements;
        const mode = this.player.repeatMode;
        btnRepeat.innerHTML = mode === 2 ? ICONS.repeatOne : ICONS.repeat;
        btnRepeat.classList.toggle('active', mode !== 0);
        btnRepeat.setAttribute('aria-label', ['Repetir: desligado', 'Repetir: álbum', 'Repetir: faixa'][mode]);
    }

    updatePlayerControlsState() {
        this.elements.btnPlay.innerHTML = this.player.isPlaying ? ICONS.pause : ICONS.play;
        this.elements.btnPlay.setAttribute('aria-label', this.player.isPlaying ? 'Pausar' : 'Tocar');
    }

    /* ---------- Faixa atual ---------- */
    onTrackChange(index) {
        const { elements } = this;
        const track = this.albumData.tracks[index];
        if (!track) return;
        const total = this.albumData.tracks.length;
        const pad = (n) => String(n).padStart(2, '0');

        // Cruzou a fronteira entre os discos? Troca capa, faixa de palco e paleta.
        const disc = this.getDiscForTrack(track.number);
        if (disc && disc.number !== this.currentDisc) this.applyDisc(disc, { instant: !this.ready });

        const discLabel = disc ? ` · ${disc.title}` : '';
        elements.currentKicker.textContent = `Faixa ${pad(track.number)} / ${pad(total)}${discLabel}`;
        elements.currentTitle.textContent = track.title;
        const comp = this.composersText(track);
        elements.currentComposers.textContent = comp;
        elements.lyricsTitle.textContent = track.title;
        elements.lyricsComposers.textContent = comp;
        elements.timeTotal.textContent = track.duration ? track.duration.padStart(5, '0') : '00:00';
        elements.timeCurrent.textContent = '00:00';
        elements.progressBar.value = 0;
        this.updateRangeFill(elements.progressBar, '--progress', 0);
        this.updateDial(0);

        elements.tracklist.querySelectorAll('.track-item').forEach((li) => {
            const active = Number(li.dataset.index) === index;
            li.classList.toggle('active', active);
            if (active) li.setAttribute('aria-current', 'true'); else li.removeAttribute('aria-current');
        });

        this.updateMediaMetadata(track);
        this.renderLyrics(track);
        this.updatePlayerControlsState();
    }

    pairTranslation(originalLines, translationRaw) {
        const out = new Array(originalLines.length).fill('');
        const tr = (translationRaw || '').trim();
        if (!tr) return out;
        const trParsed = this.parseLRC(tr);
        if (trParsed && originalLines[0] && originalLines[0].time !== undefined) {
            originalLines.forEach((line, i) => {
                let best = null, bestDiff = 0.8;
                trParsed.forEach(t => {
                    const d = Math.abs(t.time - line.time);
                    if (d <= bestDiff) { best = t; bestDiff = d; }
                });
                if (best) out[i] = best.text;
            });
            return out;
        }
        const plain = tr.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        let k = 0;
        originalLines.forEach((line, i) => { if (line.text && line.text.trim() && k < plain.length) out[i] = plain[k++]; });
        return out;
    }

    renderLyrics(track) {
        const { lyricsContent, btnTranslation } = this.elements;
        this.currentLyrics = null;
        this.activeLyricIndex = -1;
        const raw = (track.lyrics || '').trim();
        const hasTr = !!(track.translation || '').trim();
        const ok = !!(raw && hasTr);
        btnTranslation.classList.toggle('no-tr', !ok);
        btnTranslation.title = ok ? 'Tradução' : 'Esta faixa ainda não tem tradução';

        const addLine = (container, text, tr, i) => {
            const p = document.createElement('p');
            p.className = 'lyrics-line';
            if (i !== null) p.dataset.index = i;
            const main = document.createElement('span');
            main.className = 'lyrics-main';
            main.textContent = text || ' ';
            p.appendChild(main);
            if (tr) {
                const t = document.createElement('span');
                t.className = 'lyrics-tr';
                t.textContent = tr;
                p.appendChild(t);
            }
            container.appendChild(p);
        };

        if (!raw) {
            lyricsContent.classList.remove('lyrics-synced', 'lyrics-plain');
            lyricsContent.innerHTML = '<p class="empty-state">Letra ainda não adicionada para esta faixa.</p>';
            return;
        }
        const parsed = this.parseLRC(raw);
        lyricsContent.innerHTML = '';
        if (parsed && parsed.length) {
            this.currentLyrics = parsed;
            lyricsContent.classList.add('lyrics-synced');
            lyricsContent.classList.remove('lyrics-plain');
            const trs = this.pairTranslation(parsed, track.translation);
            parsed.forEach((line, i) => addLine(lyricsContent, line.text, trs[i], i));
        } else {
            lyricsContent.classList.remove('lyrics-synced');
            lyricsContent.classList.add('lyrics-plain');
            const lines = raw.split(/\r?\n/).map(t => ({ text: t.trim() }));
            const trs = this.pairTranslation(lines, track.translation);
            lines.forEach((line, i) => addLine(lyricsContent, line.text, trs[i], null));
        }
        lyricsContent.scrollTop = 0;
    }

    setTranslationVisible(on) {
        this.elements.lyricsSection.classList.toggle('show-tr', on);
        this.elements.btnTranslation.setAttribute('aria-pressed', String(on));
        try { localStorage.setItem('zcl2009_translation', on ? '1' : '0'); } catch (e) { /* ignora */ }
        this.activeLyricIndex = -2;
        this.updateActiveLyric(this.player.audio.currentTime);
    }

    updateActiveLyric(currentTime) {
        if (!this.currentLyrics) return;
        let idx = -1;
        for (let i = 0; i < this.currentLyrics.length; i++) {
            if (currentTime >= this.currentLyrics[i].time) idx = i; else break;
        }
        if (idx === this.activeLyricIndex) return;
        this.activeLyricIndex = idx;

        const container = this.elements.lyricsContent;
        const items = container.querySelectorAll('.lyrics-line');
        items.forEach((el, i) => el.classList.toggle('active', i === idx));

        // Rola só o quadro da letra (nunca a página) e só se ele estiver aberto
        if (idx >= 0 && items[idx] && !this.elements.lyricsSection.classList.contains('lyrics-collapsed')) {
            const el = items[idx];
            const top = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
            container.scrollTo({ top, behavior: 'smooth' });
        }
    }

    onProgressUpdate(currentTime, duration) {
        const { elements } = this;
        elements.timeCurrent.textContent = this.formatTime(currentTime);
        if (isFinite(duration) && duration > 0) {
            elements.timeTotal.textContent = this.formatTime(duration);
            const pct = (currentTime / duration) * 100;
            if (document.activeElement !== elements.progressBar) elements.progressBar.value = pct;
            this.updateRangeFill(elements.progressBar, '--progress', pct);
            this.updateDial(pct);
        }
        this.updateActiveLyric(currentTime);
        const now = Date.now();
        if (now - (this.lastPosSync || 0) > 1000) { this.lastPosSync = now; this.updatePositionState(); }
    }

    onStateChange() {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = this.player.isPlaying ? 'playing' : 'paused';
            this.updatePositionState();
        }
        this.updatePlayerControlsState();
        // pequeno atraso: trocar de faixa pausa e retoma o áudio e não deve piscar as animações
        clearTimeout(this.playTimer);
        this.playTimer = setTimeout(() => this.syncPlaying(), 220);
    }
}
