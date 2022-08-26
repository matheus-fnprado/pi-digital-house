const { Cliente } = require("../models");

async function findAllClientes() {
    const clientes = await Cliente.findAll()

    return console.log(clientes);
}


findAllClientes()