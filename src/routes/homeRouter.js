const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const isLogin = require('../middlewares/isLogin')

router.get("/favoritos", homeController.favoritos);
router.get("/", homeController.index);
router.get("/home", homeController.index);
router.get("/meusdados", homeController.meusdados);
router.get("/pagamento", homeController.pagamento);
router.get("/perfil", isLogin, homeController.perfil);
router.get("/politicas", homeController.politicas);
router.get("/produtos/:id", homeController.produtos);
router.get("/quemsomos", homeController.quemsomos);
router.get("/segmentos", homeController.segmentos);
router.get("/suporte", homeController.suporte);
router.get("/termos", homeController.termos);
router.get("/categorias", homeController.categorias);

module.exports = router;
