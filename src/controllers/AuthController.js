const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

const AuthController = {

  store: (req, res) => {
    const { nomecompleto, emailLogin, cadastropf, senha, cependereco, sexo, datanascimento, telefonecontato } = req.body;
    const hash = bcrypt.hashSync(senha, 10);
    const verificaSeCadastrado = Usuario.findOne(emailLogin);

    if (verificaSeCadastrado) {
      return res.render("home/meusdados", {
        error: "Não foi possível realizar o cadastro",
      });
    }

    const usuario = {
      nome: nomecompleto,
      email: emailLogin,
      senha: hash,
      cpf: cadastropf,
      cep: cependereco,
      sexo: sexo,
      datanasc: datanascimento,
      telefone: telefonecontato
    };

    Usuario.create(usuario);
    console.log(usuario)
    return res.redirect("/meusdados");
  },

  login: (req, res) => {
    const { emailLogin, senhalogin } = req.body;
    const usuario = Usuario.findOne(emailLogin);
    if (!usuario || !bcrypt.compareSync(senhalogin, usuario.senha)) {
      return res.render("home/meusdados", {
        error: "Email ou senha estão incorretos ou não existe.", title: "Meus Dados"
      });
    }

    req.session.usuario = usuario;
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
