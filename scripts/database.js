// Abrir conexão com o banco de dados
let request = indexedDB.open("EmergencyDB", 1);

request.onupgradeneeded = function(event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore("emergencyInfo", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("nome", "nome", { unique: false });
    objectStore.createIndex("ocorrencia", "ocorrencia", { unique: false });
    objectStore.createIndex("local", "local", { unique: false });
    objectStore.createIndex("photo", "photo", { unique: false });
};

request.onsuccess = function(event) {
    let db = event.target.result;

    document.querySelector("button").addEventListener("click", function() {
        let transaction = db.transaction(["emergencyInfo"], "readwrite");
        let objectStore = transaction.objectStore("emergencyInfo");

        let nome = document.getElementById("nome").value;
        let ocorrencia = document.getElementById("ocorrencia").value;
        let local = document.getElementById("local").value;
        let photo = document.getElementById("photo").files[0];

        let data = {
            nome: nome,
            ocorrencia: ocorrencia,
            local: local,
            photo: photo ? photo.name : ""
        };

        let request = objectStore.add(data);

        request.onsuccess = function(event) {
            console.log("Dados salvos com sucesso!");
        };

        request.onerror = function(event) {
            console.log("Erro ao salvar os dados: ", event.target.error);
        };
    });

    // Função para ler os dados do banco de dados
    window.readData = function() {
        let transaction = db.transaction(["emergencyInfo"], "readonly");
        let objectStore = transaction.objectStore("emergencyInfo");

        let request = objectStore.getAll();

        request.onsuccess = function(event) {
            const emergencyRequests = document.getElementById("emergencyRequests");
            emergencyRequests.innerHTML = ''; // Limpar conteúdo anterior

            if (event.target.result.length === 0) {
                emergencyRequests.innerHTML = '<p>Nenhum dado encontrado.</p>';
                return;
            }

            event.target.result.forEach(dado => {
                console.log(dado); // Imprimir dados no console
                const mensagem = document.createElement('div');
                mensagem.className = 'mensagem';
                mensagem.innerHTML = `
                    <p><strong>Nome:</strong> ${dado.nome}</p>
                    <p><strong>Ocorrência:</strong> ${dado.ocorrencia}</p>
                    <p><strong>Local:</strong> ${dado.local}</p>
                    <p><strong>Foto:</strong> ${dado.photo}</p>
                `;
                emergencyRequests.appendChild(mensagem);
            });
        };

        request.onerror = function(event) {
            console.log("Erro ao ler os dados: ", event.target.error);
        };
    };

    // Função para limpar todos os dados do banco de dados
    window.cancelarEmergencia = function() {
        let transaction = db.transaction(["emergencyInfo"], "readwrite");
        let objectStore = transaction.objectStore("emergencyInfo");

        let clearRequest = objectStore.clear();

        clearRequest.onsuccess = function(event) {
            console.log("Todos os dados foram removidos com sucesso!");
            readData(); // Atualizar a exibição dos dados
        };

        clearRequest.onerror = function(event) {
            console.log("Erro ao remover os dados: ", event.target.error);
        };
    };
};

request.onerror = function(event) {
    console.log("Erro ao abrir o banco de dados: ", event.target.error);
};

// Chamar a função readData quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
    readData();
});

function toggleChat() {
    const chatbox = document.querySelector('.chatbox');
    chatbox.classList.toggle('chatbox--active');
    readData(); // Atualizar dados sempre que o chatbox é aberto
}