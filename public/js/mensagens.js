document.addEventListener('DOMContentLoaded', function () {
  const messagesList = document.getElementById('messagesList');
  const emptyMessagesList = document.getElementById('emptyMessagesList');
  const deleteMessagesButton = document.getElementById('deleteMessagesButton');
  const createMessageButton = document.getElementById('createMessageButton');

  let messages = JSON.parse(localStorage.getItem('messages')) || [];

  function renderMessages() {
    messagesList.innerHTML = ''; 
    if (messages.length === 0) {
      emptyMessagesList.style.display = 'block'; 
      createMessageButton.style.display = 'block'; 
      deleteMessagesButton.style.display = 'none'; 
    } else {

      messages.forEach(function (message) {
        const name = document.createElement('h4');
        name.textContent = `${message.nome} entrou em contato através do email ${message.email}!`;
        const contactMessage = document.createElement('p');
        contactMessage.textContent = `Mensagem: ${message.mensagem}`;
        messagesList.appendChild(name);
        messagesList.appendChild(contactMessage);

      });
      
      deleteMessagesButton.style.display = 'block';
      createMessageButton.style.display = 'none'; 
      emptyMessagesList.style.display = 'none'; 

    }
  }

  renderMessages();

  deleteMessagesButton.addEventListener('click', function () {
    localStorage.removeItem('messages'); 
    messages = []; 
    renderMessages(); 
  });

  createMessageButton.addEventListener('click', function () {
    window.location.href = 'contato.html'; 
  });
});
