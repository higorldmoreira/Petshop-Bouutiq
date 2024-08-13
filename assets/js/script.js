// JavaScript para adicionar a classe 'visible' quando o elemento entra na viewport
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.fade-in');

  function checkVisibility() {
      elements.forEach(function(element) {
          var rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
              element.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Executa uma vez no carregamento da página

  // Remove o preloader após o carregamento da página
  window.addEventListener('load', function() {
      document.getElementById('preloader').style.display = 'none';
  });

  // Animação de scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});