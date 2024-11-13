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
};

request.onerror = function(event) {
    console.log("Erro ao abrir o banco de dados: ", event.target.error);
};