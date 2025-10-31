/**
 * PhrasePlay Landing Page - JavaScript
 * Interações mínimas: menu mobile, FAQ acordeão, toggle tema, modal playlists
 */

// ============================================
// Theme Toggle (Dark/Light Mode)
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Carregar tema do localStorage ou usar dark como padrão
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = htmlElement.getAttribute('data-theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

mobileMenuToggle.addEventListener('click', () => {
  const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
  
  mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
  mainNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('active');
  });
});

// Fechar menu ao clicar fora (em mobile)
document.addEventListener('click', (e) => {
  if (window.innerWidth < 768) {
    if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('active');
    }
  }
});

// ============================================
// FAQ Accordion
// ============================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    // Fechar todas as outras perguntas
    faqQuestions.forEach(q => {
      if (q !== question) {
        q.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Toggle da pergunta clicada
    question.setAttribute('aria-expanded', !isExpanded);
  });
});

// ============================================
// Playlist Modal
// ============================================
const playlistCards = document.querySelectorAll('.playlist-card');
const playlistModal = document.getElementById('playlistModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalPhrases = document.getElementById('modalPhrases');

// Dados de exemplo das playlists
const playlistData = {
  conversacao: {
    title: 'Conversação Básica — Cumprimentos',
    phrases: [
      { en: 'Good morning!', pt: 'Bom dia!' },
      { en: 'How are you?', pt: 'Como você está?' },
      { en: 'Nice to meet you.', pt: 'Prazer em conhecê-lo.' },
      { en: 'Have a great day!', pt: 'Tenha um ótimo dia!' },
      { en: 'See you later!', pt: 'Até mais tarde!' }
    ]
  },
  viagem: {
    title: 'Viagem — Aeroporto e Hotel',
    phrases: [
      { en: 'Where is the check-in counter?', pt: 'Onde fica o balcão de check-in?' },
      { en: 'I have a reservation.', pt: 'Eu tenho uma reserva.' },
      { en: 'What time is boarding?', pt: 'Que horas é o embarque?' },
      { en: 'Can I have the room key?', pt: 'Posso pegar a chave do quarto?' },
      { en: 'Is breakfast included?', pt: 'O café da manhã está incluído?' }
    ]
  },
  esportes: {
    title: 'Esportes — Futebol (Brasileirão)',
    phrases: [
      { en: 'What a goal!', pt: 'Que golaço!' },
      { en: 'The match is tied.', pt: 'O jogo está empatado.' },
      { en: 'Red card for the defender!', pt: 'Cartão vermelho para o zagueiro!' },
      { en: 'Amazing save by the goalkeeper!', pt: 'Defesa incrível do goleiro!' },
      { en: 'Who is your favorite team?', pt: 'Qual é o seu time favorito?' }
    ]
  },
  trabalho: {
    title: 'Trabalho — Reuniões e E-mails',
    phrases: [
      { en: 'Let\'s schedule a meeting.', pt: 'Vamos agendar uma reunião.' },
      { en: 'I\'ll send you the report.', pt: 'Vou te enviar o relatório.' },
      { en: 'Can we discuss this later?', pt: 'Podemos discutir isso depois?' },
      { en: 'Thank you for your feedback.', pt: 'Obrigado pelo seu feedback.' },
      { en: 'I agree with your proposal.', pt: 'Concordo com sua proposta.' }
    ]
  }
};

// Abrir modal
playlistCards.forEach(card => {
  const playlistBtn = card.querySelector('.btn-text');
  
  playlistBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const playlistId = card.getAttribute('data-playlist');
    const playlist = playlistData[playlistId];
    
    if (playlist) {
      modalTitle.textContent = playlist.title;
      
      // Renderizar frases
      modalPhrases.innerHTML = playlist.phrases.map(phrase => `
        <div class="phrase-item">
          <div class="phrase-en">${phrase.en}</div>
          <div class="phrase-pt">${phrase.pt}</div>
        </div>
      `).join('');
      
      // Mostrar modal
      playlistModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      
      // Foco no botão de fechar
      modalClose.focus();
    }
  });
});

// Fechar modal
const closeModal = () => {
  playlistModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && playlistModal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignorar links vazios ou só com #
    if (href === '#' || href === '') {
      e.preventDefault();
      return;
    }
    
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      e.preventDefault();
      
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Waitlist Form Submission
// ============================================
const waitlistForm = document.getElementById('waitlistForm');

waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(waitlistForm);
  const name = formData.get('name');
  const email = formData.get('email');
  
  // EDITAR: Adicionar lógica de envio para backend/serviço
  console.log('Submissão da lista de espera:', { name, email });
  
  // Feedback visual
  alert(`Obrigado, ${name}! Você entrou na lista de espera. Em breve enviaremos novidades para ${email}.`);
  
  // Limpar formulário
  waitlistForm.reset();
});

// ============================================
// Header Scroll Effect (opcional)
// ============================================
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = 'var(--shadow-md)';
  } else {
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ============================================
// Accessibility: Trap focus in modal
// ============================================
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

playlistModal.addEventListener('keydown', (e) => {
  if (playlistModal.getAttribute('aria-hidden') === 'false' && e.key === 'Tab') {
    const focusable = Array.from(playlistModal.querySelectorAll(focusableElements));
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];
    
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  }
});
