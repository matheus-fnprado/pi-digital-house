const { Categoria } = require("../models");

async function findAllCategorias() {
    const categorias = await Categoria.findAll()

    return console.log(categorias);
}


findAllCategorias()