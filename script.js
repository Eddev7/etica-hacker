// Adiciona um evento de scroll à janela
window.addEventListener('scroll', function() {
    // Verifica se o usuário chegou ao final da página
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Cria um novo botão
      var button = document.createElement('button');
      button.innerHTML = 'CLIQUE AQUI';
        button.style.border = '0px';
        button.style.fontSize = '4rem';
        button.style.padding = '20px';
        button.style.position = 'fixed';
        button.style.bottom = '50%';
        button.style.left = '50%';
        button.style.transform = 'translate(-50%, 50%)';
        button.style.color = '#FFF';
        button.style.backgroundColor = '#00ff1a';
        button.style.borderRadius = '10px';
      // Define o link para onde o botão deve levar
      button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'red';
      });
      button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '#00ff1a';
      });
      button.addEventListener('click', function() {
        window.location.href = 'trap.html';
      });
      // Adiciona o botão ao corpo do documento
      document.body.appendChild(button);
      var closeButton = document.createElement('button');
        closeButton.innerHTML = '&#10005;'; // código HTML para o ícone de fechar (X)
        closeButton.style.position = 'fixed';
        closeButton.style.bottom = '20px';
        closeButton.style.right = '20px';
        closeButton.style.backgroundColor = '#00ff1a';
        closeButton.style.borderRadius = '50%';
        closeButton.style.padding = '10px';
        closeButton.style.fontSize = '18px';
        closeButton.style.border = 'none';
        closeButton.style.boxShadow = '0px 2px 6px rgba(0, 0, 0, 0.3)';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(button);
            document.body.removeChild(closeButton);
        });
        document.body.appendChild(closeButton);
        closeButton.addEventListener('mouseover', function() {
            closeButton.style.backgroundColor = 'red';
          });
          closeButton.addEventListener('mouseout', function() {
            closeButton.style.backgroundColor = '#00ff1a';
          });
    }
  });