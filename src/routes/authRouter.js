const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");
const isLogin = require("../middlewares/isLogin");
const isAdmin = require("../middlewares/isAdmin");

router.use(isLogin);
router.use(isAdmin);
router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login);
router.get("/cadastrar", AuthController.showCadastrar);
router.post("/cadastrar", AuthController.store);
router.get("/logout", AuthController.logout);

module.exports = router;
