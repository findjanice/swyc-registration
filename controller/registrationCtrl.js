var Registration = require('../models/registration');


module.exports = {
  create: function(req, res) {
    console.log('this is registrationCtrl', req.body);
    var newRegistration = new Registration(req.body);
    newRegistration.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
    });
  },

  read: function(req, res) {
    Registration
      .find()
      .populate('attendee')
      // Registration.find(req.query)
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
  },
  readId: function(req, res) {
    Registration
      .findOne({
        _id: req.params.id
      })
      // Registration.find(req.query)
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
  },

  delete: function(req, res) {
    Registration.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },


  update: function(req, res) {
    Registration.findByIdAndRemove(req.params.id, function(err,
      result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },



  //end module.exports
}
