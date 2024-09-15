window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 515) {
      navbar.classList.remove('bg-opacity-10');
      navbar.classList.add('bg-opacity-100');
    } else {
      navbar.classList.remove('bg-opacity-100');
      navbar.classList.add('bg-opacity-10');
    }
});