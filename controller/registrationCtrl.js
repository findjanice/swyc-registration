var Registration = require('../models/registration');


module.exports = {
  create: function(req, res) {
    var newRegistration = new Registration(req.body);
    console.log('this is req.body', req.body);
    newRegistration.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
    });
  },

  read: function(req, res) {
    console.log('%%%%%%%%%%%%%%%% req.body', req.body)
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
    console.log('readId', req.params)
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
  update: function(req, res) {
    Registration.findByIdAndUpdate(req.params.id, req.body, function(err,
      result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },


  //end module.exports
}
