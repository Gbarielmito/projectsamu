CREATE DATABASE IF NOT EXISTS emergencia_samu;
USE emergencia_samu;

CREATE TABLE IF NOT EXISTS chamados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_paciente VARCHAR(255) NOT NULL,
    ocorrencia TEXT NOT NULL,
    locall VARCHAR(255) NOT NULL,
    photo_path VARCHAR(255),
    video_path VARCHAR(255),
    data_chamado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);