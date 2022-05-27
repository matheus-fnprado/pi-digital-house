const homeController = {
    favoritos: (req, res) => {
        res.render('home/favoritos');
    },
    index: (req, res) => {
        res.render('home/index');
    },
    carrinho: (req, res) => {
        res.render('home/meucarrinho');
    },
    pagamento: (req, res) => {
        res.render('home/pagamento');
    },
    perfil: (req, res) => {
        res.render('home/perfil');
    },
    politicas: (req, res) => {
        res.render('home/politica');
    },
    produtos: (req, res) => {
        res.render('home/produtos');
    },
    quemsomos: (req, res) => {
        res.render('home/quemsomos');
    },
    segmentos: (req, res) => {
        res.render('home/segmentos');
    },
    termos: (req, res) => {
        res.render('home/termos');
    }
}


module.exports = homeController;