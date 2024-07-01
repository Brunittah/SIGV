<?php
$servername = "localhost"; // ou o IP do seu servidor MySQL
$username = "root"; // Nome de usuário padrão
$password = "bruna2024"; // A senha do usuário root (deixe vazio se não tiver senha)
$dbname = "feedback_db";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Consulta SQL para obter os dados de feedback
$sql = "SELECT id, nome, empresa, ano_cliente, opiniao, data FROM feedbacks";
$result = $conn->query($sql);

// Verifica se há resultados e exibe-os
if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>ID</th><th>Nome</th><th>Empresa</th><th>Ano de Cliente</th><th>Opinião</th><th>Data</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["nome"]. "</td><td>" . $row["empresa"]. "</td><td>" . $row["ano_cliente"]. "</td><td>" . $row["opiniao"]. "</td><td>" . $row["data"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

// Fecha a conexão
$conn->close();
?>
