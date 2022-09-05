const { Produto, Categoria } = require("../models");

const produtoController = {
  // Mostrar a página inicial dos produtos
  index: async (req, res) => {
    const produtos = await Produto.findAll();
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
    const { nome, descricao, preco, ativo, categoria_id } = req.body;
    const produtos = {
      nome,
      descricao,
      imagem: req.file.filename,
      preco: parseFloat(preco),
      categoria_id: parseInt(categoria_id),
      ativo: ativo == "on" ? 1 : 0,
    }

    await Produto.create(produtos);

    console.log(req.body)

    return res.redirect("/adm/produtos/index");
  },

  //Exibe a página de detalhes de um produto
  show: async (req, res) => {
    const { id } = req.params;

    const produtos = await Produto.findByPk(id);
    if (!produtos) {
      return res.send("Produto não encontrado");
    }
    return res.render("adm/produtos/detalhesProduto", {
      title: "Detalhes do produto",
      produtos,
    });
  },

  //Exibe a página para editar os dados do produto
  edit: async (req, res) => {
    const { id } = req.params;
    const produtos = await Produto.findByPk(id);
    if (!produtos) {
      return res.send("Produto não encontrado");
    }
    return res.render("adm/produtos/editarProduto", {
      produtos,
      title: "Editar produto",
    });
  },

  //Atualiza os dados do produto no banco de dados
    update: async (req, res) => {
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

    await Produto.update({
        nome: nome, 
        descricao: descricao,
        preco: preco,
        imagem: imagem
      }, 
      { 
        where: { id: id } 
      }
      );
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
