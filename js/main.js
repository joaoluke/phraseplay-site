/**
 * PhrasePlay Landing Page - JavaScript
 * Interações mínimas: menu mobile, FAQ acordeão, toggle tema, modal playlists
 */

// ============================================
// Theme Toggle (Dark/Light Mode)
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const languageSelect = document.getElementById('languageSelect');

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
// Internationalization (i18n)
// ============================================
const SUPPORTED_LANGUAGES = ['pt-BR', 'en-US'];
const DEFAULT_LANGUAGE = 'pt-BR';

const translations = {
  'pt-BR': {
    nav: {
      features: 'Recursos',
      howItWorks: 'Como funciona',
      pricing: 'Preço',
      faq: 'FAQ',
      downloadAndroid: 'Baixar para Android',
      joinWaitlist: 'Entrar na lista',
      languageSelect: 'Selecionar idioma',
      themeToggle: 'Alternar tema claro/escuro',
    },
    languages: {
      portuguese: 'Português',
      english: 'Inglês',
    },
    hero: {
      title: 'Aprenda idiomas ouvindo como você vive',
      subtitle: 'Playlists de frases em inglês e português, com vozes naturais e temas do seu dia a dia.',
      ctaDownload: 'Baixar para Android',
      ctaSamples: 'Ver playlists de exemplo',
      badgeAdFree: 'Sem anúncios',
      badgeFreshContent: 'Conteúdo atualizado',
      badgeOfflineSoon: 'Modo offline (em breve)',
    },
    features: {
      title: 'Por que PhrasePlay?',
      subtitle: 'Aprenda de forma natural, no seu ritmo, com tecnologia de ponta.',
      bilingualTitle: 'Playlists bilíngues',
      bilingualDescription: 'Frases curtas em inglês e português, com tradução imediata para fixação natural.',
      voicesTitle: 'Vozes naturais',
      voicesDescription: 'Qualidade semelhante a estúdios profissionais, para uma experiência realista.',
      algorithmTitle: 'Algoritmo Next Playlist',
      algorithmDescription: 'Recomendação contínua e inteligente do próximo tema para você nunca parar de aprender.',
      paceTitle: 'Aprenda no seu ritmo',
      paceDescription: 'Sessões rápidas de 5–15 minutos, onde e quando você quiser.',
      dailyTitle: 'Temas do cotidiano',
      dailyDescription: 'Trabalho, estudos, viagens, esportes e muito mais. Conteúdo relevante para sua vida.',
      costTitle: 'Baixo custo',
      costDescription: 'Acesso completo por PIX a partir de apenas R$ 5–7 por mês.',
    },
    howItWorks: {
      title: 'Como funciona?',
      subtitle: 'Três passos simples para começar a aprender agora.',
      step1Title: 'Escolha um tema que você ama',
      step1Description: 'Futebol, viagens, tecnologia, filmes... O que você curte!',
      step2Title: 'Dê play: frases curtas em inglês + português',
      step2Description: 'Ouça a frase em inglês, depois em português. Simples e eficaz.',
      step3Title: 'Salve, repita e avance com recomendações inteligentes',
      step3Description: 'Marque favoritas, revise quando quiser e descubra novos temas automaticamente.',
    },
    playlists: {
      title: 'Playlists de exemplo',
      subtitle: 'Veja alguns dos temas disponíveis para você começar.',
      conversationTitle: 'Conversação Básica — Cumprimentos',
      travelTitle: 'Viagem — Aeroporto e Hotel',
      sportsTitle: 'Esportes — Futebol (Brasileirão)',
      workTitle: 'Trabalho — Reuniões e E-mails',
      viewExamples: 'Ver exemplos →',
      viewExamplesAria: 'Ver exemplos de frases',
    },
    modal: {
      title: 'Exemplos de frases',
      close: 'Fechar',
    },
    pricing: {
      title: 'Preço simples e justo',
      subtitle: 'Acesso completo por um valor que cabe no seu bolso.',
      price: 'R$ 5–7',
      pricePeriod: '/mês',
      method: 'Pagamento via PIX',
      feature1: 'Acesso completo a todas as playlists',
      feature2: 'Atualizações contínuas de conteúdo',
      feature3: 'Sem cartão de crédito',
      feature4: 'Sem anúncios, sem surpresas',
      cta: 'Quero começar por R$ 5–7',
    },
    testimonials: {
      title: 'O que estão dizendo',
      quote1: '"Finalmente um app de idiomas que não parece tarefa de casa. Aprendo enquanto faço minhas caminhadas!"',
      quote2: '"As playlists de futebol me ajudaram demais a entender os narradores em inglês. Muito bom!"',
      quote3: '"Preço justo e conteúdo de qualidade. Recomendo para todos que querem aprender de forma natural."',
      person1: 'Ana Silva',
      person1Role: 'Estudante de Marketing',
      person2: 'Carlos Mendes',
      person2Role: 'Analista de TI',
      person3: 'Beatriz Costa',
      person3Role: 'Designer',
    },
    faq: {
      title: 'Perguntas frequentes',
      q1: 'Preciso de internet para usar?',
      a1: 'Atualmente, sim. O PhrasePlay funciona via streaming. Estamos trabalhando no modo offline, que será lançado em breve.',
      q2: 'Tem anúncios?',
      a2: 'Não! O PhrasePlay é 100% livre de anúncios. Você paga um valor justo e tem acesso completo ao conteúdo.',
      q3: 'É adequado para iniciantes?',
      a3: 'Sim! Temos playlists para todos os níveis, desde iniciantes absolutos até níveis intermediários e avançados (A1–C1).',
      q4: 'Como funciona o pagamento?',
      a4: 'Você paga via PIX mensal. Os detalhes de valores e renovação serão definidos na hora da inscrição.',
      q5: 'Tem versão para iOS?',
      a5: 'Ainda não. Estamos focando no Android primeiro. A versão iOS será desenvolvida assim que tivermos recursos disponíveis.',
    },
    cta: {
      title: 'Pronto para aprender ouvindo?',
      subtitle: 'Baixe o app ou entre na lista de espera para novidades e lançamentos.',
      download: 'Baixar para Android',
      or: 'ou',
    },
    form: {
      namePlaceholder: 'Seu nome',
      nameAria: 'Seu nome',
      emailPlaceholder: 'Seu e-mail',
      emailAria: 'Seu e-mail',
      submit: 'Entrar na Lista',
    },
    footer: {
      tagline: 'Aprenda idiomas ouvindo como você vive.',
      terms: 'Termos de Uso',
      privacy: 'Privacidade',
      contact: 'Contato',
      copyright: '© PhrasePlay, 2025. Todos os direitos reservados.',
    },
  },
  'en-US': {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      downloadAndroid: 'Download for Android',
      joinWaitlist: 'Join the waitlist',
      languageSelect: 'Select language',
      themeToggle: 'Toggle light/dark theme',
    },
    languages: {
      portuguese: 'Português (Brasil)',
      english: 'English',
    },
    hero: {
      title: 'Learn languages by listening the way you live',
      subtitle: 'Bilingual playlists in English and Portuguese with natural voices and everyday topics.',
      ctaDownload: 'Download for Android',
      ctaSamples: 'See sample playlists',
      badgeAdFree: 'Ad-free experience',
      badgeFreshContent: 'Fresh content',
      badgeOfflineSoon: 'Offline mode (coming soon)',
    },
    features: {
      title: 'Why PhrasePlay?',
      subtitle: 'Learn naturally, at your own pace, with cutting-edge technology.',
      bilingualTitle: 'Bilingual playlists',
      bilingualDescription: 'Short phrases in English and Portuguese with instant translation for natural retention.',
      voicesTitle: 'Natural voices',
      voicesDescription: 'Studio-quality voices for a realistic experience.',
      algorithmTitle: 'Next Playlist Algorithm',
      algorithmDescription: 'Smart recommendations of the next topic so you never stop learning.',
      paceTitle: 'Learn at your pace',
      paceDescription: 'Quick 5–15 minute sessions, whenever and wherever you want.',
      dailyTitle: 'Everyday topics',
      dailyDescription: 'Work, studies, travel, sports, and more. Content that fits your life.',
      costTitle: 'Low cost',
      costDescription: 'Full access via PIX starting at just R$ 5–7 per month.',
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Three simple steps to start learning today.',
      step1Title: 'Pick a theme you love',
      step1Description: 'Soccer, travel, technology, movies… whatever you enjoy!',
      step2Title: 'Press play: short phrases in English + Portuguese',
      step2Description: 'Hear the phrase in English, then in Portuguese. Simple and effective.',
      step3Title: 'Save, repeat, and grow with smart recommendations',
      step3Description: 'Save favorites, review anytime, and discover new topics automatically.',
    },
    playlists: {
      title: 'Sample playlists',
      subtitle: 'Check out some themes you can start with.',
      conversationTitle: 'Basic Conversation — Greetings',
      travelTitle: 'Travel — Airport & Hotel',
      sportsTitle: 'Sports — Soccer (Brazil League)',
      workTitle: 'Work — Meetings & Emails',
      viewExamples: 'See examples →',
      viewExamplesAria: 'See sample phrases',
    },
    modal: {
      title: 'Sample phrases',
      close: 'Close',
    },
    pricing: {
      title: 'Simple, fair pricing',
      subtitle: 'Full access for a price that fits your budget.',
      price: 'R$ 5–7',
      pricePeriod: '/month',
      method: 'Pay with PIX',
      feature1: 'Full access to every playlist',
      feature2: 'Continuous content updates',
      feature3: 'No credit card',
      feature4: 'No ads, no surprises',
      cta: 'Get started for R$ 5–7',
    },
    testimonials: {
      title: 'What people are saying',
      quote1: '"Finally a language app that doesn’t feel like homework. I learn while I walk!"',
      quote2: '"The soccer playlists really helped me understand English commentators. So good!"',
      quote3: '"Fair pricing and quality content. I recommend it to everyone who wants to learn naturally."',
      person1: 'Ana Silva',
      person1Role: 'Marketing Student',
      person2: 'Carlos Mendes',
      person2Role: 'IT Analyst',
      person3: 'Beatriz Costa',
      person3Role: 'Designer',
    },
    faq: {
      title: 'Frequently asked questions',
      q1: 'Do I need internet to use it?',
      a1: 'For now, yes. PhrasePlay works via streaming. We are working on an offline mode coming soon.',
      q2: 'Are there ads?',
      a2: 'No! PhrasePlay is 100% ad-free. Pay a fair price and get full access to the content.',
      q3: 'Is it good for beginners?',
      a3: 'Yes! We have playlists for every level, from complete beginners to intermediate and advanced (A1–C1).',
      q4: 'How does payment work?',
      a4: 'You pay monthly via PIX. Pricing and renewal details are defined at signup.',
      q5: 'Is there an iOS version?',
      a5: 'Not yet. We are focusing on Android first. The iOS version will come as soon as we have the resources.',
    },
    cta: {
      title: 'Ready to learn by listening?',
      subtitle: 'Download the app or join the waitlist for news and launches.',
      download: 'Download for Android',
      or: 'or',
    },
    form: {
      namePlaceholder: 'Your name',
      nameAria: 'Your name',
      emailPlaceholder: 'Your email',
      emailAria: 'Your email',
      submit: 'Join the Waitlist',
    },
    footer: {
      tagline: 'Learn languages by listening to your life.',
      terms: 'Terms of Use',
      privacy: 'Privacy',
      contact: 'Contact',
      copyright: '© PhrasePlay, 2025. All rights reserved.',
    },
  },
};

let currentLanguage = DEFAULT_LANGUAGE;
let activePlaylistId = null;

const getTranslationValue = (dictionary, key) => {
  if (!dictionary || !key) return undefined;
  return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dictionary);
};

const translateKey = (key, language) => {
  if (!key) return undefined;
  const normalizedLanguage = normalizeLanguage(language);
  const primaryDictionary = translations[normalizedLanguage];
  const fallbackDictionary = translations[DEFAULT_LANGUAGE];
  const primaryValue = getTranslationValue(primaryDictionary, key);
  if (primaryValue !== undefined) return primaryValue;
  if (normalizedLanguage === DEFAULT_LANGUAGE) return undefined;
  return getTranslationValue(fallbackDictionary, key);
};

function normalizeLanguage(language) {
  if (!language) return DEFAULT_LANGUAGE;
  const lowerLang = language.toLowerCase();
  const exactMatch = SUPPORTED_LANGUAGES.find((lang) => lang.toLowerCase() === lowerLang);
  if (exactMatch) return exactMatch;
  const base = lowerLang.split('-')[0];
  const baseMatch = SUPPORTED_LANGUAGES.find((lang) => lang.split('-')[0].toLowerCase() === base);
  return baseMatch || DEFAULT_LANGUAGE;
}

function detectLanguage() {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const browserLanguages = navigator.languages || [navigator.language, navigator.userLanguage].filter(Boolean);
  if (!browserLanguages.length) {
    return DEFAULT_LANGUAGE;
  }

  return normalizeLanguage(browserLanguages[0]);
}

function applyTranslations(language) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = translateKey(key, language);
    if (typeof translation === 'string') {
      element.textContent = translation;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translation = translateKey(key, language);
    if (typeof translation === 'string') {
      element.setAttribute('placeholder', translation);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.getAttribute('data-i18n-aria-label');
    const translation = translateKey(key, language);
    if (typeof translation === 'string') {
      element.setAttribute('aria-label', translation);
    }
  });
}

function renderPlaylistModal(playlistId, language) {
  const playlist = playlistData[playlistId];
  if (!playlist) return;

  const title = translateKey(playlist.titleKey, language) || playlist.defaultTitle;
  modalTitle.textContent = title;
  modalPhrases.innerHTML = playlist.phrases
    .map((phrase) => `
        <div class="phrase-item">
          <div class="phrase-en">${phrase.en}</div>
          <div class="phrase-pt">${phrase.pt}</div>
        </div>
      `)
    .join('');
}

function setLanguage(language) {
  const normalizedLanguage = normalizeLanguage(language);
  currentLanguage = normalizedLanguage;

  htmlElement.setAttribute('lang', normalizedLanguage);
  applyTranslations(normalizedLanguage);

  if (languageSelect) {
    languageSelect.value = normalizedLanguage;
  }

  if (activePlaylistId) {
    renderPlaylistModal(activePlaylistId, normalizedLanguage);
  }

  localStorage.setItem('language', normalizedLanguage);
}

if (languageSelect) {
  languageSelect.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });
}

const storedLanguage = localStorage.getItem('language');
const initialLanguage = storedLanguage || detectLanguage();
setLanguage(initialLanguage);

function getAudioLabels(button, language) {
  const playLabelKey = button.getAttribute('data-i18n-play-label');
  const pauseLabelKey = button.getAttribute('data-i18n-pause-label');
  const playAriaKey = button.getAttribute('data-i18n-play-aria-label');
  const pauseAriaKey = button.getAttribute('data-i18n-pause-aria-label');

  return {
    playLabel: translateKey(playLabelKey, language) || button.dataset.defaultPlayLabel || 'Play sample',
    pauseLabel: translateKey(pauseLabelKey, language) || button.dataset.defaultPauseLabel || 'Pause sample',
    playAria: translateKey(playAriaKey, language) || button.dataset.defaultPlayAria || 'Play sample audio',
    pauseAria: translateKey(pauseAriaKey, language) || button.dataset.defaultPauseAria || 'Pause sample audio',
  };
}

function pauseAllAudios(exceptAudio = null) {
  playlistAudios.forEach((audio) => {
    if (audio !== exceptAudio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  audioToggleButtons.forEach((button) => {
    const labels = getAudioLabels(button, currentLanguage);
    button.textContent = labels.playLabel;
    button.setAttribute('aria-label', labels.playAria);
    button.classList.remove('is-playing');
  });
}

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
const audioToggleButtons = document.querySelectorAll('.playlist-audio-toggle');
const playlistAudios = document.querySelectorAll('.playlist-audio');

audioToggleButtons.forEach((button) => {
  const parentCard = button.closest('.playlist-card');
  const audioElement = parentCard ? parentCard.querySelector('.playlist-audio') : null;

  if (!audioElement) return;

  const labels = getAudioLabels(button, currentLanguage);
  button.dataset.defaultPlayLabel = labels.playLabel;
  button.dataset.defaultPauseLabel = labels.pauseLabel;
  button.dataset.defaultPlayAria = labels.playAria;
  button.dataset.defaultPauseAria = labels.pauseAria;
  button.textContent = labels.playLabel;
  button.setAttribute('aria-label', labels.playAria);

  button.addEventListener('click', () => {
    const isPlaying = !audioElement.paused;

    if (isPlaying) {
      audioElement.pause();
      const updatedLabels = getAudioLabels(button, currentLanguage);
      button.textContent = updatedLabels.playLabel;
      button.setAttribute('aria-label', updatedLabels.playAria);
      button.classList.remove('is-playing');
    } else {
      pauseAllAudios(audioElement);
      audioElement.play();
      const updatedLabels = getAudioLabels(button, currentLanguage);
      button.textContent = updatedLabels.pauseLabel;
      button.setAttribute('aria-label', updatedLabels.pauseAria);
      button.classList.add('is-playing');
    }
  });

  audioElement.addEventListener('ended', () => {
    const updatedLabels = getAudioLabels(button, currentLanguage);
    button.textContent = updatedLabels.playLabel;
    button.setAttribute('aria-label', updatedLabels.playAria);
    button.classList.remove('is-playing');
  });
});

// Dados de exemplo das playlists
const playlistData = {
  conversacao: {
    titleKey: 'playlists.conversationTitle',
    defaultTitle: 'Conversação Básica — Cumprimentos',
    phrases: [
      { en: 'Good morning!', pt: 'Bom dia!' },
      { en: 'How are you?', pt: 'Como você está?' },
      { en: 'Nice to meet you.', pt: 'Prazer em conhecê-lo.' },
      { en: 'Have a great day!', pt: 'Tenha um ótimo dia!' },
      { en: 'See you later!', pt: 'Até mais tarde!' }
    ]
  },
  viagem: {
    titleKey: 'playlists.travelTitle',
    defaultTitle: 'Viagem — Aeroporto e Hotel',
    phrases: [
      { en: 'Where is the check-in counter?', pt: 'Onde fica o balcão de check-in?' },
      { en: 'I have a reservation.', pt: 'Eu tenho uma reserva.' },
      { en: 'What time is boarding?', pt: 'Que horas é o embarque?' },
      { en: 'Can I have the room key?', pt: 'Posso pegar a chave do quarto?' },
      { en: 'Is breakfast included?', pt: 'O café da manhã está incluído?' }
    ]
  },
  esportes: {
    titleKey: 'playlists.sportsTitle',
    defaultTitle: 'Esportes — Futebol (Brasileirão)',
    phrases: [
      { en: 'What a goal!', pt: 'Que golaço!' },
      { en: 'The match is tied.', pt: 'O jogo está empatado.' },
      { en: 'Red card for the defender!', pt: 'Cartão vermelho para o zagueiro!' },
      { en: 'Amazing save by the goalkeeper!', pt: 'Defesa incrível do goleiro!' },
      { en: 'Who is your favorite team?', pt: 'Qual é o seu time favorito?' }
    ]
  },
  trabalho: {
    titleKey: 'playlists.workTitle',
    defaultTitle: 'Trabalho — Reuniões e E-mails',
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
      activePlaylistId = playlistId;
      renderPlaylistModal(playlistId, currentLanguage);
      
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
  activePlaylistId = null;
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
