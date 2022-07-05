const express = require("express");
const methodOverride = require("method-override");
const app = express();
const homeRouter = require("./src/routes/homeRouter");
const produtosRouter = require("./src/routes/produtosRouter");
const authRouter = require("./src/routes/authRouter");
// const session = require("express-session");
const path = require("path");
const port = 3000;

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // responsavel pela conversão do inputs para json ou js

// app.use(
//   session({
//     secret: "meu primeiro ecommerce",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.use(homeRouter);
app.use(authRouter);
app.use("adm/produtos", produtosRouter);

app.use((req, res, next) => {
  return res
    .status(404)
    .render("home/error404.ejs", { title: "Pagina nao encontrada" });
});

app.listen(port, () => console.log("Servidor rodando na porta:" + port));
