const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

const AuthController = {
  showLogin: (req, res) => {
    return res.render("home/login");
  },

  showCadastrar: (req, res) => {
    return res.render("home/cadastro");
  },

  store: (req, res) => {
    const { nome, email, senha } = req.body;
    const hash = bcrypt.hashSync(senha, 10);
    const verificaSeCadastrado = Usuario.findOne(email);

    if (verificaSeCadastrado) {
      return res.render("home/cadastro", {
        error: "Nao foi possivel realizar o cadastro",
      });
    }
    const usuario = {
      nome,
      email,
      senha: hash,
    };

    Usuario.create(usuario);

    return res.redirect("/login");
  },

  login: (req, res) => {
    const { email, senha } = req.body;
    const usuario = Usuario.findOne(email);
    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return res.render("home/login", {
        error: "Email ou senha estao incorretor ou nao existe.",
      });
    }
    req.session.usuario = usuario;
    return res.redirect("/", { usuario });
  },
  logout: (req, res) => {
    req.session.destroy(function (err) {});
    return res.redirect("/login");
  },
};

module.exports = AuthController;
