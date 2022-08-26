const { Administrador } = require("../models");

async function findAllAdministrador() {
    const administradores = await Administrador.findAll()

    return console.log(administradores);
}


findAllAdministrador()