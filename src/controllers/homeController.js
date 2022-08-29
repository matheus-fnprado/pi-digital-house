const path = require("path");
const fs = require("fs");
const database = path.resolve("src", "database", "db.json");
const { Produto } = require("../models");

const homeController = {
  favoritos: (req, res) => {
    res.render("home/favoritos", { title: "Favoritos" });
  },
  // index: (req, res) => {
  //   let conteudo = fs.readFileSync(database, "utf8");
  //   const db = JSON.parse(conteudo);
  //   res.render("home/index", {
  //     produtos: db.produtos,
  //     title: "Página inicial",
  //   });
  // },
  index: async (req, res) => {
    const produtos = await Produto.findAll()
    return res.render("home/index", { produtos, title:"Pagina Inicial" });
  },

  meusdados: (req, res) => {
    res.render("home/meusdados", { title: "Meus Dados" });
  },
  pagamento: (req, res) => {
    res.render("home/pagamento", { title: "Pagamento" });
  },
  perfil: (req, res) => {
    res.render("home/perfil", { title: "Meu Perfil" });
  },
  politicas: (req, res) => {
    res.render("home/politica", { title: "Políticas de privacidade" });
  },
  produtos: (req, res) => {
    // let conteudo = fs.readFileSync(database, "utf8");
    // const db = JSON.parse(conteudo);

    const { id } = req.params;
    const produto = Produto.findById(id);
    if (!produto) {
      return res.send("Produto não encontrado");
    }
    return res.render("home/produtos", { title: produto.nome, produto });
  },
  quemsomos: (req, res) => {
    res.render("home/quemsomos", { title: "Quem somos" });
  },
  segmentos: (req, res) => {
    // let conteudo = fs.readFileSync(database, "utf8");
    // const db = JSON.parse(conteudo);
    // res.render("home/segmentos", { produtos: db.produtos, title: "Segmentos" });
  },
  suporte: (req, res) => {
    res.render("home/suporte", { title: "Suporte" });
  },
  termos: (req, res) => {
    res.render("home/termos", { title: "Termos de uso" });
  },
  categorias: (req, res) => {
    res.render("home/categorias", { title: "Navegue por categoria" });
  },
};

module.exports = homeController;
