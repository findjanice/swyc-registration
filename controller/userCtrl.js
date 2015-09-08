var User = require('../models/user');

var newUserId;

module.exports = {
  create: function(req, res) {
    console.log('this is userId', req.body);
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      newUserId = result._id;
      console.log(newUserId);
      if (err) return res.status(500).send(err);
      res.send(result)
      console.log('this is send result', result);
    });
  },
  read: function(req, res) {
    User.find(req.query).exec(function(err, result) {
      console.log('this is read result', result);
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
