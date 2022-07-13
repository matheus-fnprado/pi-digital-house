const isLogin = (req, res, next) => {
  if (!req.session.usuario) {
    return res.redirect("/meusdados");
  }
  res.locals.usuario = req.session.usuario;
  console.log(req.session.usuario)
  return next();
};

module.exports = isLogin;
