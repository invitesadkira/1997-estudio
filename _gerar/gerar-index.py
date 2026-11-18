"""Gera o index.html do 1997 Studios (páginas por menu, carrossel 3D, contactos)."""
import urllib.parse, os
os.chdir(r'C:\Users\arauj\Documents\1997-estudio')
cats = [('casamentos', 'cas', 'Casamentos', 'v2', ['Os noivos abraçados nas escadas', 'A noiva com o ramo de rosas brancas', 'Os noivos de fato branco', 'A cauda do vestido no corredor', 'A noiva sentada com o vestido aberto', 'Pormenor do fato do noivo, a preto e branco', 'A noiva com as damas de honor', 'Os noivos no jardim', 'O corte do bolo']),
        ('pre-wedding', 'pre', 'Pré-wedding', 'v1', ['O casal ao pôr do sol na praia', 'A caminhar à beira-mar', 'O casal na cidade', 'A rodopiar na areia', 'De mãos dadas, a preto e branco', 'O abraço no jardim', 'O casal ao fim da tarde', 'O abraço com o céu azul', 'Retrato a preto e branco']),
        ('noivados', 'noiv', 'Noivados', 'v1', ['Os noivos de dourado', 'O beijo dos noivos', 'Os noivos mostram os anéis', 'A noiva com o leque de penas', 'Os noivos de mãos dadas', 'O casal de rosa e cinzento', 'A noiva com o ramo de rosas', 'O carinho dos noivos', 'A dança na festa']),
        ('aniversarios', 'aniv', 'Aniversários', 'v2', ['Menino de colete na sua festa de aniversário', 'Pai com o filho ao colo na festa de 1 ano', 'Aniversariante a rir com as amigas', 'Aniversário de 18 anos, vestido rosa', 'Menina de laço na festa colorida', 'Bolo dourado de aniversário', 'Menino a mandar um beijo', 'Mesa decorada em rosa e prata', 'Aniversariante de 30 anos com o ramo'])]
abas = '\n'.join('        <button type="button" class="aba%s" data-cat="%s" role="tab">%s</button>' % (' ativa' if i == 0 else '', c, n) for i, (c, p, n, v, _) in enumerate(cats))
galerias = ''
for i, (c, p, n, v, alts) in enumerate(cats):
    its = '\n'.join('          <a class="cf-it" href="fotos/%s/%s-%02d-v1.webp"><img src="fotos/%s/%s-%02d-p-%s.webp" alt="%s"%s decoding="async" draggable="false"></a>' % (c, p, k, c, p, k, v, a, '' if i == 0 else ' loading="lazy"') for k, a in enumerate(alts, 1))
    galerias += '      <div class="cf" data-cat="%s"%s>\n        <div class="cf-palco">\n%s\n        </div>\n      </div>\n' % (c, '' if i == 0 else ' hidden', its)
WA = 'https://wa.me/244929773698'
def wa(t): return WA + '?text=' + urllib.parse.quote(t)
ico = {
 'wa': '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 4 3.5 1.5.6 2 .7 2.8.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.2-.2-.4-.3z"/></svg>',
 'ig': '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>',
 'fb': '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z"/></svg>',
 'tt': '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.6 3c.4 2.2 1.8 3.6 4 3.8v3.1c-1.5.1-2.8-.4-4-1.2v6.1c0 3.4-2.4 5.9-5.7 5.9A5.7 5.7 0 0 1 5.2 15c0-3.4 2.9-6 6.4-5.6v3.2c-1.6-.4-3.2.7-3.2 2.4 0 1.4 1.1 2.5 2.5 2.5 1.6 0 2.5-1.1 2.5-2.9V3h3.2z"/></svg>'}
redes = ('<a href="%s" target="_blank" rel="noopener" aria-label="WhatsApp">%s</a>' % (WA, ico['wa']) +
         '<a href="https://www.instagram.com/1997studio8/" target="_blank" rel="noopener" aria-label="Instagram">%s</a>' % ico['ig'] +
         '<a href="https://www.facebook.com/1997Fotografo" target="_blank" rel="noopener" aria-label="Facebook">%s</a>' % ico['fb'] +
         '<a href="https://www.tiktok.com/@1997studio8" target="_blank" rel="noopener" aria-label="TikTok">%s</a>' % ico['tt'])
pac = [('1', ['Álbum 3D de 100 fotografias', '1 quadro A3', '1 pendrive'], '150.000', ''),
       ('2', ['Álbum 3D de 150 fotografias', '2 quadros (A3 e A4)', 'Pendrive com todas as fotos', '<em>Oferta:</em> uma mala'], '225.000', ' destaque'),
       ('3', ['Álbum 3D de 200 fotografias', '2 quadros (A2 e A3)', 'Pendrive com todas as fotos', '<em>Oferta:</em> uma mala', 'Vídeo de resumo do casamento'], '325.000', '')]
pacotes = '\n'.join('''        <article class="pacote%s">
          <span class="n">0%s</span><h3>Pacote %s</h3>
          <ul>%s</ul>
          <p class="preco">%s <small>Kz</small></p>
          <a class="bt-wa" href="%s" target="_blank" rel="noopener">%sReservar</a>
        </article>''' % (d, n, n, ''.join('<li>' + x + '</li>' for x in itens), p, wa('Olá 1997 Studios! Quero reservar o Pacote %s de casamento.' % n), ico['wa']) for n, itens, p, d in pac)
orc = wa('Olá 1997 Studios! Gostava de pedir um orçamento.')
html = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'molde.html'), encoding='utf8').read()
for k, v in {'ABAS': abas, 'GALERIAS': galerias, 'PACOTES': pacotes, 'REDES': redes, 'ORC': orc, 'WA': WA, 'ICO_WA': ico['wa'],
             'WA_360': wa('Olá 1997 Studios! Quero alugar a plataforma 360º.'), 'WA_OLA': wa('Olá 1997 Studios!')}.items():
    html = html.replace('{{' + k + '}}', v)
assert '{{' not in html
open('index.html', 'w', encoding='utf8').write(html)
print('ok', len(html))
