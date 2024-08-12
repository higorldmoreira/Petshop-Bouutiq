// Seleciona todos os links dentro da div com a classe 'box-img'
const imageLinks = document.querySelectorAll('.box-img a');

// Seleciona a imagem que será exibida dentro do modal
const modalImage = document.getElementById('modalImage');

// Itera sobre cada link de imagem
imageLinks.forEach(link => {
  // Adiciona um ouvinte de evento de clique para cada link
  link.addEventListener('click', function(event) {
    // Previne o comportamento padrão do link (navegação)
    event.preventDefault();

    // Obtém o atributo 'href' do link, que contém o caminho da imagem
    const imgSrc = this.getAttribute('href');

    // Define o caminho da imagem no elemento de imagem dentro do modal
    modalImage.setAttribute('src', imgSrc);
  });
});
