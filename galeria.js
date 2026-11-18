/* 1997 Studios — páginas do menu, slide da capa, carrossel 3D do portefólio e ver em grande. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ── PÁGINAS: o endereço #pagina (ou #portefolio/<tipo>) mostra só essa página ── */
  const paginas = $$('.pagina'), nomes = paginas.map((p) => p.dataset.pag);
  let tipoPedido = null;
  function irPara() {
    const [pag, sub] = decodeURIComponent(location.hash.slice(1)).split('/');
    const nome = nomes.includes(pag) ? pag : 'inicio';
    paginas.forEach((p) => { p.hidden = p.dataset.pag !== nome; });
    document.body.classList.toggle('no-inicio', nome === 'inicio');
    $$('.menu > a').forEach((a) => a.classList.toggle('ativo', a.getAttribute('href') === '#' + nome));
    document.body.classList.remove('menu-aberto'); $('#abrir-menu').setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
    if (nome === 'portefolio') { tipoPedido = sub || tipoPedido; mostrarTipo(sub || ($('.aba.ativa') || {}).dataset?.cat); }
  }
  addEventListener('hashchange', irPara);
  $('#abrir-menu').addEventListener('click', () => { const ab = document.body.classList.toggle('menu-aberto'); $('#abrir-menu').setAttribute('aria-expanded', String(ab)); });

  /* ── SLIDE DA CAPA: uma foto por tipo de evento, troca a cada 6 s ── */
  const ss = $$('#slides .slide'), tipo = $('#capa-tipo'), pts = $('#capa-pontos');
  if (ss.length > 1) {
    pts.innerHTML = ss.map(() => '<i></i>').join(''); const ps = [...pts.children]; let i = 0;
    const ver = (k) => { ss[i].classList.remove('ativo'); ps[i].classList.remove('ativo'); i = k; ss[i].classList.add('ativo'); ps[i].classList.add('ativo');
      tipo.href = ss[i].getAttribute('href'); tipo.firstElementChild.textContent = String(i + 1).padStart(2, '0') + ' — ' + ss[i].dataset.tipo; };
    ver(0); setInterval(() => { if (!document.hidden && !$('.pagina[data-pag="inicio"]').hidden) ver((i + 1) % ss.length); }, 6000);
  }

  /* ── CARROSSEL 3D (coverflow): a foto do meio de frente, as outras rodadas para trás ── */
  const cfs = {}; let cfAtual = null;
  $$('.cf').forEach((cf) => {
    const its = $$('.cf-it', cf); let i = 0;
    const desenhar = () => {
      const W = cf.clientWidth, w = its[0] ? its[0].offsetWidth : 300, passo = Math.min(w * .62, W * .3);
      its.forEach((it, k) => {
        const d = k - i, a = Math.abs(d), lado = Math.sign(d);
        const x = d === 0 ? 0 : lado * (passo * .55 + passo * .55 * a), z = -a * 170, r = -lado * Math.min(48, 28 + a * 6);
        it.style.transform = 'translate(calc(-50% + ' + x + 'px), -50%) translateZ(' + z + 'px) rotateY(' + r + 'deg)';
        it.style.zIndex = String(100 - a); it.style.opacity = a > 3 ? '0' : String(1 - a * .12);
        it.style.filter = a ? 'brightness(' + (1 - a * .12) + ')' : 'none';
        it.style.setProperty('--sombra-e', lado > 0 ? '.25' : '0'); it.style.setProperty('--sombra-d', lado < 0 ? '.25' : '0');
        it.style.pointerEvents = a > 3 ? 'none' : '';
      });
      if (cfAtual === api) $('#cf-n').textContent = String(i + 1).padStart(2, '0') + ' / ' + String(its.length).padStart(2, '0');
    };
    const api = { ir: (k) => { i = Math.max(0, Math.min(its.length - 1, k)); desenhar(); }, mover: (d) => api.ir(i + d), get i() { return i; }, desenhar, its };
    its.forEach((it, k) => it.addEventListener('click', (e) => { e.preventDefault(); if (arrastou) return; if (k === i) abrirLb(its, k); else api.ir(k); }));
    // deslizar com o dedo ou o rato
    let x0 = null, arrastou = false;
    cf.addEventListener('pointerdown', (e) => { x0 = e.clientX; arrastou = false; });
    cf.addEventListener('pointermove', (e) => { if (x0 != null && Math.abs(e.clientX - x0) > 12) arrastou = true; });
    cf.addEventListener('pointerup', (e) => { if (x0 == null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) api.mover(dx < 0 ? 1 : -1); setTimeout(() => { arrastou = false; }, 0); });
    cf.addEventListener('pointercancel', () => { x0 = null; });
    cfs[cf.dataset.cat] = api;
  });
  function mostrarTipo(cat) {
    if (!cfs[cat]) cat = Object.keys(cfs)[0];
    $$('.aba').forEach((b) => b.classList.toggle('ativa', b.dataset.cat === cat));
    $$('.cf').forEach((cf) => { cf.hidden = cf.dataset.cat !== cat; });
    cfAtual = cfs[cat]; requestAnimationFrame(() => cfAtual.desenhar());
  }
  $$('.aba').forEach((b) => b.addEventListener('click', () => { history.replaceState(null, '', '#portefolio/' + b.dataset.cat); mostrarTipo(b.dataset.cat); }));
  $$('.cf-seta').forEach((b) => b.addEventListener('click', () => cfAtual && cfAtual.mover(+b.dataset.dir)));
  addEventListener('resize', () => cfAtual && cfAtual.desenhar());
  addEventListener('keydown', (e) => { if (!lb.hidden || $('.pagina[data-pag="portefolio"]').hidden || !cfAtual) return; if (e.key === 'ArrowLeft') cfAtual.mover(-1); if (e.key === 'ArrowRight') cfAtual.mover(1); });

  /* ── VER EM GRANDE ── */
  const ico = (d) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
  const lb = document.createElement('div'); lb.className = 'lb'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Fotografia em grande');
  lb.innerHTML = '<img alt=""><button class="lb-fechar" aria-label="Fechar">' + ico('M6 6l12 12M18 6L6 18') + '</button><button class="lb-ant" aria-label="Anterior">' + ico('M15 5l-7 7 7 7') + '</button><button class="lb-seg" aria-label="Seguinte">' + ico('M9 5l7 7-7 7') + '</button><p class="lb-n"></p>';
  document.body.appendChild(lb);
  const img = $('img', lb), n = $('.lb-n', lb); let lista = [], li = 0;
  const verLb = () => { const a = lista[li]; img.src = a.href; img.alt = ($('img', a) || {}).alt || ''; n.textContent = (li + 1) + ' / ' + lista.length; };
  function abrirLb(its, k) { lista = its; li = k; verLb(); lb.hidden = false; document.body.style.overflow = 'hidden'; }
  const fechar = () => { lb.hidden = true; document.body.style.overflow = ''; img.removeAttribute('src'); if (cfAtual) cfAtual.ir(li); };
  const mover = (d) => { li = (li + d + lista.length) % lista.length; verLb(); };
  $('.lb-fechar', lb).onclick = fechar; $('.lb-ant', lb).onclick = () => mover(-1); $('.lb-seg', lb).onclick = () => mover(1);
  lb.addEventListener('click', (e) => { if (e.target === lb) fechar(); });
  addEventListener('keydown', (e) => { if (lb.hidden) return; if (e.key === 'Escape') fechar(); if (e.key === 'ArrowLeft') mover(-1); if (e.key === 'ArrowRight') mover(1); });
  let t0 = null; lb.addEventListener('touchstart', (e) => { t0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => { if (t0 == null) return; const dx = e.changedTouches[0].clientX - t0; if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1); t0 = null; });

  irPara();
})();
