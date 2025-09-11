// ===== CONFIGURACIÓN PRINCIPAL =====

// Datos de servicios dinámicos según info.txt
const serviciosData = [
  {
    id: 'simple',
    titulo: 'Lectura Simple',
    precio: '$2.000',
    descripcion: 'Una consulta rápida y directa para responder tus preguntas más urgentes.',
    icono: './img/suma sacerdotisa.jpeg',
    caracteristicas: [
      'Consulta de 15 minutos',
      'Respuesta a 1 pregunta específica',
      'Interpretación básica',
      'Consejos inmediatos'
    ],
    whatsappMsg: 'Hola Aknuz, me interesa la Lectura Simple de $2.000. ¿Podrías darme más información?'
  },
  {
    id: 'rapida',
    titulo: 'Lectura Rápida',
    precio: '$5.000',
    descripcion: 'Consulta completa con análisis detallado de tu situación actual.',
    icono: './img/el mago.jpeg',
    caracteristicas: [
      'Consulta de 30 minutos',
      'Hasta 3 preguntas',
      'Análisis detallado',
      'Guía personalizada',
      'Seguimiento por WhatsApp'
    ],
    whatsappMsg: 'Hola Aknuz, quiero agendar una Lectura Rápida de $5.000. ¿Cuándo tienes disponibilidad?'
  },
  {
    id: 'completa',
    titulo: 'Lectura Completa',
    precio: '$25.000',
    descripcion: 'Sesión profunda y transformadora con análisis integral de tu vida.',
    icono: './img/la torre.jpeg',
    caracteristicas: [
      'Consulta de 60 minutos',
      'Preguntas ilimitadas',
      'Análisis completo de vida',
      'Plan de acción personalizado',
      'Grabación de la sesión',
      'Seguimiento semanal'
    ],
    whatsappMsg: 'Hola Aknuz, necesito una Lectura Completa de $25.000. Es muy importante para mí, ¿podemos coordinar?'
  }
];

// Datos de tipos de consulta según info.txt
const tiposConsulta = [
  {
    id: 'amor',
    titulo: 'Amor y Relaciones',
    descripcion: 'Descubre los secretos de tu corazón y encuentra claridad en tus relaciones amorosas.',
    icono: './img/carta del amor.jpeg',
    whatsappMsg: 'Hola Aknuz, necesito una consulta sobre amor y relaciones. ¿Me puedes ayudar?'
  },
  {
    id: 'trabajo',
    titulo: 'Laboral y Financiera',
    descripcion: 'Obtén orientación sobre tu carrera profesional y decisiones financieras importantes.',
    icono: './img/el trabajo.jpeg',
    whatsappMsg: 'Hola Aknuz, quiero una consulta sobre mi situación laboral y financiera. ¿Cuándo podemos hablar?'
  }
];

// ===== INICIALIZACIÓN =====

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar todas las funcionalidades
  inicializarNavegacion();
  renderizarServicios();
  renderizarTiposConsulta();
  // inicializarBotonesFlotantes(); // DESHABILITADO por solicitud del usuario
  inicializarScrollSuave();
  inicializarAnimacionesScroll();
  inicializarParticulas();
  
  console.log('🔮 Aknuz by Gorgona - Sitio web inicializado correctamente');
});

// ===== NAVEGACIÓN RESPONSIVA =====

function inicializarNavegacion() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (hamburger && navMenu) {
    // Toggle del menú hamburguesa
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
  
  // Efecto de scroll en el header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

// ===== RENDERIZADO DINÁMICO DE SERVICIOS =====

function renderizarServicios() {
  const contenedorServicios = document.querySelector('.services-grid');
  
  if (!contenedorServicios) return;
  
  contenedorServicios.innerHTML = '';
  
  serviciosData.forEach(servicio => {
    const servicioHTML = `
      <div class="service-card animate-on-scroll" data-animation="fadeInUp">
        <div class="service-icon">
          <img src="${servicio.icono}" alt="${servicio.titulo}" />
        </div>
        <h3 class="service-title">${servicio.titulo}</h3>
        <div class="service-price">${servicio.precio}</div>
        <p class="service-description">${servicio.descripcion}</p>
        <ul class="service-features">
          ${servicio.caracteristicas.map(caracteristica => 
            `<li>${caracteristica}</li>`
          ).join('')}
        </ul>
        <a href="https://wa.me/56968364752?text=${encodeURIComponent(servicio.whatsappMsg)}" 
           class="btn-cta" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="Contactar por WhatsApp para ${servicio.titulo}">
          Elegir este servicio
        </a>
      </div>
    `;
    
    contenedorServicios.insertAdjacentHTML('beforeend', servicioHTML);
  });
}

// ===== RENDERIZADO DINÁMICO DE TIPOS DE CONSULTA =====

function renderizarTiposConsulta() {
  const contenedorConsultas = document.querySelector('.consultations-grid');
  
  if (!contenedorConsultas) return;
  
  contenedorConsultas.innerHTML = '';
  
  tiposConsulta.forEach(consulta => {
    const consultaHTML = `
      <div class="consultation-card animate-on-scroll" data-animation="fadeInUp">
        <div class="consultation-icon">
          <img src="${consulta.icono}" alt="${consulta.titulo}" />
        </div>
        <h3 class="consultation-title">${consulta.titulo}</h3>
        <p class="consultation-description">${consulta.descripcion}</p>
        <a href="https://wa.me/56968364752?text=${encodeURIComponent(consulta.whatsappMsg)}" 
           class="btn-cta" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="Consultar sobre ${consulta.titulo}">
          Consultar ahora
        </a>
      </div>
    `;
    
    contenedorConsultas.insertAdjacentHTML('beforeend', consultaHTML);
  });
}

// ===== BOTONES FLOTANTES PERSISTENTES =====
// DESHABILITADO: Función comentada por solicitud del usuario

/*
function inicializarBotonesFlotantes() {
  // Crear contenedor de botones flotantes si no existe
  let contenedorBotones = document.querySelector('.floating-buttons');
  
  if (!contenedorBotones) {
    contenedorBotones = document.createElement('div');
    contenedorBotones.className = 'floating-buttons';
    document.body.appendChild(contenedorBotones);
  }
  
  // HTML de los botones flotantes
  contenedorBotones.innerHTML = `
    <button class="floating-btn scroll-up-btn" 
            aria-label="Volver arriba" 
            data-tooltip="Volver arriba">
    </button>
    <a href="https://wa.me/56968364752?text=${encodeURIComponent('Hola Aknuz, me interesa conocer más sobre tus servicios de tarot. ¿Podrías ayudarme?')}" 
       class="floating-btn whatsapp-btn" 
       target="_blank" 
       rel="noopener noreferrer"
       aria-label="Contactar por WhatsApp" 
       data-tooltip="Contactar por WhatsApp">
    </a>
  `;
  
  // Funcionalidad del botón scroll up
  const scrollUpBtn = contenedorBotones.querySelector('.scroll-up-btn');
  
  // Mostrar/ocultar botón según scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollUpBtn.classList.add('visible');
    } else {
      scrollUpBtn.classList.remove('visible');
    }
  });
  
  // Funcionalidad de scroll suave hacia arriba
  scrollUpBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
*/

// ===== SCROLL SUAVE =====

function inicializarScrollSuave() {
  // Scroll suave para todos los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Flecha de scroll del hero
  const scrollArrow = document.querySelector('.scroll-arrow');
  if (scrollArrow) {
    scrollArrow.addEventListener('click', function() {
      const siguienteSeccion = document.querySelector('.services');
      if (siguienteSeccion) {
        siguienteSeccion.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ===== ANIMACIONES AL HACER SCROLL =====

function inicializarAnimacionesScroll() {
  // Configurar Intersection Observer para animaciones
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Animar elementos hijos con delay
        const elementosHijos = entry.target.querySelectorAll('.animate-on-scroll');
        elementosHijos.forEach((hijo, index) => {
          setTimeout(() => {
            hijo.classList.add('animate');
          }, index * 100);
        });
      }
    });
  }, observerOptions);
  
  // Observar todos los elementos con animación
  document.querySelectorAll('.animate-on-scroll').forEach(elemento => {
    observer.observe(elemento);
  });
}

// ===== PARTÍCULAS FLOTANTES =====

function inicializarParticulas() {
  // Crear partículas en el hero
  const hero = document.querySelector('.hero');
  if (hero) {
    let contenedorParticulas = hero.querySelector('.hero-particles');
    
    if (!contenedorParticulas) {
      contenedorParticulas = document.createElement('div');
      contenedorParticulas.className = 'hero-particles';
      hero.appendChild(contenedorParticulas);
    }
    
    // Crear partículas individuales
    for (let i = 0; i < 9; i++) {
      const particula = document.createElement('div');
      particula.className = 'particle';
      contenedorParticulas.appendChild(particula);
    }
  }
  
  // Crear partículas en secciones
  document.querySelectorAll('.section').forEach(seccion => {
    if (!seccion.querySelector('.section-particles')) {
      const contenedorParticulas = document.createElement('div');
      contenedorParticulas.className = 'section-particles';
      
      // Crear menos partículas para las secciones
      for (let i = 0; i < 3; i++) {
        const particula = document.createElement('div');
        particula.className = 'section-particle';
        particula.style.left = Math.random() * 100 + '%';
        particula.style.animationDelay = Math.random() * 8 + 's';
        contenedorParticulas.appendChild(particula);
      }
      
      seccion.appendChild(contenedorParticulas);
    }
  });
}

// ===== UTILIDADES =====

// Función para formatear números de teléfono
function formatearTelefono(numero) {
  return numero.replace(/\D/g, '');
}

// Función para validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'info') {
  const notificacion = document.createElement('div');
  notificacion.className = `notificacion notificacion-${tipo}`;
  notificacion.textContent = mensaje;
  
  document.body.appendChild(notificacion);
  
  // Mostrar notificación
  setTimeout(() => {
    notificacion.classList.add('visible');
  }, 100);
  
  // Ocultar notificación después de 3 segundos
  setTimeout(() => {
    notificacion.classList.remove('visible');
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 300);
  }, 3000);
}

// ===== MANEJO DE ERRORES =====

window.addEventListener('error', function(e) {
  console.error('Error en Aknuz:', e.error);
});

// ===== OPTIMIZACIÓN DE RENDIMIENTO =====

// Throttle para eventos de scroll
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Aplicar throttle a eventos de scroll
const scrollHandler = throttle(function() {
  // Lógica de scroll optimizada
}, 16); // ~60fps

window.addEventListener('scroll', scrollHandler);

// ===== ACCESIBILIDAD =====

// Manejo de navegación por teclado
document.addEventListener('keydown', function(e) {
  // Escape para cerrar menús
  if (e.key === 'Escape') {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }
});

// ===== LAZY LOADING DE IMÁGENES =====

function inicializarLazyLoading() {
  const imagenes = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  imagenes.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarLazyLoading);
} else {
  inicializarLazyLoading();
}

// ===== ANALYTICS Y TRACKING =====

// Función para trackear eventos (preparada para Google Analytics)
function trackearEvento(categoria, accion, etiqueta) {
  if (typeof gtag !== 'undefined') {
    gtag('event', accion, {
      event_category: categoria,
      event_label: etiqueta
    });
  }
  
  console.log(`📊 Evento: ${categoria} - ${accion} - ${etiqueta}`);
}

// Trackear clics en botones de WhatsApp
document.addEventListener('click', function(e) {
  if (e.target.closest('a[href*="wa.me"]')) {
    trackearEvento('WhatsApp', 'click', 'Contacto');
  }
});

// ===== MODO OSCURO (OPCIONAL) =====

function inicializarModoOscuro() {
  const preferenciaModoOscuro = localStorage.getItem('modo-oscuro');
  const prefiereModoOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (preferenciaModoOscuro === 'true' || (preferenciaModoOscuro === null && prefiereModoOscuro)) {
    document.body.classList.add('modo-oscuro');
  }
}

// Inicializar modo oscuro
inicializarModoOscuro();

// ===== EXPORTAR FUNCIONES PARA USO GLOBAL =====

window.AknuzApp = {
  serviciosData,
  tiposConsulta,
  mostrarNotificacion,
  trackearEvento
};

console.log('✨ Aknuz by Gorgona - JavaScript cargado completamente');