<?php
// database.php
try {
    $db = new PDO('sqlite:emergencias.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Criação da tabela de emergências, se não existir
    $db->exec("CREATE TABLE IF NOT EXISTS emergencias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        ocorrencia TEXT,
        local TEXT,
        data_hora TEXT
    )");
} catch (PDOException $e) {
    echo "Erro ao conectar ao banco de dados: " . $e->getMessage();
}
?>

<?php
include 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $ocorrencia = $_POST['ocorrencia'];
    $local = $_POST['local'];
    $dataHora = date('Y-m-d H:i:s');

    // Insere a emergência no banco de dados
    $stmt = $db->prepare("INSERT INTO emergencias (nome, ocorrencia, local, data_hora) VALUES (:nome, :ocorrencia, :local, :data_hora)");
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':ocorrencia', $ocorrencia);
    $stmt->bindParam(':local', $local);
    $stmt->bindParam(':data_hora', $dataHora);

    if ($stmt->execute()) {
        echo "Emergência salva com sucesso!";
    } else {
        echo "Erro ao salvar a emergência.";
    }
}
?>

<?php
include 'database.php';

// Consulta as emergências no banco de dados
$stmt = $db->query("SELECT * FROM emergencias ORDER BY data_hora DESC");
$emergencias = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($emergencias as $emergencia) {
    echo "<div class='emergency-item'>";
    echo "<strong>Nome:</strong> " . htmlspecialchars($emergencia['nome']) . "<br>";
    echo "<strong>Ocorrência:</strong> " . htmlspecialchars($emergencia['ocorrencia']) . "<br>";
    echo "<strong>Local:</strong> " . htmlspecialchars($emergencia['local']) . "<br>";
    echo "<strong>Data e Hora:</strong> " . htmlspecialchars($emergencia['data_hora']) . "<br>";
    echo "</div><hr>";
}
?>