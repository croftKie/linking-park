exports.getUsersName = (req, res) => {
  res.render("index", { name: req.params.myName });
};

exports.getHome = (req, res) => {
  res.render("home");
};

exports.getLinksView = (req, res) => {
  res.render("links");
};

exports.getGameView = (req, res) => {
  res.render("game");
};
