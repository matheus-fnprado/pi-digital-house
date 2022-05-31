// responsavel por realizar as operações de CRUD no banco de dados
const fs = require("fs");
const { v4: geradorDeId } = require("uuid");
const path = require("path");
const database = path.resolve("src", "database", "db.json");

function open() {
  let content = fs.readFileSync(database, "utf8");
  const db = JSON.parse(content); // de texto json para js
  return db;
}

function store(db) {
  content = JSON.stringify(db, null, 4); // de js para texto json
  fs.writeFileSync(database, content, "utf8");
}

const Produto = {
  findAll: () => {
    const db = open();
    return db.produtos;
  },
  findById: (id) => {
    const db = open();
    const produto = db.produtos.find((produto) => produto.id == id);
    return produto;
  },
  save: (produto) => {
    const db = open();
    produto.id = geradorDeId();
    db.produtos.push(produto);
    store(db);
  },
  update: (id, produtoAtualizado) => {
    const db = open();
    const index = db.produtos.findIndex((produto) => produto.id == id);
    db.produtos[index] = produtoAtualizado;
    store(db);
  },
  delete: (id) => {
    const db = open();
    const index = db.produtos.findIndex((produto) => produto.id == id);
    db.produtos.splice(index, 1);
    store(db);
  },
};

module.exports = Produto;
