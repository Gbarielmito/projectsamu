<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "emergencia_samu";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "SELECT nome_paciente, ocorrencia, locall, data_chamado FROM chamados ORDER BY data_chamado DESC LIMIT 5";
$result = $conn->query($sql);

$emergencias = "";
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $emergencias .= "<div class='messages__item messages__item--operator'>
                            <strong>Nome:</strong> " . $row['nome_paciente'] . "<br>
                            <strong>Ocorrência:</strong> " . $row['ocorrencia'] . "<br>
                            <strong>Local:</strong> " . $row['locall'] . "<br>
                            <strong>Data:</strong> " . $row['data_chamado'] . "
                         </div>";
    }
} else {
    $emergencias = "<div class='messages__item messages__item--operator'>Nenhuma solicitação encontrada.</div>";
}

$conn->close();
echo $emergencias;
?>
