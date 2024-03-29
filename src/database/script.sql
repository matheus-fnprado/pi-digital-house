-- Active: 1655943606363@@127.0.0.1@3306@pi_digital_house
DROP DATABASE IF EXISTS pi_digital_house;

CREATE DATABASE pi_digital_house;

USE pi_digital_house;

CREATE TABLE administradores (
    id int (10) PRIMARY KEY auto_increment not null,
    nome VARCHAR (100) not null,
    senha VARCHAR (200) not null,
    email VARCHAR (100) not null
);

CREATE TABLE categorias (
    id INT (10) PRIMARY KEY auto_increment NOT NULL,
    nome VARCHAR (100) NOT NULL
);

CREATE TABLE produtos (
    id int (10) PRIMARY KEY auto_increment not null,
    nome VARCHAR (100) NOT NULL,
    preco DECIMAL (6, 2) NOT NULL,
    descricao TEXT,
    imagem VARCHAR (200) NOT NULL,
    ativo TINYINT NOT NULL,
    categoria_id INT (10) NOT NULL,
    FOREIGN KEY (categoria_id) references categorias (id)
);

CREATE TABLE clientes (
    id INT (10) PRIMARY KEY auto_increment NOT NULL,
    nome VARCHAR (200) NOT NULL,
    cpf VARCHAR (15) NOT NULL,
    data_nascto_cliente DATE NOT NULL,
    email VARCHAR (100) NOT NULL,
    celular VARCHAR (20) NOT NULL,
    sexo CHAR(1) NOT NULL,
    senha VARCHAR(200) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado CHAR(2) NOT NULL,
    bairro VARCHAR (100) NOT NULL,
    cep VARCHAR (8) NOT NULL,
    rua VARCHAR (200) NOT NULL,
    numero INTEGER NOT NULL,
    complemento TEXT 
);

USE pi_digital_house;

CREATE TABLE pedidos (
    id int PRIMARY KEY auto_increment not null,
    id_cliente int not null,
    total_valor DECIMAL (6, 2) NOT NULL,
    data TIMESTAMP,
    FOREIGN KEY (id_cliente) references clientes(id)
);

CREATE TABLE pedidos_produtos (
    id_produto int NOT NULL,
    id_pedido int NOT NULL,
    FOREIGN KEY (id_produto) references produtos (id),
    FOREIGN KEY (id_pedido) references pedidos (id)
);