document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Restaurar preferencia de modo oscuro
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    body.classList.add("active");
  } else {
    body.classList.remove("active");
  }

  // Modo oscuro toggle
  const darkMode = document.querySelector(".DARK-MODE");

  function toggleDarkMode() {
    body.classList.toggle("active");
    const isDark = body.classList.contains("active");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  }

  darkMode.addEventListener("click", toggleDarkMode);
  darkMode.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toggleDarkMode();
    }
  });

  // Accesibilidad
  const Access = document.getElementById("Acc1");
  const Acceso = document.querySelector(".activo");
  Access.addEventListener("click", () => {
    Acceso.classList.toggle("active");
  });

  // Menú hamburguesa
  const toggleBtn = document.getElementById("toggleMenu");
  const menu = document.querySelector(".menu");
  const bodyContainer = document.querySelector(".body");
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    bodyContainer.classList.toggle("menu-active");
  });

  // Menú de usuario
  const profileTriggers = document.querySelectorAll(".profile");
  const menu2 = document.querySelector(".menu2");

  profileTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu2.classList.toggle("active");
    });
  });

  document.addEventListener("click", (e) => {
    const isClickInside = e.target.closest(".menu2") || e.target.closest(".profile");
    if (!isClickInside && menu2.classList.contains("active")) {
      menu2.classList.remove("active");
    }
  });

  // Tamaño de fuente
  const getFontSize = () =>
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size'));

  const fontUp = element => {
    element.addEventListener('click', () => {
      let fontSize = getFontSize();
      document.documentElement.style.setProperty('--font-size', `${fontSize * 1.1}`);
    });
  };

  const fontDown = element => {
    element.addEventListener('click', () => {
      let fontSize = getFontSize();
      document.documentElement.style.setProperty('--font-size', `${fontSize * 0.9}`);
    });
  };

  fontUp(document.getElementById('font-up'));
  fontDown(document.getElementById('font-down'));

  // Dislexia friendly
  const toggleFontButton = document.getElementById('Dislexia');
  const getFontFamily = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--font-family').trim();

  toggleFontButton.addEventListener('click', () => {
    const currentFont = getFontFamily();
    const newFont = currentFont.includes('Poppins')
      ? "'Comic Neue', sans-serif"
      : "'Poppins', sans-serif";
    document.documentElement.style.setProperty('--font-family', newFont);
  });


    const helpBox = document.querySelector(".help");
    const rejectBtn = document.querySelector(".reject .buttons");
    const noVolverBtn = document.getElementById("novolveramostrar");

    // Verifica si el usuario ya eligió no volver a mostrar
    if (localStorage.getItem("ocultarHelpBox") === "true") {
      helpBox.style.display = "none";
      return;
    }

    // Ocultar temporalmente al hacer clic en el ícono de rechazar
    rejectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      helpBox.style.opacity = "0";
      setTimeout(() => {
        helpBox.style.display = "none";
      }, 300);
    });

    // Ocultar permanentemente al hacer clic en "No volver a mostrar"
    noVolverBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("ocultarHelpBox", "true");
      helpBox.style.opacity = "0";
      setTimeout(() => {
        helpBox.style.display = "none";
      }, 300);
    });
  });
//Navegar con teclado
addEventListener('keydown', d=>{
  const target = d.target;
  const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

  if (isTyping) return; 

  if(d.key === "S" ||d.key === "s" ){
      window.scrollBy({
      top: 100, // cantidad de píxeles a deslizar
      left: 0,
      behavior: "smooth"
    });
  }

  if (d.key === "w" || d.key === "W") {
    window.scrollBy({
      top: -100, // cantidad de píxeles hacia arriba
      left: 0,
      behavior: "smooth"
    });
  }

});