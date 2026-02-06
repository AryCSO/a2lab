# A2 Lab - Site Institucional

Site institucional one-page para a A2 Lab, especializada em manutenção de consoles, computadores e montagens de PCs gamers.

## 📁 Estrutura do Projeto

```
website/
├── index.html              # Página principal
├── sitemap.xml             # Sitemap para SEO
├── css/
│   └── styles.css          # Estilos (CSS puro)
├── js/
│   └── main.js             # JavaScript (vanilla)
└── assets/
    ├── brand/
    │   ├── a2lab-logo.png       # Logo principal
    │   ├── favicon-16x16.png    # Favicon 16x16
    │   ├── favicon-32x32.png    # Favicon 32x32
    │   ├── apple-touch-icon.png # Ícone para iOS
    │   └── og-image.png         # Imagem para redes sociais
    └── portfolio/
        └── *.jpg                # Imagens do portfólio
```

## ⚙️ Configuração

### 1. Dados de Contato e Localização

Edite o arquivo `js/main.js` e localize o objeto `CONFIG` no início do arquivo:

```javascript
const CONFIG = {
  // Dados de Contato
  CIDADE_UF: 'Cidade - UF',                    // Ex: 'São Paulo - SP'
  WHATSAPP_NUMERO: '5500000000000',            // Formato: 55 + DDD + número
  WHATSAPP_DISPLAY: '(00) 00000-0000',         // Formato exibido no site
  INSTAGRAM_URL: 'https://instagram.com/a2lab',
  INSTAGRAM_HANDLE: '@a2lab',
  EMAIL_CONTATO: 'contato@a2lab.com.br',
  ENDERECO: 'Rua Exemplo, 123 - Bairro - Cidade/UF',
  
  // Mensagem padrão do WhatsApp (personalize se desejar)
  WHATSAPP_MENSAGEM_PADRAO: 'Olá! Vim pelo site da A2 Lab e gostaria de um orçamento.',
};
```

### 2. Schema.org (SEO Local)

No arquivo `index.html`, localize o bloco `<script type="application/ld+json">` e atualize:

- `telephone`: Telefone no formato internacional
- `email`: E-mail de contato
- `address`: Endereço completo
- `geo`: Coordenadas geográficas (latitude/longitude)
- `openingHoursSpecification`: Horários de funcionamento

### 3. Meta Tags e Open Graph

No `<head>` do `index.html`, atualize:

- URLs (`og:url`, `twitter:url`)
- Imagens de preview (`og:image`, `twitter:image`)
- Domínio do site

## 📝 Gerenciamento de Conteúdo

### Adicionar/Editar Serviços

No arquivo `js/main.js`, localize o array `SERVICOS`:

```javascript
const SERVICOS = [
  {
    id: 'identificador-unico',        // ID único (sem espaços)
    titulo: 'Nome do Serviço',        // Título exibido
    descricao: 'Descrição curta...',  // Descrição do serviço
    icone: `<svg>...</svg>`,          // Ícone SVG inline
    itens: [                          // Lista de itens/bullets
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  },
  // ... mais serviços
];
```

### Adicionar/Editar Itens do Portfólio

No arquivo `js/main.js`, localize o array `PORTFOLIO`:

```javascript
const PORTFOLIO = [
  {
    id: 1,                            // ID numérico único
    tipo: 'reparo',                   // 'reparo' ou 'build' (para filtros)
    titulo: 'Título do Trabalho',
    descricao: 'Descrição detalhada do trabalho realizado...',
    imagem: 'assets/portfolio/nome-imagem.jpg',  // Caminho da imagem
    badge: 'Antes/Depois',            // Badge exibido na imagem
    specs: null                       // null ou array de specs (para builds)
  },
  
  // Exemplo com specs (para builds de PC):
  {
    id: 2,
    tipo: 'build',
    titulo: 'Build "Nome"',
    descricao: 'Descrição da build...',
    imagem: 'assets/portfolio/build.jpg',
    badge: 'Build Gamer',
    specs: [
      'CPU: AMD Ryzen 9 7950X',
      'GPU: NVIDIA RTX 4090',
      // ... mais specs
    ]
  }
];
```

**Importante:** Adicione as imagens correspondentes na pasta `assets/portfolio/`.

## 🖼️ Imagens

### Logo
- Substitua `assets/brand/a2lab.png` pela logo real
- Dimensões recomendadas: 240x80px (ou proporção 3:1)
- Formato: PNG com fundo transparente

### Favicon
- Crie versões em 16x16, 32x32 e 180x180 (Apple Touch Icon)
- Substitua os arquivos na pasta `assets/brand/`

### Portfólio
- Dimensões recomendadas: 800x500px ou proporção 16:10
- Formatos: JPG ou WebP para melhor performance
- Adicione na pasta `assets/portfolio/`

### Open Graph Image
- Dimensões: 1200x630px
- Nome: `og-image.png`
- Será exibida ao compartilhar o site em redes sociais

## 🚀 Hospedagem

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload da pasta `website/` (ou do conteúdo dela)
3. Vá em **Settings > Pages**
4. Em "Source", selecione a branch principal
5. O site estará disponível em `https://seuusuario.github.io/repositorio/`

### Netlify

1. Acesse [netlify.com](https://netlify.com) e crie uma conta
2. Clique em "Add new site" > "Deploy manually"
3. Arraste a pasta `website/` para a área de upload
4. Ou conecte seu repositório GitHub para deploy automático

### Vercel

1. Acesse [vercel.com](https://vercel.com) e crie uma conta
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Configure o "Root Directory" como `website` (se aplicável)
5. Clique em "Deploy"

### Hospedagem Tradicional (FTP)

1. Faça upload do conteúdo da pasta `website/` para a raiz do servidor (ou pasta `public_html`)
2. Certifique-se de que `index.html` está na raiz

## ✅ Checklist Pré-Lançamento

- [ ] Atualizar dados de contato em `CONFIG` (main.js)
- [ ] Atualizar URLs no Schema.org (index.html)
- [ ] Atualizar meta tags Open Graph (index.html)
- [ ] Substituir logo e favicons
- [ ] Adicionar imagens reais do portfólio
- [ ] Atualizar texto "Sobre" com conteúdo real
- [ ] Revisar lista de serviços
- [ ] Atualizar URL no sitemap.xml
- [ ] Testar em dispositivos móveis
- [ ] Testar navegação por teclado
- [ ] Testar formulário de contato
- [ ] Testar todos os links de WhatsApp

## 🎨 Personalização de Cores

As cores podem ser alteradas no arquivo `css/styles.css`, no bloco `:root`:

```css
:root {
  /* Cores de destaque */
  --color-accent-red: #d04040;      /* Vermelho principal */
  --color-accent-blue: #2090d0;     /* Azul principal */
  
  /* Cores de fundo (tema escuro) */
  --color-bg-primary: #1a1a1a;
  --color-bg-secondary: #242424;
  
  /* Cores de texto */
  --color-text-primary: #f0f0f0;
  --color-text-secondary: #b0b0b0;
}
```

O tema claro é definido no seletor `[data-theme="light"]`.

## 📱 Recursos

- **Responsivo**: Mobile-first, funciona em todos os dispositivos
- **Tema Dark/Light**: Alternância com persistência em localStorage
- **Acessibilidade**: Navegação por teclado, ARIA labels, contraste adequado
- **Performance**: CSS e JS enxutos, sem dependências externas pesadas
- **SEO**: Schema.org, Open Graph, sitemap.xml
- **Formulário**: Validação no front-end, envio via WhatsApp

## 📄 Licença

Este projeto foi criado para uso exclusivo da A2 Lab.

---

Desenvolvido com ❤️ para A2 Lab
