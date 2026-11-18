/* Ver as fotos das galerias em grande (tocar = abrir; setas, deslizar ou teclado = mudar; Esc/×/tocar fora = fechar) */
(() => {
  const ico = (d) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
  const lb = document.createElement('div'); lb.className = 'lb'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Fotografia em grande');
  lb.innerHTML = '<img alt=""><button class="lb-fechar" aria-label="Fechar">' + ico('M6 6l12 12M18 6L6 18') + '</button><button class="lb-ant" aria-label="Anterior">' + ico('M15 5l-7 7 7 7') + '</button><button class="lb-seg" aria-label="Seguinte">' + ico('M9 5l7 7-7 7') + '</button><p class="lb-n"></p>';
  document.body.appendChild(lb);
  const img = lb.querySelector('img'), n = lb.querySelector('.lb-n'); let lista = [], i = 0;
  const ver = () => { const a = lista[i]; img.src = a.href; img.alt = (a.querySelector('img') || {}).alt || ''; n.textContent = (i + 1) + ' / ' + lista.length; };
  const abrir = (gal, a) => { lista = [...gal.querySelectorAll('.gal-it')]; i = lista.indexOf(a); ver(); lb.hidden = false; document.body.style.overflow = 'hidden'; };
  const fechar = () => { lb.hidden = true; document.body.style.overflow = ''; img.removeAttribute('src'); };
  const mover = (d) => { i = (i + d + lista.length) % lista.length; ver(); };
  document.querySelectorAll('.gal').forEach((g) => g.addEventListener('click', (e) => { const a = e.target.closest('.gal-it'); if (!a) return; e.preventDefault(); abrir(g, a); }));
  lb.querySelector('.lb-fechar').onclick = fechar; lb.querySelector('.lb-ant').onclick = () => mover(-1); lb.querySelector('.lb-seg').onclick = () => mover(1);
  lb.addEventListener('click', (e) => { if (e.target === lb) fechar(); });
  document.addEventListener('keydown', (e) => { if (lb.hidden) return; if (e.key === 'Escape') fechar(); if (e.key === 'ArrowLeft') mover(-1); if (e.key === 'ArrowRight') mover(1); });
  let x0 = null; lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1); x0 = null; });
})();
