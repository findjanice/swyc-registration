module.exports = {
  create: function(req, res) {
    var stripeToken = req.body.stripeToken;
    var amount = 1000;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
      },
      function(err, charge) {
        if (err) {
          res.send(500, err);
        } else {
          res.send(204);
        }
      });
  }
}
