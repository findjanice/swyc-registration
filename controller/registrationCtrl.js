var Registration = require('../models/registration');


module.exports = {
  create: function(req, res) {
    var newRegistration = new Registration(req.body);
    newRegistration.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
    });
  },

  // update: function(req, res) {
  //   registration.update(req.query, req.body.paid, function(err, result) {
  //     if (err) res.status(500).json(err);
  //     else res.json(result);
  //   });
  // },

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
  }


  //end module.exports
}
