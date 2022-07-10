const isAdmin = (req, res, next) => {
  const { usuario } = req.session;
  if (usuario.tipoUsuario == "admin") {
    return next();
  }
  return res.redirect("/home");
};

module.exports = isAdmin;
