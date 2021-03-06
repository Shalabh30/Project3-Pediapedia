const db = require("../models");

module.exports = { 
    create: function (req, res) {
        db.Profile
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      },
      update: function (req, res) {
        db.Profile
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      },
      delete: function (req, res) {
        db.Profile
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      }
};