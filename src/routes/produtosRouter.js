const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");
const path = require("path");
const multer = require("multer");
const isLogin = require("../middlewares/isLogin");
const isAdmin = require("../middlewares/isAdmin");


router.use(isLogin);
router.use(isAdmin);
//Mostra a página inicial dos produtos
router.get("/adm/produtos", produtoController.index);

//Mostra a página para cadastrar um novo produto
router.get("/adm/produtos/cadastroproduto", produtoController.create);

//Mostra a página de detalhes de um Produto
router.get("/adm/produtos/:id", produtoController.show);

//Mostra a página para atualizar dados de um produto
router.get("/adm/produtos/:id/editar", produtoController.edit);

//Envia as informações da página do produto para salvar no banco de dados
router.post("/adm/produtos", produtoController.store);

//Atualiza os dados do produto selecionado no banco de dados
router.put("/adm/produtos/:id", produtoController.update);

//Deleta um produto do banco de dados
router.delete("/adm/produtos/:id", produtoController.destroy);

/* 
    URL Base: http://localhost:3000/{nome_da_rota}
    GET - /produtos - Listar todos os produtos
    GET - /produtos/:id - Listar um produto por ID (/produtos/1)
    POST - /produtos - Criar um novo produto
    PUT - /produtos/:id - Atualizar um produto por ID (/produtos/1)
    DELETE - /produtos/:id - Deletar um produto por ID (/produtos/1)
    ipconfig
*/

module.exports = router;