const { Pedido } = require("../models");

async function findAllPedidos() {
    const pedidos = await Pedido.findAll()

    return console.log(pedidos);
}


findAllPedidos()