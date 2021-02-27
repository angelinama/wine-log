const db = require("../models");

module.exports = (app) => {
  app.get("/api/users", (req, res) => {
    db.User.findAll({}).then((dbUser) => {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });

  app.post("/api/users", (req, res) => {
    console.log("Hello");
    db.User.create(req.body).then((dbUser) => res.json(dbUser));
  });

  app.delete("/api/users/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });
};