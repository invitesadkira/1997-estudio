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
- Estado (18/11/2026): página provisória (capa, serviços, plataforma 360º, contacto) com `noindex`. Faltam as fotos, os
  vídeos e os contactos (WhatsApp/Instagram) que o dono vai dar. Tirar o `noindex` quando estiver pronto.
- Mostrar ao dono e pedir o OK antes de cada push (como no InviteSão). Dados de exemplo sempre angolanos e inventados.
