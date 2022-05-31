const Produto = require("../models/produtos");

const produtoController = {
  // Mostrar a página inicial dos produtos
  index: (req, res) => {
    const produtos = Produto.findAll();
    console.log(produtos);
    return res.render(
      "adm/produtos/index",
      { title: "Produtos" },
      { produtos }
    );
  },

  //Mostrar a página para cadastar um produto
  create: (req, res) => {},

  //Realiza o cadastro de um novo produto no banco de dados
  store: (req, res) => {},

  //Exibe a página de detalhes de um produto
  show: (req, res) => {},

  //Exibe a página para editar os dados do produto
  edit: (req, res) => {},

  //Atualiza os dados do produto no banco de dados
  update: (req, res) => {},

  //Exclui um produto do banco de dados
  destroy: (req, res) => {},
};

module.exports = produtoController;
