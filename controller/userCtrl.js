var User = require('../models/user');

var newUserId;

module.exports = {
  create: function(req, res) {
    console.log('this is userCtrl', req.body);
    var newUser = new User(req.body);
    console.log('this is userCtrl newUser', newUser);
    newUser.save(function(err, result) {
      console.log('this is userCtrl err', err);
      console.log('this is userCtrl result', result);
      newUserId = result._id;
      console.log(newUserId);
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
