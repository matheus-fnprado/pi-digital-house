const { Produto } = require("../models");

async function findAllProdutos() {
    const produtos = await Produto.findAll()

    return console.log(produtos);
}


findAllProdutos()