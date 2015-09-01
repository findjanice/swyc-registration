//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var stripe = require('stripe')('sk_test_Ns26RNDadYy1USJuPMbjalcS');
var app = express();


//controllers

var userCtrl = require('./controller/userCtrl');
var registrationCtrl = require('./controller/registrationCtrl');
var stripeCtrl = require('./controller/stripeCtrl');

//middleware

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(cors());


//stripe

app.post('/api/payment', stripeCtrl.makePayment);

//end points
//user end point
app.post('/api/user', userCtrl.create);
app.get('/api/user', userCtrl.read);
//registration end point
app.post('/api/registration', registrationCtrl.create);
app.get('/api/registration', registrationCtrl.read);
app.get('/api/registration/:id', registrationCtrl.read);
app.put('/api/registration/:id', registrationCtrl.update);
// app.delete('api/registration', registrationCtrl.delete);
//nodemailer

app.post('/contact', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'findjanice@gmail.com',
      pass: 'zylgfngbbavbgafb'
    }
  });

  console.log('SMTP Configured', req.body);

  var mailOptions = {
    from: req.body.name,
    sender: req.body.email,
    replyTo: req.body.email,
    to: 'findjanice@gmail.com',
    subject: req.body.subject,
    text: req.body.message
  };

  console.log('Sending Mail', mailOptions);
  transporter.sendMail(mailOptions, function(error, info) {
    //   //Email not sent
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
      return;
    }

    // Email sent
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
  });
});
//end nodemailer

//connections
var port = 3000;
var mongoUri = 'mongodb://localhost:27017/swyc-registration';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to mongodb @', mongoUri);
})



var server = app.listen(process.env.PORT || port, function() {
  console.log('Server up and running at', server.address().port);
});
