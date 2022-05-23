const homeController = {
    index: (req, res) => {
        res.render('home/index');
    },
    favoritos: (req, res) => {
        res.render('home/favoritos');
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
        res.render('home/quemsomos')
    },
    segmentos: (req, res) => {
        res.render('home/segmentos');
    },
    
}


module.exports = homeController;