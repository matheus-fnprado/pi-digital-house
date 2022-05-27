const express = require("express");
// const methodOverride = require("methode-override");
const app = express();
const homeRouter = require("./src/routes/homeRouter");
const loginRouter = require("./src/routes/loginRouter");
const produtosRouter = require("./src/routes/produtosRouter");
const path = require("path");
const port = 3000;

// app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // responsavel pela conversão do inputs para json ou js

app.use(homeRouter);
app.use(loginRouter);
app.use(produtosRouter);

app.listen(port, () => console.log("Servidor rodando na porta:" + port));
