document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (event) {
     event.preventDefault();
     
     const email = document.getElementById('email').value;
     const nome = document.getElementById('nome').value;
     const mensagem = document.getElementById('mensagem').value;
 
     const formData = {
       nome: nome,
       email: email,
       mensagem: mensagem
     };
 
     const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
     storedMessages.push(formData);
 
     localStorage.setItem('messages', JSON.stringify(storedMessages));
 
     form.reset();
     window.location.reload();
  });
 });
 

document.addEventListener('DOMContentLoaded', function () {
  const messages = JSON.parse(localStorage.getItem('messages'));
  
  if (messages && messages.length > 0) {
    const messagesButton = document.getElementById('messagesButton');
    messagesButton.style.display = 'block';
    
    messagesButton.addEventListener('click', function () {
      window.location.href = 'mensagens.html';
    });
  }
});
