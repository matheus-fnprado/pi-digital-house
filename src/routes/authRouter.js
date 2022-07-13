const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/login", AuthController.login);
router.post("/cadastrar", AuthController.store);
router.get("/logout", AuthController.logout);

module.exports = router;
