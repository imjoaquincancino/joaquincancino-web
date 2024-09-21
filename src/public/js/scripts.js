document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const welcomeBackground = document.querySelector(".welcome-background");
    const welcomeContent = document.querySelector(".welcome-content");

    welcomeBackground.style.filter = "blur(5px)";
    welcomeContent.style.opacity = "1";
  }, 1000); // Espera 2 segundos antes de aplicar el efecto
});

const navbar = document.getElementById("navbar");
navbar.classList.add("bg-opacity-10");
navbar.classList.add("fixed");
window.addEventListener("scroll", function () {
  if (window.scrollY > 515) {
    navbar.classList.remove("bg-opacity-10");
    navbar.classList.add("bg-opacity-100");
  } else {
    navbar.classList.add("bg-opacity-10");
    navbar.classList.remove("bg-opacity-100");
  }
});

window.onscroll = function () {
  showScrollTopBtn();
};

function showScrollTopBtn() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.classList.remove("hidden"); // Mostrar el botón
    scrollTopBtn.classList.add("block"); // Asegurar que sea visible
  } else {
    scrollTopBtn.classList.add("hidden"); // Ocultar el botón cuando esté al inicio
  }
}

// Función para hacer scroll al inicio
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMaintenance(button) {
  const icon = button.querySelector('i');
  const list = button.nextElementSibling;

  // Cambiar el ícono y alternar la visibilidad del contenido
  list.classList.toggle('hidden');
  if (list.classList.contains('hidden')) {
    icon.classList.remove('fa-caret-up');
    icon.classList.add('fa-caret-down');
  } else {
    icon.classList.remove('fa-caret-down');
    icon.classList.add('fa-caret-up');
  }
}