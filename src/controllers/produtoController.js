const { Produto, Categoria } = require("../models");

const produtoController = {
  // Mostrar a página inicial dos produtos
  index: (req, res) => {
    const produtos = Produto.findAll();
    console.log(produtos);
    return res.render("adm/produtos/index", { title: "Produtos", produtos });
  },

  //Mostrar a página para cadastar um produto
  create: async (req, res) => {
    const categorias = await Categoria.findAll();
    return res.render("adm/produtos/cadastroProduto", {
      title: "Cadastrando Produto", categorias
    });
  },

  //Realiza o cadastro de um novo produto no banco de dados
  store: async (req, res) => {
<<<<<<< HEAD
    const { nome, descricao, preco, ativo, categoria_id } = req.body;
    const produtos = {
=======
    const { nome, descricao, preco, ativo } = req.body;
    const produto = {
>>>>>>> 8d64927b157d9853fe909f621072bcb55c6afd80
      nome,
      descricao,
      imagem: req.file.filename,
      preco,
      categoria_id,
      ativo: ativo == "on" ? true : false,
    };
<<<<<<< HEAD
    await Produto.create(produtos);
=======
   await Produto.create(produto);
>>>>>>> 8d64927b157d9853fe909f621072bcb55c6afd80
    return res.redirect("/adm/produtos");
  },

  //Exibe a página de detalhes de um produto
  show: (req, res) => {
    const { id } = req.params;
    const produtos = Produto.findById(id);
    if (!produtos) {
      return res.send("Produto não encontrado");
    }
    return res.render("adm/produtos/detalhesProduto", {
      title: "Detalhes do produto",
      produtos,
    });
  },

  //Exibe a página para editar os dados do produto
  edit: (req, res) => {
    const { id } = req.params;
    const produtos = Produto.findById(id);
    if (!produtos) {
      return res.send("Produto não encontrado");
    }
    return res.render("adm/produtos/editarProduto", {
      produtos,
      title: "Editar produto",
    });
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
