const bcrypt = require("bcryptjs");
const { Cliente } = require("../models")

const AuthController = {

  store: (req, res) => {
    const { nomecompleto, emailLogin, cadastropf, senha, cependereco, sexo, datanascimento, telefonecontato } = req.body;
    const hash = bcrypt.hashSync(senha, 10);
    const verificaSeCadastrado = Cliente.findOne(emailLogin);

    if (verificaSeCadastrado) {
      return res.render("home/meusdados", {
        error: "Não foi possível realizar o cadastro",
      });
    }

    const Cliente = {
      nome: nomecompleto,
      email: emailLogin,
      senha: hash,
      cpf: cadastropf,
      cep: cependereco,
      sexo: sexo,
      datanasc: datanascimento,
      telefone: telefonecontato
    };

    Cliente.create(cliente);
    console.log(cliente)
    return res.redirect("/meusdados");
  },

  login: (req, res) => {
    const { emailLogin, senhalogin } = req.body;
    const cliente = Cliente.findOne(emailLogin);
    if (!usuario || !bcrypt.compareSync(senhalogin, cliente.senha)) {
      return res.render("home/meusdados", {
        error: "Email ou senha estão incorretos ou não existe.", title: "Meus Dados"
      });
    }

    req.session.cliente = Cliente;
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
