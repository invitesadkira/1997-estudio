# Notas para o Claude — 1997 Estúdio

- Site da empresa de fotografia e vídeo **1997 Estúdio** (marca da Adkira): casamentos, alambamentos, noivados, aniversários,
  fotografia, vídeo e ALUGUER DA PLATAFORMA 360º. Português de Portugal/Angola. Luanda.
- Este repositório era o antigo «ERPAdkira» (sem uso), renomeado a 18/11/2026 para `1997-estudio`. O `index.html` antigo do ERP
  está no histórico do git.
- É TOTALMENTE SEPARADO do InviteSão (repositório invitesadkira/invitesao, invitesao.com): não usar a API, os ficheiros, os
  scripts nem os dados do InviteSão aqui.
- Publicação: Cloudflare **Pages**, projeto `1997-estudio` (mesma conta Cloudflare do InviteSão, projeto próprio), ligado a este
  repositório, ramo `main`, sem comando de build, raiz = pasta do repositório. Endereço grátis `1997-estudio.pages.dev`
  (o dono não quer domínio pago por agora). Cada push para `main` publica sozinho.
- Regras: telemóvel primeiro; fotos em `fotos/` em .webp leves (nome novo ao trocar uma foto: `_headers` põe /fotos/* e *.css
  imutáveis → subir `estilo.css?v=N` no index.html quando o CSS muda). Vídeos pesados não no git (> 25 MB não publica).
- GALERIAS: uma `<section class="sec galeria" id="<tipo>">` por tipo de evento, com `.gal > a.gal-it` (href = foto grande
  1500 px, img = `-p` 640 px, ambas .webp `-v1`); `galeria.js` abre em grande (setas, deslizar, Esc). Fotos escolhidas pelo
  Claude (6–9 por tipo, sobretudo ao alto, variadas); originais do dono em `G:\Para Site\<tipo>\`. 18/11/2026: Casamentos (9) e Aniversários (9).
- SLIDE DA CAPA: uma foto por tipo de evento (`#slides > a.slide`, data-tipo = nome por baixo, href = galeria; troca a cada 6 s,
  em galeria.js). Cada tipo novo: juntar a galeria E um slide.
  Evitar fotos com personagens de filmes/marcas (ex.: bolo com figura da Disney).
- VISUAL (18/11/2026, pedido do dono: moderno, bonito, clean, minimalista): fundo #fafaf8, tinta #111, linhas finas #e7e5e0,
  letra Manrope (300/400/500) + itálico Instrument Serif só para destacar uma palavra; capa = slide em ecrã inteiro com o texto
  em baixo; serviços em lista numerada; galerias em grelha 3x3 sem cantos; topo transparente que fica branco ao rolar.
- PREÇOS (do dono, 18/11/2026): pacotes de CASAMENTO 1/2/3 = 150.000 / 225.000 / 325.000 Kz (o dono escreveu 225.0000 e
  325.0000; corrigido). Nomes Pacote 1/2/3 como o dono, sem inventar nomes nem destaques.
- Estado (18/11/2026): página provisória (capa, serviços, plataforma 360º, contacto) com `noindex`. Faltam as fotos, os
  vídeos e os contactos (WhatsApp/Instagram) que o dono vai dar. Tirar o `noindex` quando estiver pronto.
- Mostrar ao dono e pedir o OK antes de cada push (como no InviteSão). Dados de exemplo sempre angolanos e inventados.
