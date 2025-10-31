# PhrasePlay - Landing Page

Landing page oficial do PhrasePlay, aplicativo de aprendizado natural de idiomas com playlists bilíngues (inglês/português).

## 🚀 Estrutura do Projeto

```
phraseplay-site/
├── index.html          # Página principal
├── assets/
│   ├── logo.svg       # Logo do PhrasePlay (roxo)
│   ├── favicon.svg    # Favicon
│   └── og-image.svg   # Open Graph image (converter para PNG 1200x630)
├── css/
│   └── styles.css     # Estilos completos com tema dark/light
├── js/
│   └── main.js        # Interações mínimas
└── README.md          # Este arquivo
```

## ✨ Recursos

- ✅ **Design responsivo**: 320px até desktop
- ✅ **Tema dark/light**: Dark por padrão com toggle persistente (localStorage)
- ✅ **SEO otimizado**: Meta tags, Open Graph, Twitter Cards
- ✅ **Acessibilidade**: Contraste AA, navegação por teclado, ARIA labels
- ✅ **Performance**: CSS puro, sem frameworks, fontes otimizadas
- ✅ **Interações mínimas**: Menu mobile, FAQ acordeão, modal de playlists

## 🎨 Paleta de Cores

### Dark Theme (padrão)
- **Primária**: `#7C3AED` (roxo)
- **Primária hover**: `#6D28D9`
- **Texto**: `#F8FAFC`
- **Texto secundário**: `#94A3B8`
- **Fundo**: `#0B1020`
- **Fundo alternativo**: `#0F172A`

### Light Theme
- **Texto**: `#0F172A`
- **Fundo**: `#FFFFFF`
- **Fundo alternativo**: `#F8FAFC`

## 📝 Edições Necessárias

Procure por comentários `<!-- EDITAR: ... -->` no HTML para personalizar:

### 1. Links de Download do Android
```html
<!-- Linha ~40, ~75, ~350 -->
<a href="#" class="btn btn-primary">Baixar para Android</a>
```
Substitua `#` pelo link real da Google Play Store.

### 2. Link da Lista de Espera
```html
<!-- Linha ~42, ~77 -->
<a href="#lista-espera" class="btn btn-primary">Entrar na lista</a>
```
Pode manter como âncora `#lista-espera` ou adicionar link externo para formulário.

### 3. Formulário de Inscrição
```html
<!-- Linha ~532 -->
<form class="waitlist-form" id="waitlistForm">
```
No arquivo `js/main.js` (linha ~165), adicione lógica de envio para backend/serviço (Mailchimp, SendGrid, Google Forms, etc.).

### 4. E-mail de Contato
```html
<!-- Linha ~569 -->
<a href="mailto:contato@phraseplay.app">Contato</a>
```
Substitua pelo e-mail real.

## 🖼️ Open Graph Image

O arquivo `assets/og-image.svg` é um placeholder SVG. Para melhor compatibilidade com redes sociais:

1. Converta para PNG (1200x630px):
   ```bash
   # Usando ImageMagick ou ferramentas online
   convert og-image.svg -resize 1200x630 og-image.png
   ```

2. Atualize o caminho no HTML:
   ```html
   <meta property="og:image" content="./assets/og-image.png">
   <meta name="twitter:image" content="./assets/og-image.png">
   ```

## 🚀 Como Usar

### Desenvolvimento Local

1. Clone/baixe os arquivos
2. Abra `index.html` em um navegador moderno
3. Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (npx)
   npx serve
   ```

### Deploy

Compatível com qualquer serviço de hospedagem estática:
- **Netlify**: Arraste a pasta ou conecte ao GitHub
- **Vercel**: Deploy automático
- **GitHub Pages**: Push para repositório
- **Cloudflare Pages**: Conecte repositório

## ✅ Checklist de Aceite

- [x] Responsivo (320px → desktop)
- [x] Hero "dobrada" bem resolvida
- [x] Dois CTAs visíveis (topo + final)
- [x] Dark mode default + toggle persistente
- [x] SEO básico e OG tags preenchidos
- [x] Navegação por teclado funcional
- [x] Contraste AA (WCAG)
- [x] Código limpo, sem frameworks
- [x] Menu mobile com animação
- [x] FAQ acordeão
- [x] Modal de playlists com exemplos
- [x] Formulário de lista de espera

## 🧪 Performance & Acessibilidade

### Meta Google Lighthouse
- **Performance**: ≥ 95
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90
- **SEO**: 100

### Testes Recomendados
```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:8000 --view

# Validação HTML
https://validator.w3.org/

# Contraste de cores
https://webaim.org/resources/contrastchecker/
```

## 📦 Próximos Passos

1. **Converter og-image.svg para PNG** (1200x630)
2. **Adicionar links reais** de download do Android
3. **Integrar formulário** com serviço de e-mail marketing
4. **Adicionar analytics** (Google Analytics, Plausible)
5. **Configurar domínio** e SSL
6. **Testar em dispositivos reais** (iOS, Android, tablets)

## 🎯 Tecnologias

- **HTML5**: Semântico, com ARIA labels
- **CSS3**: Custom properties (variáveis), Grid, Flexbox
- **JavaScript ES6**: Vanilla JS, sem dependências
- **Google Fonts**: Inter (display=swap)
- **SVG**: Ícones inline e logo

## 📄 Licença

© PhrasePlay, 2025. Todos os direitos reservados.

---

**Desenvolvido com foco em conversão, performance e acessibilidade.**
