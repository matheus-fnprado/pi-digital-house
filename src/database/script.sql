DROP DATABASE IF EXISTS pi_digital_house;

CREATE DATABASE pi_digital_house;

USE pi_digital_house;

CREATE TABLE administradores (
    id int (10) PRIMARY KEY auto_increment not null,
    nome VARCHAR (100) not null,
    senha VARCHAR (200) not null,
    email VARCHAR (100) not null
);

CREATE TABLE categorias_produtos (
    id INT (10) PRIMARY auto_increment KEY NOT NULL,
    nome VARCHAR (100) NOT NULL
);

CREATE TABLE produtos (
    id int (10) PRIMARY KEY auto_increment not null,
    nome VARCHAR (100) NOT NULL,
    preco DECIMAL (6, 2) NOT NULL,
    descricao TEXT,
    imagem VARCHAR (200) NOT NULL,
    ativo CHAR(1) NOT NULL,
    categoria_id INT (10) NOT NULL,
    FOREIGN KEY (categoria_id) references categorias_produtos (id_categoria)
);

CREATE TABLE clientes (
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

CREATE TABLE pedidos (
    id int PRIMARY KEY auto_increment not null,
    id_cliente int not null,
    total_valor DECIMAL (6, 2) NOT NULL,
    data TIMESTAMP,
    FOREIGN KEY (id_cliente) references clientes (cliente_id)
);

CREATE TABLE pedidos_produtos (
    id_produto int NOT NULL,
    id_pedido int NOT NULL,
    FOREIGN KEY (id_produto) references produtos (produto_id),
    FOREIGN KEY (id_pedido) references pedidos (pedido_id)
);