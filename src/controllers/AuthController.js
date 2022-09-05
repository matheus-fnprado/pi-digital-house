const bcrypt = require("bcryptjs");
const { Cliente } = require("../models");

const AuthController = {
  store: async (req, res) => {
    const { nome, cpf, email, data_nascto_cliente, celular, sexo, senha, cidade, estado, bairro, cep, rua, numero, complemento} = req.body;

    const hash = bcrypt.hashSync(senha, 10);
    const verificaSeCadastrado = await Cliente.findOne({
      where: {
        email: email
      }
      });

    if (verificaSeCadastrado) {
      return res.render("home/meusdados", {
        error: "Não foi possível realizar o cadastro",
      });
    }

    const cliente = {
      nome,
      email,
      senha: hash,
      cpf,
      cep,
      sexo: sexo,
      data_nascto_cliente,
      celular,
      bairro,
      cidade,
      estado,
      rua,
      numero,
      complemento
    };

    await Cliente.create(cliente);
    
    console.log(req.body)
    return res.redirect("/meusdados");
  },

  login: async (req, res) => {
    const { emaillogin, senhalogin } = req.body;
    const cliente = await Cliente.findOne({
      attributes: ['id', 'nome', 'email', 'senha'],
      where: {
        email: emaillogin
      }
      });
   
    if (!cliente || !bcrypt.compareSync(senhalogin, cliente.senha)) {
      return res.render("home/meusdados", {
        error: "Email ou senha estão incorretos ou não existe.",
        title: "Meus Dados",
      });
    }

    req.session.cliente = cliente
    return res.redirect("/perfil");
  },

  logout: (req, res) => {
    req.session.destroy(function (err) {
      // cannot access session here
    });

    return res.redirect("/home");
  },
};

module.exports = AuthController;
