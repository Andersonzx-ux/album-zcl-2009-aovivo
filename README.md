# Duas Horas de Sucesso — Ao Vivo · Zezé Di Camargo & Luciano

Player estático (HTML/CSS/JS puro) para GitHub Pages. Tudo é dirigido por `data/album.js`.

## O que muda de um disco para o outro
Quando a faixa cruza a fronteira (faixa 12 → 13, ou volta), trocam juntos, com transição suave:
capa, faixa de palco, luz de fundo e **toda a paleta** (âmbar no Disco 1, azul no Disco 2).
O dourado do título (#D1B161) é o mesmo nos dois, como nas capas.

## Paletas medidas (assets/cover1.jpg e cover2.jpg, script em tools/medir_paletas.py)
| Papel | Disco 1 | Disco 2 |
|---|---|---|
| blackMain (palco) | #090B0A | #090B0A |
| blackBrown | #211211 | #10121A |
| brownDark | #56241B | #242B44 |
| sepiaDark | #913F2A | #494D6D |
| sepiaMedium | #CF8C59 | #A89AA4 |
| goldMain (título) | #D1B161 | #D1B161 |
| cream (relógio) | #F4D6B5 | #D1CDDB |
| light (relógio em luz) | #F9E8DF | #E9E4EA |

## Recursos
- Anel de marcações em volta do relógio da capa = progresso da faixa (arraste para buscar; toque no mostrador para tocar/pausar).
- Seletor Disco 1 / Disco 2, cabeçalhos de disco na lista, equalizador na faixa tocando.
- Letras sincronizadas (LRC), botão esconder/mostrar, tela cheia (Esc sai), botão PT de tradução (campo opcional `translation` por faixa, LRC ou texto).
- Tela bloqueada / central de mídia (Media Session) com capa, faixa anterior/próxima e posição.
- Atalhos: Espaço = tocar/pausar; Shift+← / Shift+→ = faixa anterior/próxima.

## Dados
- `discs[]`: `trackStart`/`trackEnd`, `cover`, `strip`, `palette`, `clock` (posição/raio do relógio na capa, em px de 640×576).
- `tracks[]`: `number, title, duration, composers[], audio, lyrics, translation?`.
- Coloque os áudios em `audio/01.flac … 23.flac`.

Fontes: Marcellus e Jost (OFL), licenças em `assets/fonts/`.
