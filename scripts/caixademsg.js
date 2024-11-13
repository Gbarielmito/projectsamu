function toggleChat() {
    const chatboxSupport = document.querySelector('.chatbox__support');
    if (!chatboxSupport) {
        console.error("Elemento .chatbox__support não encontrado.");
        return;
    }
    
    function displayDataInChatbox() {
        // Adicione aqui a lógica para exibir os dados no chatbox
        console.log("Exibindo dados no chatbox.");
    }
    chatboxSupport.style.display = chatboxSupport.style.display === 'none' || chatboxSupport.style.display === '' ? 'flex' : 'none';
    
    if (chatboxSupport.style.display === 'flex') {
        if (typeof displayDataInChatbox === 'function') {
            displayDataInChatbox(); // Chama a função para exibir os dados no chatbox
        } else {
            console.error("Função displayDataInChatbox não definida.");
        }
    }
}

function cancelarEmergencia() {
    alert("Chamado de emergência cancelado.");
    const chatboxSupport = document.querySelector('.chatbox__support');
    if (chatboxSupport) {
        chatboxSupport.style.display = 'none';
    } else {
        console.error("Elemento .chatbox__support não encontrado.");
    }
}