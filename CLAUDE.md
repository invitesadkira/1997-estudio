# Notas para o Claude — 1997 Studios

- Site da empresa de fotografia e vídeo **1997 Studios** (nome certo, dado pelo dono a 18/11/2026; marca da Adkira): casamentos,
  alambamentos, noivados, aniversários, fotografia, vídeo e ALUGUER DA PLATAFORMA 360º. Português de Portugal/Angola. Luanda.
- Contactos (do dono): WhatsApp 929 773 698 (`https://wa.me/244929773698`, botões com texto já escrito), Instagram
  instagram.com/1997studio8, Facebook facebook.com/1997Fotografo, TikTok tiktok.com/@1997studio8.
- Logótipo do dono (câmara «1997» em traço): `logo-branco.png` (capa escura) e `logo-preto.png` (topo claro), `icone.png` (favicon).
- Este repositório era o antigo «ERPAdkira» (sem uso), renomeado a 18/11/2026 para `1997-estudio`. É TOTALMENTE SEPARADO do
  InviteSão (invitesadkira/invitesao, invitesao.com): não usar a API, os ficheiros, os scripts nem os dados do InviteSão aqui.
- Publicação: Cloudflare **Pages**, projeto `1997-estudio` (mesma conta Cloudflare do InviteSão, projeto próprio), ramo `main`,
  sem build. Endereço grátis `1997-estudio.pages.dev` (o dono decidiu ficar com ele; um .com teria de ser comprado).
  Cada push para `main` publica sozinho. O dono pede para publicar logo («publique»).

## Como o site funciona
- UMA página HTML com «páginas»: `<section class="pagina" data-pag="…">` (inicio, portefolio, servicos, precos, plataforma,
  contacto). O menu NÃO rola: o endereço `#pagina` (ou `#portefolio/<tipo>`) mostra só essa página (pedido do dono: «quando se
  clica num menu abre só as coisas desse menu»). Telemóvel: menu em ecrã inteiro (botão de 2 riscas).
- `index.html` é GERADO por `_gerar/gerar-index.py` a partir de `_gerar/molde.html` (galerias, pacotes, contactos):
  mudar o molde/listas e correr `python _gerar/gerar-index.py`. Não editar o index.html à mão (perde-se na próxima geração).
- PORTEFÓLIO em 3D (pedido do dono): separadores por tipo + carrossel coverflow (`.cf > .cf-palco > a.cf-it`, galeria.js):
  a foto do meio de frente, as outras rodadas para trás com reflexo; deslizar/setas; tocar na do meio = ver em grande.
- FOTO DE CAPA EM TODAS AS PÁGINAS (pedido do dono, 18/11/2026: «as fotos de capa estavam boas»): `.pag-capa[data-bg]` com o
  título por cima; só carrega quando a página abre; no Portefólio muda com o separador (2.ª foto do tipo). O topo fica
  transparente (logótipo branco, `body.topo-claro`) enquanto a capa está por baixo.
- LEVEZA (pedido do dono: «o site não pode ficar pesado por causa do 3D»): sem `filter` nas fotos do carrossel; reflexo e sombra
  grande só no computador; fotos de cada separador com loading=lazy (só carregam ao abrir); slides 2..n da capa depois do load.
- MENU DO TELEMÓVEL: com o menu aberto o topo perde o backdrop-filter (senão o menu fixo ficava preso à altura do topo e
  transparente — erro visto no telemóvel do dono).
- SLIDE DA CAPA: uma foto por tipo de evento (`#slides > a.slide`, data-tipo, href `#portefolio/<tipo>`), troca a cada 6 s.
- Fotos: originais do dono em `G:\Para Site\<Tipo>\`; o Claude escolhe 9 por tipo (variadas, sobretudo ao alto) →
  `fotos/<tipo>/<pre>-NN-v1.webp` (1500 px) + `-p-vN.webp` (720 px, a do carrossel). Nome novo ao trocar (cache imutável).
  Evitar fotos com personagens de filmes/marcas. Tipos feitos (18/11/2026): Casamentos, Pré-wedding, Noivados, Aniversários (`cats` em _gerar/gerar-index.py).
- PREÇOS (do dono): pacotes de CASAMENTO 1/2/3 = 150.000 / 225.000 / 325.000 Kz (o dono escreveu «225.0000»/«325.0000»;
  corrigido). Nomes «Pacote 1/2/3», sem inventar nomes nem destaques. «Reservar» abre o WhatsApp com o pacote escrito.
- VISUAL: moderno, clean, minimalista — fundo #fafaf8, tinta #111, linhas finas #e7e5e0, Manrope + itálico Instrument Serif
  só para destacar uma palavra. `estilo.css?v=N` e `galeria.js?v=N` sobem quando mudam (`_headers`: CSS imutável).
- Falta: Alambamentos (fotos), vídeos, fotos da plataforma 360º. `noindex` até o dono dizer que está pronto.
- Dados de exemplo sempre angolanos e inventados.
