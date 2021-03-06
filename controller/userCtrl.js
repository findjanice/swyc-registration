var User = require('../models/user');

var newUserId;

module.exports = {
  create: function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      newUserId = result._id;
      if (err) return res.status(500).send(err);
      res.send(result)
    });
  },
  read: function(req, res) {
    User.find(req.query).exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    User.find(req.params.id, req.body, function(err,
      result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  //end module.exports
}
