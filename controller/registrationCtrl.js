var Registration = require('../models/registration');

module.exports = {
  create: function(req, res) {
    var newRegistration = new Registration(req.body);
    newRegistration.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
    });
  },

  read: function(req, res) {
    console.log('req.query inside registrationCtrl:', req.query);
    Registration.find(req.query).exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

  //end module.exports
}
