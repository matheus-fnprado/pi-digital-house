const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/favoritos', homeController.favoritos)/
router.get('/', homeController.index);
router.get('/perfil', homeController.perfil);
router.get('/politicas', homeController.politicas);
router.get('/produtos', homeController.produtos);
router.get('/quemsomos', homeController.quemsomos);
router.get('/segmentos', homeController.segmentos);
router.get('/termos', homeController.termos);


module.exports = router;