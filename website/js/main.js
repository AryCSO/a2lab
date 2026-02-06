/**
 * A2 Lab - Main JavaScript
 * Site institucional one-page
 */

// ==============================================
// CONFIGURAÇÕES / PLACEHOLDERS
// Edite os valores abaixo para personalizar o site
// ==============================================

const CONFIG = {
  // Dados de Contato
  CIDADE_UF: 'Goiânia - GO',
  WHATSAPP_NUMERO: '5562981795414', // Formato: 55 + DDD + número (sem espaços ou caracteres)
  WHATSAPP_DISPLAY: '(62) 9 8179-5414', // Formato exibido no site
  INSTAGRAM_URL: 'https://www.instagram.com/a2._lab/',
  INSTAGRAM_HANDLE: '@A2 LAB',
  EMAIL_CONTATO: 'companya2lab@gmail.com',
  ENDERECO: 'Goiânia - GO',
  
  // Mensagem padrão do WhatsApp
  WHATSAPP_MENSAGEM_PADRAO: 'Olá! Vim pelo site da A2 Lab e gostaria de um orçamento.',
  
  // Template de mensagem do formulário
  WHATSAPP_MENSAGEM_FORM: (nome, telefone, equipamento, mensagem) => {
    return `Olá! Vim pelo site da A2 Lab e gostaria de um orçamento.

*Nome:* ${nome}
*Telefone:* ${telefone}
*Equipamento:* ${equipamento}
*Descrição:* ${mensagem || 'Não informado'}`;
  }
};

// ==============================================
// DADOS DOS SERVIÇOS
// Adicione ou edite serviços aqui
// ==============================================

const SERVICOS = [
  {
    id: 'consoles',
    titulo: 'Consoles',
    descricao: 'Manutenção especializada em PlayStation, Xbox e Nintendo Switch.',
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h2v4H6zM16 10h2v4h-2zM10 14h4"/></svg>`,
    itens: [
      'PlayStation 4 e PlayStation 5',
      'Xbox One, Series S e Series X',
      'Nintendo Switch e Switch Lite',
      'Troca de pasta térmica',
      'Limpeza interna profissional',
      'Reparo de HDMI e portas USB',
      'Troca de leitor de disco'
    ]
  },
  {
    id: 'pcs',
    titulo: 'PCs e Notebooks',
    descricao: 'Diagnóstico e reparo de computadores desktop e notebooks.',
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    itens: [
      'Formatação e instalação de sistemas',
      'Upgrade de memória RAM e SSD',
      'Troca de tela de notebook',
      'Reparo de placa-mãe',
      'Limpeza e troca de pasta térmica',
      'Diagnóstico de hardware',
      'Recuperação de dados'
    ]
  },
  {
    id: 'montagem',
    titulo: 'Montagem Gamer',
    descricao: 'Builds personalizadas de alta performance para jogos.',
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    itens: [
      'Consultoria para escolha de peças',
      'Montagem profissional',
      'Cable management premium',
      'Configuração de BIOS e drivers',
      'Overclock seguro',
      'Testes de stress e benchmark',
      'Upgrade de PCs existentes'
    ]
  }
];

// ==============================================
// DADOS DO PORTFÓLIO
// Adicione ou edite itens do portfólio aqui
// ==============================================

const PORTFOLIO = [
  {
    id: 1,
    tipo: 'reparo', // 'reparo' ou 'build'
    titulo: 'PS5 - Reparo de HDMI',
    descricao: 'Troca de porta HDMI danificada por mau uso do cabo. Serviço realizado com micro solda de precisão.',
    imagem: 'assets/portfolio/placeholder-1.jpg',
    badge: 'Antes/Depois',
    specs: null
  },
  {
    id: 2,
    tipo: 'reparo',
    titulo: 'Xbox Series X - Superaquecimento',
    descricao: 'Limpeza completa e troca de pasta térmica. Console apresentava desligamentos frequentes.',
    imagem: 'assets/portfolio/placeholder-2.jpg',
    badge: 'Antes/Depois',
    specs: null
  },
  {
    id: 3,
    tipo: 'build',
    titulo: 'Build "Titan" - High-End Gaming',
    descricao: 'Montagem completa com foco em jogos AAA em 4K. Sistema de refrigeração customizado e cable management premium.',
    imagem: 'assets/portfolio/placeholder-3.jpg',
    badge: 'Build Gamer',
    specs: [
      'CPU: AMD Ryzen 9 7950X',
      'GPU: NVIDIA RTX 4090',
      'RAM: 64GB DDR5 6000MHz',
      'SSD: 2TB NVMe Gen5',
      'Gabinete: Lian Li O11 Dynamic',
      'PSU: 1000W 80+ Platinum'
    ]
  },
  {
    id: 4,
    tipo: 'reparo',
    titulo: 'Nintendo Switch - Troca de Tela',
    descricao: 'Substituição de tela LCD com digitalizador danificado por queda.',
    imagem: 'assets/portfolio/placeholder-4.jpg',
    badge: 'Antes/Depois',
    specs: null
  },
  {
    id: 5,
    tipo: 'build',
    titulo: 'Build "Vortex" - Custo-Benefício',
    descricao: 'Montagem otimizada para excelente desempenho em 1080p com orçamento controlado.',
    imagem: 'assets/portfolio/placeholder-5.jpg',
    badge: 'Build Gamer',
    specs: [
      'CPU: AMD Ryzen 5 5600',
      'GPU: NVIDIA RTX 4060 Ti',
      'RAM: 32GB DDR4 3600MHz',
      'SSD: 1TB NVMe',
      'Gabinete: NZXT H5 Flow',
      'PSU: 650W 80+ Gold'
    ]
  },
  {
    id: 6,
    tipo: 'reparo',
    titulo: 'Notebook Gamer - Upgrade Completo',
    descricao: 'Upgrade de RAM e SSD, repaste térmico e limpeza interna. Performance restaurada.',
    imagem: 'assets/portfolio/placeholder-6.jpg',
    badge: 'Upgrade',
    specs: null
  }
];

// ==============================================
// INICIALIZAÇÃO
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollSpy();
  initBackToTop();
  initContactLinks();
  renderServicos();
  renderPortfolio();
  initPortfolioFilter();
  initPortfolioModal();
  initContactForm();
  updateFooterYear();
  updateContactInfo();
});

// ==============================================
// TEMA (Dark/Light)
// ==============================================

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Atualiza os favicons baseado no tema
  function updateFavicons(theme) {
    const isDark = theme === 'dark' || (theme === null && prefersDark.matches);
    const faviconFile = isDark ? 'a2white.png' : 'a2black.png';
    
    const favicon32 = document.getElementById('favicon-32');
    const favicon16 = document.getElementById('favicon-16');
    const faviconShortcut = document.getElementById('favicon-shortcut');
    const faviconApple = document.getElementById('favicon-apple');
    
    if (favicon32) favicon32.href = `assets/brand/${faviconFile}`;
    if (favicon16) favicon16.href = `assets/brand/${faviconFile}`;
    if (faviconShortcut) faviconShortcut.href = `assets/brand/${faviconFile}`;
    if (faviconApple) faviconApple.href = `assets/brand/${faviconFile}`;
  }
  
  // Verificar tema salvo ou preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateFavicons(savedTheme);
  } else if (!prefersDark.matches) {
    document.documentElement.setAttribute('data-theme', 'light');
    updateFavicons('light');
  } else {
    updateFavicons('dark');
  }
  
  // Toggle de tema
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateFavicons(newTheme);
  });
  
  // Ouvir mudanças na preferência do sistema
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      updateFavicons(newTheme);
    }
  });
}

// ==============================================
// NAVEGAÇÃO
// ==============================================

function initNavigation() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
    navMenu.classList.toggle('is-open', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });
  
  // Fechar menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Fechar menu mobile
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.style.overflow = '';
      
      // Smooth scroll com offset
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Smooth scroll para links do header logo
  document.querySelector('.header__logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Smooth scroll para links do footer
  document.querySelectorAll('.footer__links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });
  
  // Fechar menu ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });
}

// ==============================================
// SCROLL SPY
// ==============================================

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// ==============================================
// BOTÃO VOLTAR AO TOPO
// ==============================================

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  let lastScrollY = 0;
  let ticking = false;
  
  const updateButton = () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
    ticking = false;
  };
  
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateButton);
      ticking = true;
    }
  }, { passive: true });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==============================================
// LINKS DE CONTATO (WhatsApp, Instagram, Email)
// ==============================================

function initContactLinks() {
  // WhatsApp links
  const whatsappBaseUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMERO}`;
  const whatsappMessage = encodeURIComponent(CONFIG.WHATSAPP_MENSAGEM_PADRAO);
  const whatsappUrl = `${whatsappBaseUrl}?text=${whatsappMessage}`;
  
  // Header WhatsApp
  const headerWhatsapp = document.getElementById('header-whatsapp');
  if (headerWhatsapp) {
    headerWhatsapp.href = whatsappUrl;
    headerWhatsapp.target = '_blank';
    headerWhatsapp.rel = 'noopener noreferrer';
  }
  
  // Hero WhatsApp
  const heroWhatsapp = document.getElementById('hero-whatsapp');
  if (heroWhatsapp) {
    heroWhatsapp.href = whatsappUrl;
    heroWhatsapp.target = '_blank';
    heroWhatsapp.rel = 'noopener noreferrer';
  }
  
  // Instagram
  const contatoInstagram = document.getElementById('contato-instagram');
  if (contatoInstagram) {
    contatoInstagram.href = CONFIG.INSTAGRAM_URL;
    contatoInstagram.querySelector('.contato-card__value').textContent = CONFIG.INSTAGRAM_HANDLE;
  }
  
  // Email
  const contatoEmail = document.getElementById('contato-email');
  if (contatoEmail) {
    contatoEmail.href = `mailto:${CONFIG.EMAIL_CONTATO}`;
    contatoEmail.querySelector('.contato-card__value').textContent = CONFIG.EMAIL_CONTATO;
  }
}

// ==============================================
// RENDERIZAR SERVIÇOS
// ==============================================

function renderServicos() {
  const grid = document.getElementById('servicos-grid');
  if (!grid) return;
  
  grid.innerHTML = SERVICOS.map(servico => `
    <article class="servico-card" data-servico="${servico.id}">
      <div class="servico-card__icon">
        ${servico.icone}
      </div>
      <h3 class="servico-card__title">${servico.titulo}</h3>
      <p class="servico-card__desc">${servico.descricao}</p>
      <ul class="servico-card__list">
        ${servico.itens.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <a href="#" class="btn btn--primary servico-card__cta" data-servico-cta="${servico.titulo}">
        Solicitar orçamento
      </a>
    </article>
  `).join('');
  
  // Adicionar listeners aos botões de orçamento
  grid.querySelectorAll('.servico-card__cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const servicoNome = btn.dataset.servicoCta;
      const mensagem = encodeURIComponent(`Olá! Vim pelo site da A2 Lab e gostaria de um orçamento para ${servicoNome}.`);
      const url = `https://wa.me/${CONFIG.WHATSAPP_NUMERO}?text=${mensagem}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

// ==============================================
// RENDERIZAR PORTFÓLIO
// ==============================================

function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  
  grid.innerHTML = PORTFOLIO.map(item => `
    <article 
      class="portfolio-item" 
      data-portfolio-id="${item.id}" 
      data-tipo="${item.tipo}"
      tabindex="0"
      role="button"
      aria-label="Ver detalhes: ${item.titulo}"
    >
      <div class="portfolio-item__image">
        <div class="placeholder-image" aria-hidden="true">
          <span>Imagem ${item.id}</span>
        </div>
        <span class="portfolio-item__badge">${item.badge}</span>
      </div>
      <div class="portfolio-item__content">
        <h3 class="portfolio-item__title">${item.titulo}</h3>
        <p class="portfolio-item__desc">${item.descricao.substring(0, 80)}...</p>
      </div>
    </article>
  `).join('');
}

// ==============================================
// FILTRO DO PORTFÓLIO
// ==============================================

function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.portfolio__tab');
  const items = document.querySelectorAll('.portfolio-item');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      
      // Atualizar tabs ativas
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      
      // Filtrar itens
      items.forEach(item => {
        const tipo = item.dataset.tipo;
        if (filter === 'all' || tipo === filter) {
          item.hidden = false;
        } else {
          item.hidden = true;
        }
      });
    });
  });
}

// ==============================================
// MODAL DO PORTFÓLIO
// ==============================================

function initPortfolioModal() {
  const modal = document.getElementById('portfolio-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  let lastFocusedElement = null;
  
  const openModal = (item) => {
    lastFocusedElement = document.activeElement;
    
    // Renderizar conteúdo
    const specsHtml = item.specs ? `
      <div class="modal__specs">
        <h4 class="modal__specs-title">Especificações</h4>
        <ul class="modal__specs-list">
          ${item.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
      </div>
    ` : '';
    
    modalBody.innerHTML = `
      <div class="placeholder-image modal__image" style="aspect-ratio: 16/9;" aria-hidden="true">
        <span>Imagem ${item.id}</span>
      </div>
      <span class="modal__category">${item.badge}</span>
      <h2 class="modal__title">${item.titulo}</h2>
      <p class="modal__desc">${item.descricao}</p>
      ${specsHtml}
    `;
    
    modal.showModal();
    modalClose.focus();
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    modal.close();
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };
  
  // Abrir modal ao clicar em item
  portfolioItems.forEach(portfolioItem => {
    const handleOpen = () => {
      const id = parseInt(portfolioItem.dataset.portfolioId);
      const item = PORTFOLIO.find(p => p.id === id);
      if (item) {
        openModal(item);
      }
    };
    
    portfolioItem.addEventListener('click', handleOpen);
    portfolioItem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });
  });
  
  // Fechar modal
  modalClose.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// ==============================================
// FORMULÁRIO DE CONTATO
// ==============================================

function initContactForm() {
  const form = document.getElementById('contato-form');
  if (!form) return;
  
  const inputs = form.querySelectorAll('.form-input');
  
  // Máscaras para telefone
  const telefoneInput = document.getElementById('form-telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length <= 11) {
        if (value.length > 2) {
          value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 10) {
          value = value.slice(0, 10) + '-' + value.slice(10);
        }
      }
      
      e.target.value = value.slice(0, 15);
    });
  }
  
  // Validação em tempo real
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
    
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        validateField(input);
      }
    });
  });
  
  // Submit do formulário
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      const nome = document.getElementById('form-nome').value.trim();
      const telefone = document.getElementById('form-telefone').value.trim();
      const equipamento = document.getElementById('form-equipamento').value;
      const mensagem = document.getElementById('form-mensagem').value.trim();
      
      const whatsappMensagem = CONFIG.WHATSAPP_MENSAGEM_FORM(nome, telefone, equipamento, mensagem);
      const url = `https://wa.me/${CONFIG.WHATSAPP_NUMERO}?text=${encodeURIComponent(whatsappMensagem)}`;
      
      window.open(url, '_blank', 'noopener,noreferrer');
      
      // Opcional: limpar formulário após envio
      // form.reset();
    }
  });
}

function validateField(input) {
  const errorSpan = input.parentElement.querySelector('.form-error');
  let errorMessage = '';
  
  // Remover estado anterior
  input.classList.remove('is-invalid');
  if (errorSpan) errorSpan.textContent = '';
  
  // Verificar se é obrigatório
  if (input.required && !input.value.trim()) {
    errorMessage = 'Este campo é obrigatório.';
  }
  
  // Validações específicas
  if (!errorMessage && input.value.trim()) {
    switch (input.name) {
      case 'nome':
        if (input.value.trim().length < 3) {
          errorMessage = 'Nome deve ter pelo menos 3 caracteres.';
        }
        break;
      
      case 'telefone':
        const telefoneClean = input.value.replace(/\D/g, '');
        if (telefoneClean.length < 10 || telefoneClean.length > 11) {
          errorMessage = 'Telefone inválido. Use o formato (00) 00000-0000.';
        }
        break;
      
      case 'equipamento':
        if (!input.value) {
          errorMessage = 'Selecione um equipamento.';
        }
        break;
    }
  }
  
  // Aplicar estado de erro
  if (errorMessage) {
    input.classList.add('is-invalid');
    if (errorSpan) errorSpan.textContent = errorMessage;
    return false;
  }
  
  return true;
}

// ==============================================
// ATUALIZAR ANO NO FOOTER
// ==============================================

function updateFooterYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ==============================================
// ATUALIZAR INFORMAÇÕES DE CONTATO
// ==============================================

function updateContactInfo() {
  const footerLocation = document.getElementById('footer-location');
  if (footerLocation) {
    footerLocation.textContent = CONFIG.CIDADE_UF;
  }
}

// ==============================================
// OPCIONAL: Endpoint para POST futuro
// Descomente e configure quando tiver um backend
// ==============================================

/*
async function submitFormToBackend(formData) {
  try {
    const response = await fetch('/api/contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Erro ao enviar formulário');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}
*/
