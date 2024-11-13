function toggleChat() {
    const chatboxSupport = document.querySelector('.chatbox__support');
    chatboxSupport.style.display = chatboxSupport.style.display === 'none' ? 'flex' : 'none';
    if (chatboxSupport.style.display === 'flex') {
      carregarSolicitacoesEmergencia();
    }
}

function toggleChat() {
    const chatboxSupport = document.querySelector('.chatbox__support');
    chatboxSupport.style.display = chatboxSupport.style.display === 'none' || chatboxSupport.style.display === '' ? 'flex' : 'none';
    
    
    if (chatboxSupport.style.display === 'flex') {
        carregarSolicitacoesEmergencia();
    }
}

function cancelarEmergencia() {
    alert("Chamado de emergência cancelado.");
    document.querySelector('.chatbox__support').style.display = 'none';
}

function toggleChat() {
    const chatboxSupport = document.querySelector('.chatbox__support');
    chatboxSupport.style.display = chatboxSupport.style.display === 'none' || chatboxSupport.style.display === '' ? 'flex' : 'none';
}