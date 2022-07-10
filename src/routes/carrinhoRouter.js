const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const isLogin = require("../middlewares/isLogin");
const isAdmin = require("../middlewares/isAdmin");

router.use(isLogin);
router.use(isAdmin);
router.get('/carrinho', CarrinhoController.showCart);
router.post('/carrinho/adicionar', CarrinhoController.addCart);
router.delete('/carrinho/:id/remover', CarrinhoController.removeCart);

module.exports = router;