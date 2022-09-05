const isLogin = (req, res, next) => {
  if (!req.session.cliente) {
    return res.redirect("/meusdados");
  }
  res.locals.cliente = req.session.cliente;
  console.log(req.session.cliente);
  return next();
};

module.exports = isLogin;
