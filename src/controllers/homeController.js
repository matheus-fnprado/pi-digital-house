const homeController = {
  favoritos: (req, res) => {
    res.render("home/favoritos", { title: "Favoritos" });
  },
  index: (req, res) => {
    res.render("home/index", { title: "Pagina Home" });
  },
  carrinho: (req, res) => {
    res.render("home/meucarrinho", { title: "Meu Carrinho" });
  },
  meusdados: (req, res) => {
    res.render("home/meusdados", { title: "Meus Dados" });
  },
  pagamento: (req, res) => {
    res.render("home/pagamento", { title: "Pagamento" });
  },
  perfil: (req, res) => {
    res.render("home/perfil", { title: "Meu Perfil" });
  },
  politicas: (req, res) => {
    res.render("home/politica", { title: "Políticas de privacidade" });
  },
  produtos: (req, res) => {
    res.render("home/produtos", { title: "Produtos" });
  },
  quemsomos: (req, res) => {
    res.render("home/quemsomos", { title: "Quem somos" });
  },
  segmentos: (req, res) => {
    res.render("home/segmentos", { title: "Segmentos" });
  },
  suporte: (req, res) => {
    res.render("home/suporte", { title: "Suporte" });
  },
  termos: (req, res) => {
    res.render("home/termos", { title: "Termos de uso" });
  },
};

module.exports = homeController;
