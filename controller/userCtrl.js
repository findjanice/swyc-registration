var User = require('../models/user');

module.exports = {
  create: function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
    });
  },

  read: function(req, res) {
    console.log('req.query inside UserCtrl:', req.query);
    User.find(req.query).exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

  //end module.exports
}
