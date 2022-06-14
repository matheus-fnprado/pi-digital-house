const Produto = require("../models/produtos");

const produtoController = {
  // Mostrar a página inicial dos produtos
  index: (req, res) => {
    const produtos = Produto.findAll();
    console.log(produtos);
    return res.render("/produtos/index", { title: "Produtos" }, { produtos });
  },

  //Mostrar a página para cadastar um produto
  create: (req, res) => {
    return res.render("adm/produtos/cadastroProduto", {
      title: "Cadastrando Produto",
    });
  },

  //Realiza o cadastro de um novo produto no banco de dados
  store: (req, res) => {
    const { nome, descricao, imagem, preco, ativo } = req.body;
    const produtos = {
      nome,
      descricao,
      imagem,
      preco,
      ativo: ativo == "on" ? true : false,
    };
    Produto.save(produtos);
    return res.redirect("/adm/produtos");
  },

  //Exibe a página de detalhes de um produto
  show: (req, res) => {
    const { id } = req.params;
    const produtos = Produto.findById(id);
    if (!produtos) {
      return res.send("Produto não encontrado");
    }
    return res.render(
      "adm/produtos/detalhesProduto",
      { title: "Detalhes do produto" },
      { produto }
    );
  },

  //Exibe a página para editar os dados do produto
  edit: (req, res) => {
    const { id } = req.params;
    const produtos = Produto.findById(id);
    if (!produtos) {
      return res.send("Produto não encontrado");
    }
    return res.render("adm/produtos/editarProduto", { produto });
  },

  //Atualiza os dados do produto no banco de dados
  update: (req, res) => {
    const { id } = req.params;
    const { nome, descricao, imagem, preco, ativo } = req.body;
    const produtos = {
      id,
      nome,
      descricao,
      imagem,
      preco,
      ativo: ativo ? true : false,
    };
    Produto.update(id, produtos);
    return res.redirect("/adm/produtos");
  },

  //Exclui um produto do banco de dados
  destroy: (req, res) => {
    const { id } = req.params;
    Produto.delete(id);
    return res.redirect("/adm/produtos");
  },
};

module.exports = produtoController;
