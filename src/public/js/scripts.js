const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.remove('animate__slideOutUp');
        mobileMenu.classList.add('animate__animated', 'animate__slideInDown');
    } else {
        mobileMenu.classList.remove('animate__slideInDown');
        mobileMenu.classList.add('animate__slideOutUp');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500);
    }
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const welcomeBackground = document.querySelector(".welcome-background");
    const welcomeContent = document.querySelector(".welcome-content");

    welcomeBackground.style.filter = "blur(5px)";
    welcomeContent.style.opacity = "1";
  }, 1000);
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
    scrollTopBtn.classList.remove("hidden");
    scrollTopBtn.classList.add("block");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
}

// Función para hacer scroll al inicio
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMaintenance(button) {
  const icon = button.querySelector('i');
  const list = button.nextElementSibling;

  list.classList.toggle('hidden');
  if (list.classList.contains('hidden')) {
    icon.classList.remove('fa-caret-up');
    icon.classList.add('fa-caret-down');
  } else {
    icon.classList.remove('fa-caret-down');
    icon.classList.add('fa-caret-up');
  }
}