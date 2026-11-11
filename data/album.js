window.album = {
    title: "Duas Horas de Sucesso — Ao Vivo",
    artist: "Zezé Di Camargo & Luciano",
    releaseDate: "23 de julho de 2009",
    recordingDate: "28 de agosto de 2008",
    genre: "Sertanejo",
    labels: ["BMG / Sony Music"],
    cover: "assets/cover.jpg",
    description: "",
    totalDuration: "02:02:21",

    // Dois discos: o player troca capa, paleta, faixa de palco e luz quando a faixa cruza a fronteira.
    // "clock": posição/raio do relógio da capa (em pixels da imagem 640x576), onde fica o anel de progresso.
    // Paletas medidas nos arquivos assets/cover1.jpg e assets/cover2.jpg (ver tools/medir_paletas.py).
    discs: [
        {
            number: 1,
            title: "Disco 1",
            vol: "Vol. 1",
            cover: "assets/cover1.jpg",
            strip: "assets/strip-1.jpg",
            trackStart: 1,
            trackEnd: 12,
            clock: { x: 333, y: 113, r: 103 },
            palette: {
                blackMain: "#090B0A",   // palco preto
                blackBrown: "#211211",  // sombra do palco, tom vinho
                brownDark: "#56241B",   // faixa de luz do palco, parte baixa
                sepiaDark: "#913F2A",   // faixa de luz do palco, vermelho
                sepiaMedium: "#CF8C59", // faixa de luz do palco, laranja aceso
                goldMain: "#D1B161",    // título dourado
                cream: "#F4D6B5",       // mostrador do relógio
                light: "#F9E8DF"        // mostrador do relógio em luz
            }
        },
        {
            number: 2,
            title: "Disco 2",
            vol: "Vol. 2",
            cover: "assets/cover2.jpg",
            strip: "assets/strip-2.jpg",
            trackStart: 13,
            trackEnd: 23,
            clock: { x: 326, y: 119, r: 103 },
            palette: {
                blackMain: "#090B0A",   // palco preto
                blackBrown: "#10121A",  // sombra do palco, tom azulado
                brownDark: "#242B44",   // faixa de luz do palco, parte baixa
                sepiaDark: "#494D6D",   // faixa de luz do palco, azul-lilás
                sepiaMedium: "#A89AA4", // faixa de luz do palco, cinza quente
                goldMain: "#D1B161",    // título dourado
                cream: "#D1CDDB",       // mostrador do relógio
                light: "#E9E4EA"        // mostrador do relógio em luz
            }
        }
    ],
    awards: [
        { award: "Disco de Platina", result: "Certificado", year: "2010", category: "Vendas", description: "Mais de 100 mil cópias vendidas." },

    ],
    technicalCredits: {
        production: ["César Augusto"],
        direction: ["Ronaldo Viana"],
        arrangements: ["Grimaldi D. Gomes"],
        recording: ["Mosh Studios (SP)"],
        mixing: ["Ted / César Augusto"],
        mastering: ["Walter Lima"],
        studios: ["Mosh Studios (SP)"],
        photography: "Marcelo Faustini",
        artwork: "Carlos Nunes"
    },
    tracks: [
        {
            number: 1,
            title: "Vem Ficar Comigo / A Ferro e Fogo",
            duration: "5:57",
            composers: ["Vem Ficar Comigo: César Augusto / Reinaldo Barriga / Zezé Di Camargo | A Ferro e Fogo: Vinícius / João Victor / Waléria Leão"],
            audio: "audio/01.flac",
            lyrics: `[00:29.06]Olho em seus olhos
[00:31.44]Sinto o coração bater
[00:33.98]De amor enfeitiçado
[00:35.70]Com vontade de te ver
[00:37.45]Porque eu te amo
[00:41.77]Porque eu te amo
[00:46.73]Uma luz de fogo
[00:48.49]O meu corpo vem queimar
[00:51.23]Louco de desejo
[00:53.19]'To querendo te encontrar
[00:55.00]Porque eu te amo
[00:59.30]Porque eu te amo
[01:04.49]Quero ficar do seu lado
[01:09.05]Fonte de amor, meu pecado
[01:13.44]Quero você todo dia
[01:17.44]Uma chance pra dizer
[01:21.26]Eu te amo
[01:24.88]Ô, ô, ô, ô vem ficar comigo
[01:33.84]Ô, ô, ô, ô vem ficar comigo
[01:42.68]Ô, ô, ô vem ficar, (vem ficar), vem ficar, vem ficar comigo
[01:51.52]Ô, ô, ô vem ficar, (vem ficar), vem ficar, vem ficar comigo
[02:00.27]Ô, ô, ô vem ficar, (vem ficar), vem ficar, vem ficar comigo
[02:13.11]A ferro e fogo não dá
[02:16.11]Com tanta indiferença vendo a vida passar
[02:18.79]Tropeços e tropeços pedras no meu caminho
[02:24.44]Foi só um jogo de azar
[02:27.00]Palavras e palavras se perderam no ar
[02:30.11]Tão perto dos seu olhos
[02:32.00]Longe dos seus carinhos
[02:37.07]Por deus tudo acabou
[02:43.11]Eu já não aguentava mais
[02:48.67]Viver como eu vivi
[02:51.51]Sofrer como eu sofri
[02:54.49]Foi longe até demais
[02:59.58]Sozinho vai ser bem melhor
[03:06.34]Pra que remediar o fim
[03:12.10]É bem melhor perder
[03:15.10]Se nada faz doer
[03:17.77]Como está doendo em mim
[03:22.21]Oh oh oh
[03:22.77]A ferro e fogo não dá
[03:25.44]Com tanta indiferença vendo a vida passar
[03:28.11]Tropeços e tropeços pedras no meu caminho
[03:34.11]Foi só um jogo de azar
[03:36.44]Palavras e palavras se perderam no ar
[03:39.77]Tão perto dos seu olhos
[03:41.08]Longe dos seus carinhos, ei, ei, ei
[04:10.00]Por deus tudo acabou
[04:16.15]Eu já não aguentava mais
[04:21.26]Viver como eu vivi
[04:24.70]Sofrer como eu sofri
[04:28.00]Foi longe até demais
[04:33.00]Sozinho vai ser bem melhor
[04:39.00]Pra que remediar o fim
[04:44.57]É bem melhor perder
[04:47.43]Se nada faz doer
[04:50.44]Como está doendo em mim
[04:54.71]Oh oh oh
[04:55.18]A ferro e fogo não dá
[04:58.87]Com tanta indiferença vendo a vida passar
[05:01.64]Tropeços e tropeços pedras no meu caminho
[05:07.87]Foi só um jogo de azar
[05:11.11]Palavras e palavras se perderam no ar
[05:13.23]Tão perto dos seu olhos
[05:15.00]Longe dos seus carinhos
[05:19.44]A ferro e fogo não dá
[05:22.41]Com tanta indiferença vendo a vida passar
[05:24.96]Pedras no meu caminho
[05:30.88]Foi só um jogo de azar
[05:34.00]Palavras e palavras se perderam no ar
[05:37.77]Longe dos seus carinhos, ei, ei, ei`
        },
        {
            number: 2,
            title: "Sufocado (Drowning)",
            duration: "4:35",
            composers: ["Linda Thompson / Andreas Carlsson / Rami Yacoub (versão: César Augusto / Bozzo Baretti)"],
            audio: "audio/02.flac",
            lyrics: `[00:19.21]Pra que fingir que sofre (Sofre)
[00:23.47]Eu sei que não (Eu sei que não)
[00:26.27]No fundo, você gosta de me tirar a paz (A paz)
[00:33.07]Se faz inocente, mas tudo bem (Mas tudo bem)
[00:39.78]Te quero do meu lado
[00:44.23]Porque eu sei
[00:45.71]Não tem sentido
[00:48.04]Viver sem teu amor
[00:52.50]Sempre te levo
[00:54.93]Comigo aonde eu vou
[01:01.34]Sempre que eu respiro é por você
[01:04.94]E te amar me faz sofrer
[01:08.74]Baby, hoje eu vivo sufocado
[01:13.11]Em minha dor
[01:14.66]Sempre que eu tento te esquecer
[01:18.48]Fico louco pra te ver
[01:22.17]Baby, não consigo me livrar de tanto amor
[01:26.51]
[01:32.10]Você me deixa triste
[01:36.38]O que fazer?
[01:38.65]Se a solidão insiste
[01:42.18]Em me fazer lembrar
[01:45.24]Não preciso de mais nada
[01:49.62]De mais ninguém
[01:52.12]Se você está comigo, oh
[01:56.48]'Tá tudo bem
[01:58.18]Não tem sentido
[02:00.64]Viver sem teu amor
[02:04.96]Sempre te levo
[02:07.36]Comigo aonde eu vou (Comigo aonde eu vou)
[02:13.14]Sempre que eu respiro é por você
[02:17.50]E te amar me faz sofrer
[02:21.07]Baby, hoje eu vivo sufocado
[02:25.22]Em minha dor
[02:27.27]Sempre que eu tento te esquecer
[02:31.03]Fico louco pra te ver
[02:34.88]Baby, não consigo me livrar de tanto amor
[02:40.81]Isso não é certo
[02:43.35]Mas te aceito assim
[02:45.12]Porque estou num deserto
[02:49.72]Sem saber pra onde ir
[02:52.76]Eu só quero é ser feliz
[02:57.56]Sempre que eu respiro é por você (Sempre que eu respiro)
[03:01.65]E te amar me faz sofrer
[03:05.11]Baby, hoje eu vivo sufocado (Baby, hoje eu vivo sufocado)
[03:09.27]Em minha dor
[03:11.13]Sempre que eu tento te esquecer
[03:15.09]Fico louco pra te ver
[03:18.64]Baby, não consigo me livrar de tanto amor (Não consigo)
[03:32.33]Baby, hoje eu vivo sufocado em minha dor, oh
[03:39.87]Te esquecer
[03:41.69]Esquecer o seu amor
[03:45.90]Baby, não consigo esquecer o seu amor
[03:52.12]Sempre que eu respiro é por você (Você)
[03:55.52]E te amar me faz sofrer
[03:59.23]Baby, hoje eu vivo sufocado
[04:03.10]Em minha dor
[04:05.40]Sempre que eu tento te esquecer
[04:09.16]Fico louco pra te ver
[04:12.86]Baby, não consigo me livrar de tanto amor
[04:21.05]`
        },
        {
            number: 3,
            title: "Tarde Demais",
            duration: "3:53",
            composers: ["Chrystian"],
            audio: "audio/03.flac",
            lyrics: `[00:29.90]Sei que ficou no seu quarto
[00:33.54]Pedaços do meu coração
[00:37.72]Lembro que ele estava inteiro
[00:41.47]Enquanto existia ilusão
[00:45.71]'Tô ligando agora só pra te avisar
[00:49.63]Que por seu amor, eu não vou mais chorar
[00:53.62]Estou apaixonado por um outro alguém
[00:57.23]Você sentirá que eu posso ser
[01:01.11]De outra pessoa
[01:05.64]Tarde demais
[01:09.88]Eu já refiz meu caminho
[01:13.70]Tarde demais
[01:17.88]Voce já perdeu meu carinho
[01:21.78]Por isso estou passando
[01:23.15]Só pra te dizer
[01:24.54]Que é tarde demais
[01:49.89]Sei que ficou no seu quarto
[01:53.64]Pedaços do meu coração
[01:57.71]Lembro que ele estava inteiro, direito
[02:01.49]Enquanto existia ilusão
[02:05.65]'Tô ligando agora pra te avisar
[02:09.63]Que por seu amor eu não vou mais chorar
[02:13.52]Estou apaixonado por um outro alguém
[02:17.04]Você sentirá que eu posso ser
[02:21.08]De outra pessoa
[02:25.74]Tarde demais
[02:29.78]Eu já refiz meu caminho
[02:33.84]Tarde demais
[02:37.84]Voce já perdeu meu carinho
[02:41.89]Por isso estou passando
[02:43.59]Só pra te dizer
[02:44.65]Que é tarde demais
[02:49.54]Tarde demais
[02:53.61]Eu já refiz meu caminho
[02:57.63]Tarde demais
[03:01.76]Você já perdeu meu carinho
[03:05.85]Por isso estou passando
[03:07.35]Só pra te dizer
[03:08.50]Que é tarde demais
[03:53.10]`
        },
        {
            number: 4,
            title: "Fui Eu",
            duration: "5:02",
            composers: ["Michael Sullivan / Paulo Massadas"],
            audio: "audio/04.flac",
            lyrics: `[00:08.82]É mais um dia sem você
[00:14.37]Mais uma noite que eu espero
[00:20.79]Se alguém no mundo quis você.
[00:26.10]Fui eu.
[00:33.31]Te dei os sonhos que sonhei
[00:39.62]Te imaginei pra vida inteira.
[00:44.12]Se alguém fez tudo por você.
[00:52.60]Fui eu!
[00:55.98]
[01:00.29]Diz agora o que é que eu faço pra viver
[01:05.76]Se a cada dia é mais difícil te esquecer
[01:11.16]Tudo isso faz doer demais
[01:15.74]Eu queria só voltar atrás
[01:17.41]Ficar contigo.
[01:22.57]Diz agora o que é que eu faço pra aceitar
[01:29.21]Será que existe outra pessoa em meu lugar?
[01:34.22]Mas o tempo vai te convencer
[01:37.54]E um dia vai reconhecer que sem mim não pode mais viver.
[01:47.24]Sentimento
[01:50.31]Dói por dentro
[01:54.25]E a solidão não quer parar de machucar
[01:56.94]
[02:00.08]Sentimento
[02:03.43]Dói por dentro
[02:06.66]Meu coração não quer ninguém no teu lugar.
[02:18.85]Te dei os sonhos que... sonhei
[02:26.70]Te imaginei pra vida inteira
[02:32.92]Se alguém fez tudo por você...
[02:38.56]Fui eu!
[02:39.67](Fui eu)
[02:44.95]Diz agora o que é que eu faço pra viver?
[02:51.96]Se a cada dia é mais difícil te esquecer
[02:56.60]Tudo isso faz doer demais
[03:00.37]Eu queria só voltar atrás
[03:02.93]Ficar... contigo
[03:07.50]Diz agora
[03:09.37]O que é que eu faço pra aceitar?
[03:13.85]Será que existe outra pessoa em meu lugar?
[03:19.92]Mas o tempo vai te convencer
[03:23.20]E um dia vai reconhecer
[03:26.25]Que sem mim não pode mais viver!
[03:32.71]Sentimento
[03:35.17]Dói por dentro
[03:40.41]E a solidão não quer parar de machucar
[03:45.46]Sentimento
[03:47.98]Dói por dentro
[03:51.79]Meu coração não quer ninguém no seu lugar
[03:58.07]Sentimento
[04:00.70]Dói por dentro
[04:03.43](Dói por dentro)
[04:05.21]E a solidão não quer parar de machucar
[04:10.61]Sentimento
[04:13.38]Dói por dentro
[04:17.90]Meu coração não quer ninguem no teu lugar
[04:23.95]Sentimento
[04:26.05](Sentimento)
[04:26.95]Dói por dentro
[04:28.75](Dói por dentro)
[04:31.48]E a solidão não quer parar de machucar (não quer parar de machucar)
[04:36.82]Sentimento
[04:40.02]Dói por dentro
[04:44.73]Meu coração não quer ninguém no teu lugar
[04:49.98]`
        },
        {
            number: 5,
            title: "O Povo Fala",
            duration: "3:06",
            composers: ["Laudarcy Ricardo De Oliveira / Jean Carlos Spanhol"],
            audio: "audio/05.flac",
            lyrics: `[00:17.55]Deixa o povo falar
[00:19.20]O povo fala e nóis namora, fala e nóis namora
[00:23.72]Fala e nóis namora
[00:26.34]Deixa o povo falar
[00:26.88]O povo fala e nóis namora, fala e nóis namora
[00:31.95]Fala e nóis namora
[00:36.53]Não acredite nessa conversa fiada
[00:40.13]É melhor ficar comigo
[00:41.68]Do que mal acompanhada
[00:44.85]Sei que tão falando
[00:45.95]Que sou vagabundo e não valho nada
[00:48.17]Tudo conversa fiada, tudo conversa fiada
[00:53.92]Vê se eu vou ficar nervoso
[00:56.41]Com esse bando de invejoso
[00:58.51]Que não tem freio na língua
[01:00.24]E o povo tá que fala
[01:03.06]Fala e nóis namora, fala e nóis namora
[01:07.12]Fala que a fofoca deixa eu mais famoso ainda
[01:11.32]Deixa o povo falar
[01:12.83]O povo fala e nóis namora, fala e nóis namora
[01:17.42]Fala e nóis namora
[01:20.08]Deixa o povo falar
[01:20.92]O povo fala e nóis namora, fala e nóis namora
[01:25.73]Fala e nóis namora
[01:28.42]
[01:44.93]Não acredite nessa conversa fiada
[01:47.28]É melhor ficar comigo
[01:50.35]Do que mal acompanhada
[01:53.19]Sei que tão falando
[01:54.04]Que sou vagabundo e não valho nada
[01:56.69]Tudo conversa fiada, tudo conversa fiada
[02:01.17]Vê se eu vou ficar nervoso
[02:03.78]Com esse bando de invejoso
[02:06.78]Que não tem freio na língua
[02:08.50]E o povo tá que fala
[02:11.23]Fala e nóis namora, fala e nóis namora
[02:15.37]Fala que a fofoca deixa eu mais famoso ainda
[02:20.16]Deixa o povo falar
[02:21.47]O povo fala e nóis namora, fala e nóis namora
[02:25.71]Fala e nóis namora
[02:27.54]Deixa o povo falar
[02:29.73]O povo fala e nóis namora, fala e nóis namora
[02:34.07]Fala e nóis namora
[02:35.31]Deixa o povo falar
[02:37.16]O povo fala e nóis namora, fala e nóis namora
[02:42.38]Fala e nóis namora
[02:43.63]Deixa o povo falar
[02:44.99]O povo fala e nóis namora, fala e nóis namora
[02:50.55]Fala e nóis namora
[03:06.12]`
        },
        {
            number: 6,
            title: "Pra Mudar a Minha Vida",
            duration: "4:04",
            composers: ["César Augusto / Piska"],
            audio: "audio/06.flac",
            lyrics: `[00:00.70](Fazer uma perguntinha pra vocês aqui, oh!
[00:02.93]Eu quero que vocês me respondam
[00:04.94]Com muita sinceridade
[00:06.76]Tem alguém apaixonado aqui hoje
[00:07.49]Porque se tiver gente apaixonado aqui hoje
[00:13.08]Pode preparar o coraçãozinho
[00:15.90]Que a gente veio pra judiar gente!)
[00:18.20]
[00:35.49]Queria tanto te dizer que eu já não te amo
[00:47.16]Que o seu amor em minha vida foi mais um engano
[00:53.74]Até quando eu tenho que fingir?
[00:56.39]Se a minha boca morre de vontade do seu beijo
[01:05.99]Queria esquecer você apenas um momento
[01:09.54]Mas nunca consegui tirar você do pensamento
[01:15.80]Quando eu digo que não devo te amar
[01:19.06]O meu coração me diz te quero e não tem jeito
[01:25.69]Eu sempre fiz de tudo pra me apaixonar (E aí?)
[01:28.67]Até um dia alguém deixar saudade no meu peito
[01:37.79]Agora eu tenho medo
[01:40.54]Agora eu tenho medo (Quero ouvir!)
[01:44.40]Você chegou, me deixou sem saída
[01:48.11]Me fez te querer quando eu não mais queria
[01:58.49]Você me fez amar quando eu dizia não
[02:00.21]E acreditar que no seu coração,
[02:05.52]Tinha o grande amor que eu sonhei um dia
[02:08.80]Você chegou quando a dor mais doía (E aí?)
[02:13.83]E me encontrou quando eu me perdia
[02:24.15]Acho que foi Deus que te mandou pra mim
[02:27.80]Pra recomeçar e me fazer feliz, por toda a vida
[02:34.72]Eu sempre fiz de tudo pra me apaixonar
[02:48.72]Até um dia alguém deixar saudade no meu peito
[02:52.05]Agora eu tenho medo
[03:01.22]Agora eu tenho medo (Isso, e vocês!)
[03:06.76]Você chegou, me deixou sem saída
[03:08.20]Me fez te querer quando eu não mais queria
[03:18.39]Você me fez amar quando eu dizia não
[03:20.35]E acreditar que no seu coração
[03:22.78]Tinha o grande amor que eu sonhei um dia
[03:35.59]Você chegou quando a dor mais doía
[03:37.75]E me encontrou quando eu me perdia
[03:44.14]Acho que foi Deus que te mandou pra mim
[03:46.04]Pra recomeçar e me fazer feliz, por toda a vida
[04:04.84]`
        },
        {
            number: 7,
            title: "Diz Pro Meu Olhar",
            duration: "3:38",
            composers: ["Zezé Di Camargo / César Augusto"],
            audio: "audio/07.flac",
            lyrics: `[00:12.13]Quantas vezes em silencio desejei sumir daqui
[00:18.00]Ir buscar meus sonhos em outro caminho
[00:24.44]E ao abrir aquela porta pra sair eu me toquei
[00:31.06]Que nas ruas eu estava mais sozinho
[00:36.40]Já dormi em outros braços mas não pude te esquecer
[00:43.05]O meu coração queimava feito brasa
[00:48.44]Parecia um pesadelo viver longe de você
[00:55.00]E é por isso que voltei pra nossa casa
[01:01.00]De saudade toda noite eu chorava
[01:09.11]Não vou mais deixar, ah ah ah
[01:15.15]Outro amor assim me machucar
[01:22.00]Diz pro meu olhar
[01:27.47]Se vai me perdoar
[02:00.00]Quando penso em nós dois
[02:02.28]Eu sinto raiva do que fiz
[02:06.00]As lembranças vem molhar o meu sorriso
[02:12.11]Tudo que eu mais queria
[02:15.73]Estava perto e eu não vi
[02:18.40]Do inferno é que se vê o paraíso
[02:24.00]Hoje eu sei tudo que eu quero
[02:27.11]E o que eu preciso
[02:31.44]Não vou mais deixar, ah ah ah
[02:38.12]Outro amor assim me machucar
[02:43.43]Diz pro meu olhar
[02:50.17]Se vai me perdoar
[02:56.09]Não vou mais deixar, Não vou mais deixar
[03:02.00]Outro amor assim me machucar
[03:08.21]Diz pro meu olhar (pro meu olhar)
[03:13.77]Se vai me perdoar`
        },
        {
            number: 8,
            title: "Não Quero Te Perder",
            duration: "4:33",
            composers: ["Ezequiel Silva / Guilherme E Silva Ferraz / Jonatas de Lemes / Nailton da Costa"],
            audio: "audio/08.flac",
            lyrics: `[00:23.34]Quero sim
[00:29.71]Um minuto do seu tempo só pra mim
[00:35.78]Eu insisto
[00:39.95]O seu olhar me devora, viro presa
[00:45.66]Não dá pra escapar
[00:48.76]Não resisto
[00:52.61]Quero sua boca, o seu beijo molhado
[00:56.09]Nosso amor grudando a pele
[00:57.85]O coração disparado
[00:59.14]É fantástico viver com você
[01:01.43]Esse momento mágico
[01:05.24]Eu te amo tanto, em você eu 'to ligado
[01:08.91]O desejo à flor da pele
[01:10.57]No meu corpo suado
[01:12.11]Quem fotografar o seu coração
[01:14.38]Vai me ver do seu lado
[01:17.83]Perder você
[01:20.15]É como ver o coração parar
[01:27.69]Cair e não poder se levantar
[01:33.57]Por isso é que eu não quero te perder
[01:40.23]Perder você
[01:43.45]É caminhar e não sentir o chão
[01:49.87]Eu vivo e morro por essa paixão
[01:55.91]Por isso que eu não quero te perder
[02:19.15]Quero sim
[02:23.10]Um minuto do seu tempo só pra mim
[02:28.82]Eu insisto
[02:32.75]O seu olhar me devora, viro presa
[02:39.20]Não dá pra escapar
[02:42.19]Não resisto
[02:45.76]Quero sua boca, o seu beijo molhado
[02:49.44]Nosso amor grudando a pele
[02:51.04]O coração disparado
[02:52.59]É fantástico viver com você
[02:54.74]Esse momento mágico
[02:58.66]Eu te amo tanto, em você eu 'to ligado
[03:02.17]O desejo à flor da pele
[03:03.81]No meu corpo suado
[03:05.44]Quem fotografar o seu coração
[03:07.74]Vai me ver do seu lado
[03:11.26]Perder você
[03:13.61]É como ver o coração parar
[03:20.78]Cair e não poder se levantar
[03:27.00]Por isso é que eu não quero te perder
[03:33.64]Perder você
[03:36.90]É caminhar e não sentir o chão
[03:43.27]Eu vivo e morro por essa paixão
[03:49.39]Por isso que eu não quero te perder
[03:57.22]Por isso que eu não quero te perder
[04:03.43]Por isso que eu não quero te perder
[04:18.66]Te perder`
        },
        {
            number: 9,
            title: "No Dia Em Que Saí de Casa",
            duration: "3:44",
            composers: ["Joel Marques"],
            audio: "audio/09.flac",
            lyrics: `[00:41.69]No dia em que eu saí de casa
[00:44.82]Minha mãe me disse
[00:46.96]Filho, vem cá!
[00:49.77]Passou a mão em meus cabelos
[00:52.35]Olhou em meus olhos
[00:54.86]Começou falar
[00:57.00]Por onde você for, eu sigo
[01:00.17]Com meus pensamentos
[01:02.03]Sempre onde estiver
[01:05.10]Em minhas orações
[01:07.97]Eu vou pedir a Deus
[01:09.35]Que ilumine os passos seus
[01:14.22]Eu sei que ela nunca compreendeu
[01:17.80]Os meus motivos de sair de lá
[01:21.75]Mas ela sabe que depois que cresce
[01:24.91]O filho vira passarinho e quer voar
[01:29.67]Eu bem queria continuar ali
[01:32.81]Mas o destino quis me contrariar
[01:37.56]E o olhar de minha mãe na porta
[01:40.58]Eu deixei chorando a me abençoar
[02:02.29]A minha mãe naquele dia
[02:05.57]Me falou do mundo como ele é
[02:10.40]Parece que ela conhecia
[02:13.24]Cada pedra que eu iria por o pé
[02:17.61]E sempre ao lado do meu pai
[02:20.72]Da pequena cidade ela jamais saiu
[02:26.08]Ela me disse assim:
[02:27.10]Meu filho, vá com Deus
[02:29.85]Que esse mundo inteiro é seu
[02:35.05]Eu sei que ela nunca compreendeu
[02:38.55]Os meus motivos de sair de lá
[02:42.75]Mas ela sabe que depois que cresce
[02:45.78]O filho vira passarinho e quer voar
[02:49.42]Eu bem queria continuar ali
[02:53.92]Mas o destino quis me contrariar
[02:58.13]E o olhar de minha mãe na porta
[03:01.28]Eu deixei chorando a me abençoar
[03:05.63]E o olhar de minha mãe na porta
[03:08.90]Eu deixei chorando a me abençoar
[03:13.52]E o olhar de minha mãe na porta
[03:16.23]Eu deixei chorando a me abençoar
[03:44.35]`
        },
        {
            number: 10,
            title: "Nunca Amei Assim",
            duration: "4:04",
            composers: ["Alexandre / Ricardo De Oliveira Laudarcy / Rick / Zezé Di Camargo"],
            audio: "audio/10.flac",
            lyrics: ``
        },
        {
            number: 11,
            title: "Como Um Anjo / Faz Mais Uma Vez Comigo",
            duration: "7:50",
            composers: ["Como um Anjo: Lucas Robles / Roberto Merli | Faz Mais Uma Vez Comigo: César Augusto"],
            audio: "audio/11.flac",
            lyrics: `[00:22.22]Como um anjo você apareceu na minha vida
[00:31.07]Como um anjo repleto de ternura e de paixão
[00:39.88]Como um anjo encanto é sedução doce aventura
[00:48.30]Que loucura você desabrochando no meu coração
[00:56.74]Linda menina com olhar inocente malícia, desejo e tentação
[01:07.30]Que me cobre de amor e carícias vencendo a solidão
[01:13.48]Só você pra me fazer feliz
[01:20.36]Anjo, a luz do sol tá me acordando
[01:26.07]Não vá embora estou te amando
[01:28.57]Por favor não me deixe só
[01:34.13]Anjo, não quero abrir meus olhos
[01:39.80]Quero seguir vivendo um sonho de sermos só você e eu
[02:01.73]Linda menina com olhar inocente malícia, desejo e tentação
[02:11.61]Que me cobre de amor e carícias vencendo a solidão
[02:17.72]Só você pra me fazer feliz
[02:24.53]Anjo, a luz do sol tá me acordando
[02:30.74]Não vá embora estou te amando
[02:33.04]Por favor não me deixe só
[02:38.61]Anjo, não quero abrir meus olhos
[02:43.86]Quero seguir vivendo um sonho de sermos só você e eu
[02:52.58]Anjo, a luz do sol tá me acordando
[02:58.06]Não vá embora estou te amando
[03:00.79]Por favor não me deixe só
[03:06.37]Anjo, não quero abrir meus olhos
[03:11.85]Quero seguir vivendo um sonho de sermos só você e eu
[03:20.38]Anjo, a luz do sol tá me acordando
[03:25.74]Não vá embora estou te amando
[03:28.42]Por favor não me deixe só
[03:34.62]Anjo, não quero abrir meus olhos
[03:39.58]Quero seguir vivendo um sonho de sermos só você e eu
[04:04.07]Não paro de rolar na cama
[04:07.14]Já nem trabalho mais direito
[04:10.56]Sozinho, coração reclama
[04:12.85]Dentro do meu peito
[04:17.64]Eu ando tão apaixonado
[04:21.00]Pagando todos os pecados
[04:24.66]Não ligo mais pros meus amigos
[04:26.71]Vivo tão calado
[04:31.87]Faz mais uma vez comigo
[04:34.94]Só mais uma vez comigo
[04:38.58]Eu quero te encontar de novo
[04:40.61]Volta pro meu corpo
[04:42.54]Perdi o juízo
[04:45.83]Faz mais uma vez comigo
[04:48.82]Só mais uma vez comigo
[04:52.26]Eu quero te encontar de novo
[04:54.56]Volta pro meu corpo
[04:56.65]É disso que eu preciso
[05:01.51]Quase que bati o carro
[05:04.87]Passando no farol vermelho
[05:08.12]Olhando no retrovisor
[05:10.29]Só vi você no espelho
[05:14.93]Tô abusando do cigarro
[05:18.52]Só fico por aí sofrendo
[05:22.37]Preciso te encontar depressa
[05:24.29]Eu estou morrendo
[05:29.10]Faz mais uma vez comigo
[05:32.51]Só mais uma vez comigo
[05:35.62]Eu quero te encontar de novo
[05:38.02]Volta pro meu corpo
[05:39.50]Perdi o juízo
[05:43.29]Faz mais uma vez comigo
[05:47.76]Só mais uma vez comigo
[05:50.76]Eu quero te encontar de novo
[05:53.14]Volta pro meu corpo
[05:54.71]É disso que eu preciso
[06:13.97]Faz mais uma vez comigo
[06:17.41]Só mais uma vez comigo
[06:20.92]Eu quero te encontar de novo
[06:23.24]Volta pro meu corpo
[06:24.94]Perdi o juízo
[06:27.91]Faz mais uma vez comigo
[06:31.35]Só mais uma vez comigo
[06:35.18]Eu quero te encontar de novo
[06:36.33]Volta pro meu corpo
[06:38.66]É disso que eu preciso
[06:42.15]Faz mais uma vez comigo
[06:45.39]Só mais uma vez comigo
[06:48.72]Eu quero te encontar de novo
[06:51.06]Volta pro meu corpo
[06:52.57]Perdi o juízo
[06:55.65]Faz mais uma vez comigo
[06:59.36]Só mais uma vez comigo
[07:02.50]Eu quero te encontar de novo
[07:05.07]Volta pro meu corpo
[07:06.63]É disso que eu preciso
[07:08.90]Faz mais uma vez comigo
[07:13.07]Só mais uma vez comigo
[07:16.55]Eu quero te encontar de novo
[07:18.92]Volta pro meu corpo
[07:20.20]Perdi o juízo
[07:24.55]Faz mais uma vez comigo
[07:27.11]Só mais uma vez comigo
[07:30.47]Eu quero te encontar de novo
[07:32.71]Volta pro meu corpo
[07:34.36]É disso que eu preciso
[07:50.22]`
        },
        {
            number: 12,
            title: "Meu País",
            duration: "4:56",
            composers: ["Zezé Di Camargo"],
            audio: "audio/12.flac",
            lyrics: `[00:28.62]Aqui não falta Sol
[00:30.61]Aqui não falta chuva
[00:32.35]A terra faz brotar qualquer semente
[00:37.28]Se a mão de Deus
[00:42.49]Protege e molha o nosso chão
[00:44.76]Por que será que 'tá faltando pão?
[00:48.90]Se a natureza nunca reclamou da gente
[00:56.06]Do corte do machado, a foice, o fogo ardente
[01:04.02]Se nessa terra tudo que se planta dá
[01:07.80]Que é que há, meu país?
[01:12.38]O que é que há?
[01:15.95]Se nessa terra tudo que se planta dá
[01:20.16]Que é que há, meu país?
[01:24.37]O que é que há?
[01:27.63]Tem alguém levando lucro
[01:32.58]Tem alguém colhendo o fruto
[01:35.17]Sem saber o que é plantar
[01:38.61]'Tá faltando consciência
[01:43.43]'Tá sobrando paciência
[01:47.13]'Tá faltando alguém gritar
[01:53.27]Feito um trem desgovernado
[01:56.36]Quem trabalha 'tá ferrado
[01:59.48]Nas mãos de quem só engana
[02:02.45]Feito mal que não tem cura
[02:07.39]Estão levando à loucura
[02:10.47]O país que a gente ama
[02:42.75]Se a natureza nunca reclamou da gente
[02:46.69]Do corte do machado, a foice, o fogo ardente
[02:53.31]Se nessa terra tudo que se planta dá
[02:58.30]Que é que há, meu país?
[03:02.99]O que é que há?
[03:06.07]Se nessa terra tudo que se planta dá
[03:10.62]Que é que há, meu país?
[03:15.49]O que é que há?
[03:18.90]Tem alguém levando lucro
[03:22.16]Tem alguém colhendo o fruto
[03:25.75]Sem saber o que é plantar
[03:28.74]'Tá faltando consciência
[03:34.28]'Tá sobrando paciência
[03:37.18]'Tá faltando alguém gritar
[03:43.36]Feito um trem desgovernado
[03:46.88]Quem trabalha 'tá ferrado
[03:49.24]Nas mãos de quem só engana
[03:53.56]Feito mal que não tem cura
[03:58.68]Estão levando à loucura
[04:01.97]O país que a gente ama
[04:06.76]Feito mal que não tem cura
[04:11.04]Estão levando à loucura
[04:13.63]O Brasil que a gente ama`
        },
        {
            number: 13,
            title: "Nosso Amor é Ouro / Pão de Mel",
            duration: "7:29",
            composers: ["Nosso Amor é Ouro: Zé Henrique | Pão de Mel: Zezé Di Camargo"],
            audio: "audio/13.flac",
            lyrics: `[00:23.03]Nosso amor é ouro, joia rara de se ver
[00:26.80]É chuva de sonhos coloridos com prazer
[00:31.11]Somos o desejo e a paixão, nós somos um querer
[00:37.88]Coração na boca e um sorriso no olhar
[00:44.53]O suor na pele e a música no ar
[00:47.70]Nós dois em nosso ninho
[00:52.15]Entregues ao sabor de amar
[00:57.77]Nosso amor é sangue e coração
[01:01.02]Sonho que eu jamais quero acordar
[01:05.09]Apaixonadamente apaixonados
[01:09.99]Como o peixe e o mar
[01:13.13]Somos a semente e o chão
[01:18.40]Somos como a arca e o tesouro
[01:23.35]Nosso amor é forte, é diamante
[01:27.12]Nosso amor é ouro (agora vocês, assim ó)
[01:48.80]Coração na boca e um sorriso no olhar
[01:52.66]O suor na pele e a música no ar
[01:56.16]Nós dois em nosso ninho
[01:58.81]Entregues ao sabor de amar
[02:05.10]Nosso amor é sangue e coração
[02:08.89]Sonho que eu jamais quero acordar
[02:12.78]Apaixonadamente apaixonados
[02:16.92]Como o peixe e o mar
[02:20.50]Somos a semente e o chão
[02:25.29]Somos como a arca e o tesouro
[02:30.85]Nosso amor é forte, é diamante
[02:34.86]Nosso amor é ouro (só vocês)
[02:39.97]Nosso amor é sangue e coração
[02:43.48]Sonho que eu jamais quero acordar
[02:48.88]Apaixonadamente apaixonados
[02:52.01]Como o peixe e o mar
[02:55.48]Somos a semente e o chão
[03:01.65]Somos como a arca e o tesouro
[03:05.96]Nosso amor é forte, é diamante
[03:09.61]Nosso amor é ouro
[03:15.63]Nosso amor é forte, é diamante
[03:18.63]Nosso amor é ouro
[03:26.61]E continua as mãos pra cima
[03:28.67]E o balanço
[03:31.50]A galera lá em cima, eu quero ver
[03:33.58]E vem, e vem, hey hey hey
[03:43.05]Você é minha luz, estrada meu caminho
[03:47.46]Sem você não sei andar sozinho
[03:50.81]Sou tão dependente de você
[03:57.03]Chama que alimenta o fogo da paixão
[04:02.27]Chuva que molhou meu coração
[04:05.86]Sou tão dependente de você
[04:13.26]Vem meu céu, meu pão de mel
[04:16.32]Meu bem querer (canta São Paulo, vai)
[04:19.73]Vem meu céu, meu pão de mel
[04:23.69]Meu bem querer
[04:28.40]Ai, ai, ai, ai, ai, esse amor
[04:33.25]É bom demais
[04:36.41]Ai, ai, ai, ai, ai, esse amor
[04:40.08]Marcou demais
[04:44.61]Ai, ai, ai, ai, ai, esse amor
[04:48.25]Ficou em mim
[04:51.05]Ai, ai, ai, ai, ai, esse amor
[04:55.42]Não vai ter fim (e o balanço, cadê)
[05:16.06]Você é minha luz, estrada meu caminho
[05:19.44]Sem você não sei andar sozinho
[05:23.26]Sou tão dependente de você
[05:29.76]Chama que alimenta o fogo da paixão
[05:34.33]Chuva que molhou meu coração
[05:38.01]Sou tão dependente de você
[05:44.84]Vem meu céu, meu pão de mel
[05:48.63]Meu bem querer
[05:52.46]Vem meu céu, meu pão de mel
[05:55.83]Meu bem querer
[06:01.93]Ai, ai, ai, ai, ai, esse amor
[06:05.23]É bom demais
[06:08.92]Ai, ai, ai, ai, ai, esse amor
[06:13.62]Marcou demais
[06:17.32]Ai, ai, ai, ai, ai, esse amor
[06:20.41]Ficou em mim
[06:23.55]Ai, ai, ai, ai, ai, esse amor
[06:27.59]Não vai ter fim
[06:30.83]Ai, ai, ai, ai, ai, esse amor
[06:35.07]É bom demais
[06:39.12]Ai, ai, ai, ai, ai, esse amor
[06:43.13]Marcou demais
[06:48.74]Ai, ai, ai, ai, esse amor, esse amor
[06:51.70]Ficou em mim
[06:54.48]Ai, ai, ai, ai, esse amor, esse amor
[06:58.68]Não vai ter fim
[07:03.22]Esse amor não vai ter fim
[07:10.06]Esse amor não vai ter fim`
        },
        {
            number: 14,
            title: "O Melhor é Dar um Tempo",
            duration: "3:08",
            composers: ["Carlos Roberto Piazzoli / Zezé Di Camargo"],
            audio: "audio/14.flac",
            lyrics: `[00:13.39]De quem é o erro?
[00:14.49]De quem é a dívida?
[00:17.19]Quem sobrou na história?
[00:17.86]Quem passou da medida?
[00:19.96]Quem foi o bobo, o vacilão?
[00:22.63]Quem foi o Judas?
[00:24.54]Traidor da nação?
[00:27.04]Até quando as perguntas
[00:30.52]Vão ficando sem respostas?
[00:33.68]Até quando essa dúvida
[00:35.38]Se a culpa foi nossa?
[00:40.20]Cair de pau um no outro
[00:42.74]Não vai ser a solução
[00:46.30]E eu ja cansei de mentir
[00:47.87]E ferir o meu coração
[00:51.46]Mas o melhor é dar um tempo
[00:55.07]Nessa hora
[00:58.47]Ninguém mais tem razão
[00:59.63]Depois que um homem chora
[01:02.29]
[01:05.30]Ninguém sabe o que fazer
[01:08.74]Se a saudade aparecer
[01:11.91]Quem vai sair ou vai ficar
[01:14.42]Quem é que vai embora?
[01:18.63]Ninguém sabe o que fazer
[01:20.44]Se a saudade aparecer
[01:25.04]Quem vai sair ou vai ficar
[01:28.21]Quem é que vai embora?
[01:45.96]Até quando as perguntas
[01:49.08]Vão ficando sem respostas?
[01:52.56]Até quando essa dúvida
[01:54.29]Se a culpa foi nossa?
[01:58.47]Cair de pau um no outro
[02:01.65]Não vai ser a solução
[02:04.48]E eu ja cansei de mentir
[02:06.74]E ferir o meu coração
[02:10.13]Mas o melhor é dar um tempo
[02:13.93]Nessa hora
[02:16.58]Ninguém mais tem razão
[02:19.47]Depois que um homem chora
[02:24.34]Ninguém sabe o que fazer
[02:27.36]Se a saudade aparecer
[02:30.95]Quem vai sair ou vai ficar?
[02:32.65]Quem é que vai embora?
[02:37.60]Ninguém sabe o que fazer
[02:39.26]Se a saudade aparecer
[02:43.91]Quem vai sair ou vai ficar?
[02:45.87]Quem é que vai embora?
[02:52.73]Mas o melhor é dar um tempo nessa hora
[03:08.08]`
        },
        {
            number: 15,
            title: "O Que Vai Ser de Nós",
            duration: "3:52",
            composers: ["Carlos Randall / Danimar / Tivas"],
            audio: "audio/15.flac",
            lyrics: `[00:16.78]Diz nada não
[00:21.22]Apenas vai pegando as minhas coisas
[00:23.66]E amontoando aí no chão
[00:27.05]Enquanto eu vou tentando
[00:29.15]Achar um jeito de tirar você do coração
[00:33.32]Eu tenho que levar porradas
[00:35.92]Por ter aprontado outra vez
[00:42.38]De solidão
[00:45.94]Eu já fiz faculdade e hoje sei
[00:48.82]O que é perder uma grande paixão
[00:52.43]Eu sei cuidar de mim
[00:54.35]Eu vou à luta, eu saio dessa
[00:56.09]Não tem nada não
[00:58.54]Não tem nada não
[01:01.83]Eu vou pagar pra ver
[01:04.64]Mas na verdade eu sou
[01:07.19]Completamente louco por você
[01:11.15]Eu sei que eu pisei na bola
[01:13.55]E agora eu posso ver
[01:17.30]Que só aprontei
[01:19.51]Te machuquei, te fiz sofrer
[01:24.70]Não quero te perder
[01:30.26]Mas não sou eu
[01:31.67]Quem vai interferir
[01:32.76]Na sua decisão
[01:36.11]Mas saiba que o destino
[01:38.07]Desse nosso amor
[01:39.66]Está em suas mãos
[01:42.37]E é você quem vai
[01:44.68]Dizer o que vai ser de nós
[02:01.34]De solidão
[02:04.42]Eu já fiz faculdade e hoje sei
[02:07.63]O que é perder uma grande paixão
[02:11.37]Eu sei cuidar de mim
[02:13.03]Eu vou à luta, eu saio dessa
[02:15.08]Não tem nada não
[02:17.10]Não tem nada não
[02:20.52]Eu vou pagar pra ver
[02:23.48]Mas na verdade eu sou
[02:25.42]Completamente louco por você
[02:29.94]Eu sei que eu pisei na bola
[02:32.32]E agora eu posso ver
[02:36.11]Que só aprontei
[02:38.25]Te machuquei, te fiz sofrer
[02:42.29]Não quero te perder
[02:48.77]Mas não sou eu
[02:50.39]Quem vai interferir
[02:51.51]Na sua decisão
[02:54.92]Mas saiba que o destino
[02:57.10]Desse nosso amor
[02:58.48]Está em suas mãos
[03:01.20]E é você quem vai
[03:03.47]Dizer o que vai ser de nós
[03:08.35]Não quero te perder
[03:13.44]Mas não sou eu
[03:15.20]Quem vai interferir
[03:16.33]Na sua decisão
[03:19.61]Mas saiba que o destino
[03:21.84]Desse nosso amor
[03:23.35]Está em suas mãos
[03:26.12]E é você quem vai
[03:28.27]Dizer o que vai ser de nós
[03:33.88]E é você quem vai
[03:37.92]Dizer o que vai ser de nós`
        },
        {
            number: 16,
            title: "Te Extraño (Saudade)",
            duration: "3:26",
            composers: ["Chrystian"],
            audio: "audio/16.flac",
            lyrics: `[00:17.95]Tú siempre viviste en mis sueños
[00:23.00]Fuiste mi luz, mi secreto
[00:25.66]Ha pasado el tiempo
[00:27.80]Y aún te quiero tanto, como ayer
[00:37.59]Mi corazón te busca y cuenta los días
[00:40.06]Mi mente te piensa, mi alma está tan vacía
[00:44.18]Nuestra primera vez se me grabó en la piel
[00:52.07]
[00:54.27]Tal vez yo sea de tu pasado solo un recuerdo más
[01:00.22]Y yo oigo tu voz que me llama
[01:11.52]Sueño, lloro, siento que vive aún la esperanza
[01:19.27]Te extraño, debo arrancar esta página de mi vida
[01:29.16]Tú siempre viviste en mis sueños
[01:50.54]Fuiste mi luz, mi secreto
[01:54.66]Ha pasado el tiempo
[01:56.91]Y aún te quiero tanto, como ayer
[02:02.80]
[02:04.86]Mi corazón te busca y cuenta los días
[02:08.08]Mi mente te piensa, mi alma está tan vacía
[02:11.26]Nuestra primera vez se me grabó en la piel
[02:20.77]
[02:23.25]Tal vez yo sea de tu pasado solo un recuerdo más
[02:33.93]Y yo oigo tu voz que me llama
[02:40.54]Sueño, lloro, siento que vive aún la esperanza
[02:46.80]Te extraño, debo arrancar esta página de mi vida
[02:58.88]`
        },
        {
            number: 17,
            title: "Mi Universo Eres Tu (Meu Universo é Você)",
            duration: "4:33",
            composers: ["Nando / Ricardo Feghali"],
            audio: "audio/17.flac",
            lyrics: `[00:00.28]Más que la luz de una estrella, ah-ah
[00:13.56]Yo quería ser más que un amigo
[00:18.08]Pero tú no me entiendes
[00:20.94]Si te sientes deprimida, lloro junto a tí
[00:27.68]Me confiesas penas y aventuras
[00:32.02]Tus secretos más íntimos
[00:34.55]Junto a tu lado sueño que algún día mía vas a ser
[00:42.96]Mírame a los ojos, dime
[00:46.01]Si no imaginas lo que siento, baby
[00:52.55]Más que la luz de una estrella, ah
[01:00.05]Mi universo eres tú, baby
[01:06.73]Quiero poder entregarte, ah
[01:13.08]El sentimiento que por ti inventé
[01:20.34]Tengo miedo que tal vez descubras
[01:24.39]Que en sueños grito tu nombre
[01:27.62]Con la ayuda del destino, tú vendrás a mí
[01:34.34]Yo sé bien que otros te han amado
[01:38.68]Ya es un tiempo pasado
[01:41.15]Descubrí tu amor en mi presente y nada puedo hacer
[01:49.43]Mírame a los ojos, dime
[01:52.63]Si no imaginas lo que siento, baby
[01:59.39]Más que la luz de una estrella, ah
[02:06.85]Mi universo eres tú, baby
[02:13.36]Quiero poder entregarte, ah
[02:19.68]El sentimiento que por ti inventé
[02:25.70]
[02:56.32]Mírame a los ojos, dime
[02:59.31]Si no imaginas lo que siento, baby
[03:05.82]Más que la luz de una estrella, ah
[03:13.45]Mi universo eres tú, baby
[03:20.16]Quiero poder entregarte, ah
[03:26.83]El sentimiento que por ti inventé
[03:33.32]El sentimiento que por ti inventé, baby
[03:41.13]Más que la luz de una estrella, ah
[03:48.62]Mi universo eres tú, baby
[03:55.17]Quiero poder entregarte, ah
[04:01.43]El sentimiento que por ti inventé
[04:08.03]`
        },
        {
            number: 18,
            title: "Tristeza do Jeca / Último dos Apaixonados",
            duration: "7:24",
            composers: ["Tristeza do Jeca: Angelino de Oliveira | Último dos Apaixonados: Joel Marques / Maracaí"],
            audio: "audio/18.flac",
            lyrics: `[00:51.42]Nestes versos tão singelos
[00:56.38]Minha bela, meu amor
[00:59.88]Prá você quero contar
[01:07.26]O meu sofrer e a minha dor
[01:12.34]Sou igual a um sabiá
[01:19.53]Que quando canta é só tristeza
[01:23.14]Desde o galho onde ele está
[01:28.07]Nesta viola canto e gemo de verdade
[01:38.15]Cada toada representa uma saudade
[01:49.39]Eu nasci naquela serra
[01:54.88]Num ranchinho beira-chão
[02:00.13]Todo cheio de buracos
[02:06.96]Onde a lua faz clarão
[02:10.60]Quando chega a madrugada
[02:17.98]Lá no mato a passarada
[02:22.58]Principia um barulhão
[02:28.01]Nesta viola, canto e gemo de verdade
[02:38.87]Cada toada representa uma saudade
[02:47.27]
[03:08.30]Lá no mato tudo é triste
[03:13.45]Desde o jeito de falar
[03:19.84]Pois o Jeca quando canta
[03:24.65]Dá vontade de chorar
[03:31.17]E o choro que vai caindo
[03:36.67]Devagar vai-se sumindo
[03:40.74]Como as águas vão pro mar.
[03:47.07]E o choro que vai caindo
[03:52.17]Devagar vai-se sumindo
[03:56.38]Como as águas vão pro mar.
[07:24.63]`
        },
        {
            number: 19,
            title: "Something / É o Amor",
            duration: "4:56",
            composers: ["Something: George Harrison | É o Amor: Zezé Di Camargo"],
            audio: "audio/19.flac",
            lyrics: ``
        },
        {
            number: 20,
            title: "Hey Jude",
            duration: "7:11",
            composers: ["John Lennon / Paul McCartney"],
            audio: "audio/20.flac",
            lyrics: `[00:05.70]Hey Jude, não fique assim
[00:11.34]Sabe a vida ainda é bela
[00:17.82]Esqueça de tudo que aconteceu
[00:23.17]Amanhã será um novo dia
[00:30.31]Hey Jude, pra que chorar
[00:36.73]Por alguém que não te ama
[00:44.52]Se o mundo agora te faz sofrer
[00:49.03]Tudo vai passar você vai ver
[00:57.91]Muita coisa vai fazer você mudar
[01:03.94]Não tem mais razão de ser essa tristeza
[01:14.28]E se alguém te faz sofrer, pra que lembrar
[01:20.20]Mas vale tentar viver de esperança
[01:27.69]
[01:36.98]Hey Jude, olha pra mim (olha pra mim)
[01:43.88]Veja o dia como esta lindo
[01:49.55]Esqueça de tudo que aconteceu
[01:54.24]Amanhã será um novo dia
[02:04.49]Muita coisa vai fazer você mudar
[02:11.04]Não tem mais razão de ser essa tristeza
[02:19.81]E se alguém te faz sofrer pra que lembrar
[02:26.19]Mas vale tentar viver de esperança
[02:34.85]Na na na na na na na
[02:42.62]Hey Jude, olha pra mim (olha pra mim)
[02:49.42]Veja o dia como esta lindo
[02:55.74]Esqueça de tudo que aconteceu
[02:59.88]Amanhã será um novo dia
[03:11.34]Na na na na na na na
[03:17.78]Na na na na, hey Jude
[03:24.44]Na na na na na na na
[03:33.04]Na na na na, hey Jude
[03:37.39]Na na na na na na na
[03:43.19]Na na na na, hey Jude
[03:49.25]Na na na na na na na
[03:55.94]Na na na na, hey Jude
[04:03.31]Na na na na na na na
[04:09.73]Na na na na, hey Jude
[04:16.16]Na na na na na na na
[04:21.45]Na na na na, hey Jude
[04:28.95]Na na na na na na na
[04:33.90]Na na na na, hey Jude
[04:41.16]Na na na na na na na
[04:47.60]Na na na na, hey Jude
[04:54.49]Na na na na na na na
[05:00.46]Na na na na, hey Jude
[05:27.58]Na na na na na na na
[05:33.27]Na na na na, hey Jude
[05:39.72]Na na na na na na na
[05:46.32]Na na na na, hey Jude
[05:54.07]Na na na na na na na
[05:58.86]Na na na na, hey Jude
[06:06.04]Na na na na na na na
[06:12.06]Na na na na, hey Jude
[06:18.91]Na na na na na na na
[06:25.26]Na na na na, hey Jude, hey Jude, hey Jude
[06:31.98]Na na na na na na na
[06:37.86]Na na na na, hey Jude
[07:11.51]`
        },
        {
            number: 21,
            title: "Galera Felicidade (Ô Trem Bão) / A Lua",
            duration: "4:03",
            composers: ["Felipe / Vinicius / João Vitor"],
            audio: "audio/21.flac",
            lyrics: `[00:31.25]Eu vou quebrando, eu vou rasgando com a bota empoeirada
[00:35.49]Atrás da mulherada, atrás da mulherada
[00:38.73]No bailão ou no rodeio, sou mais eu nessa parada
[00:42.47]Atrás da mulherada, atrás da mulherada
[00:46.06]Eu vou quebrando, eu vou rasgando com a bota empoeirada
[00:48.95]Atrás da mulherada, atrás da mulherada
[00:52.13]No bailão ou no rodeio, sou mais eu nessa parada
[00:55.65]Atrás da mulherada, atrás da mulherada
[01:00.64]E quando chego no bailão o couro come
[01:03.00]A minha fome de paixão vai aumentando
[01:06.76]Eu danço reggae, danço vanerão e rock
[01:09.87]Do Chuí ao Oiapoque eu tiro a poeira do chão
[01:13.71]Eu danço reggae, danço vanerão e rock
[01:16.98]Do Chuí ao Oiapoque eu tiro a poeira do chão
[01:21.35]E pra morena mais bonita do salão eu grito
[01:23.71]Ô trem bão, ô trem bão
[01:27.93]Se essa loirinha incendiar meu coração eu grito
[01:31.71]Ô trem bão, ô trem bão
[01:35.07]E pra morena mais bonita do salão eu grito
[01:38.59]Ô trem bão, ô trem bão
[01:41.79]Se essa loirinha incendiar meu coração eu grito
[01:44.59]Ô trem bão, ô trem bão
[01:53.82](Ah, eu tô feliz)
[01:56.63](Da sua boca eu quero um beijo, eu quero bis)
[02:00.98](Ah, eu tô feliz)
[02:03.55](Da sua boca eu quero um beijo, eu quero bis)
[02:06.84]Vem cá morena, sai na janela
[02:14.00]Venha ver a lua como está tão bela
[02:20.59]Vem cá morena, sai na janela
[02:26.52]Venha ver a lua como está tão bela
[02:33.78]A lua quando vem saindo
[02:36.05]Por detrás da montanha, é uma solidão
[02:38.63]Até parece uma coroa de prata
[02:42.21]Coração da mulata lá do meu sertão
[02:47.42]A lua quando vem saindo
[02:49.79]Por detrás da montanha, é uma solidão
[02:52.97]Até parece uma coroa de prata
[02:56.55]Coração da mulata lá do meu sertão
[03:01.84]Vem cá morena, sai na janela
[03:07.81]Venha ver a lua como está tão bela
[03:15.45]Vem cá morena, sai na janela
[03:21.60]Venha ver a lua como está tão bela
[03:29.28]Vem cá morena, sai na janela
[03:35.16]Venha ver a lua como está tão bela
[03:43.38]Vem cá morena, sai na janela
[03:50.14]Venha ver a lua como está tão bela
[03:55.58]`
        },
        {
            number: 22,
            title: "Mexe Que é Bom",
            duration: "3:41",
            composers: ["Lucas / Luan"],
            audio: "audio/22.flac",
            lyrics: `[00:04.06]E aí, Luciano, vamo fazer essa galera sacodir?
[00:06.33]Vambora, Zezé!
[00:07.32]Que quê tá faltando então, Luciano?
[00:08.29]Tá faltando alegria, mãozinha pra cima
[00:10.39]E todo mundo na maior felicidade
[00:11.90]Então quero ver todo mundo na contagem da alegria com a gente
[00:15.73]Um, dois, um, dois, três, quatro
[00:19.29]
[00:26.46]Fim de semana de novo
[00:28.36]Eu tô no meio do povo
[00:30.19]Na maior curtição
[00:33.32]Aqui só tem alegria
[00:35.38]Eu gosto dessa folia
[00:37.08]Essa é minha paixão
[00:40.47]Eu danço e tomo cerveja
[00:42.33]Eu grito e subo na mesa
[00:44.03]Eu agito a galera
[00:47.44]Tô louco pela loirinha
[00:49.27]De olho na mulatinha
[00:50.95]Mas a morena me espera
[00:54.49]E o povo todo pulando
[00:56.38]E o povo todo gritando
[00:58.23]Mexe, mexe que é bom
[00:59.86]Mexe, mexe que é bom
[01:01.40]Tá todo mundo colado
[01:03.47]Todo mundo apertado
[01:04.98]Mas mexe, mexe que é bom
[01:06.81]E o povo todo pulando
[01:08.57]E o povo todo gritando
[01:10.50]Mexe, mexe que é bom
[01:12.35]Mexe, mexe que é bom
[01:13.74]Tá todo mundo colado
[01:15.75]Todo mundo apertado
[01:17.27]Mas mexe, mexe que é bom
[01:22.07]Cadê o sacode da galera? Quero ver!
[01:23.89]
[01:34.65]Fim de semana de novo
[01:36.47]Eu tô no meio do povo
[01:38.57]Na maior curtição
[01:41.78]Aqui só tem alegria
[01:43.43]Eu gosto dessa folia
[01:45.23]Essa é minha paixão
[01:48.98]Eu danço e tomo cerveja
[01:50.56]Eu grito e subo na mesa
[01:52.52]Eu agito a galera
[01:55.97]Tô louco pela loirinha
[01:57.72]De olho na mulatinha
[01:59.36]Mas a morena me espera
[02:02.80]E o povo todo pulando
[02:04.67]E o povo todo gritando
[02:06.63]Mexe, mexe que é bom
[02:08.26]Mexe, mexe que é bom
[02:09.76]Tá todo mundo colado
[02:11.61]Todo mundo apertado
[02:13.29]Mas mexe, mexe que é bom
[02:14.94]E o povo todo pulando
[02:16.72]E o povo todo gritando
[02:18.87]Mexe, mexe que é bom
[02:20.62]Mexe, mexe que é bom
[02:21.94]Tá todo mundo colado
[02:23.94]Todo mundo apertado
[02:25.43]Mas mexe, mexe que é bom
[02:29.19]Eu danço e tomo cerveja
[02:30.99]Eu grito e subo na mesa
[02:32.69]Eu agito a galera
[02:36.06]Tô louco pela loirinha
[02:37.87]De olho na mulatinha
[02:39.43]Mas a morena me espera
[02:43.14]E o povo todo pulando
[02:44.84]E o povo todo gritando
[02:46.62]Mexe, mexe que é bom
[02:48.37]Mexe, mexe que é bom
[02:49.98]Tá todo mundo colado
[02:52.00]Todo mundo apertado
[02:53.54]Mas mexe, mexe que é bom
[02:55.30]E o povo todo pulando
[02:56.97]E o povo todo gritando
[02:59.06]Mexe, mexe que é bom
[03:00.87]Mexe, mexe que é bom
[03:02.37]Tá todo mundo colado
[03:04.33]Todo mundo apertado
[03:05.80]Mas mexe, mexe que é bom
[03:07.63](E o povo todo pulando)
[03:09.30](E o povo todo gritando)
[03:11.32]Mexe, mexe que é bom
[03:13.03](Mexe, mexe que é bom)
[03:14.64]Tá todo mundo colado
[03:16.64](Todo mundo apertado)
[03:18.11]Mas mexe, mexe que é bom
[03:19.76]E o povo todo pulando
[03:21.58]E o povo todo gritando
[03:23.56]Mexe, mexe que é bom
[03:25.19]Mexe, mexe que é bom
[03:26.67]Tá todo mundo colado
[03:28.85]Todo mundo apertado
[03:30.28]Mas mexe, mexe que é bom
[03:33.54]`
        },
        {
            number: 23,
            title: "Encerramento",
            duration: "3:01",
            composers: ["Sem Compositor"],
            audio: "audio/23.flac",
            lyrics: ``
        },
    ]
};
