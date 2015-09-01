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
      .find({
        regtype: 'Lodge'
      })
      .populate('attendee')
      // Registration.find(req.query)
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
  },
  read: function(req, res) {
    console.log('%%%%%%%%%%%%%%%% req.body', req.body)
    Registration
      .findOne({
        _id: req._id
      })
      // Registration.find(req.query)
      .exec(function(err, result) {
        console.log(res.attendee)
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
