//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var stripe = require('stripe')('sk_test_Ns26RNDadYy1USJuPMbjalcS');
var passport = require('passport');
// var BasicStrategy = require('passport-http').BasicStrategy;
var LocalStrategy = require("passport-local").Strategy;
var app = express();
var session = require('express-session');
var router = express.Router();

//controllers

var userCtrl = require('./controller/userCtrl');
var registrationCtrl = require('./controller/registrationCtrl');
var stripeCtrl = require('./controller/stripeCtrl');
var authCtrl = require('./controller/authCtrl')

//model

var User = require('./models/user')

//passport
passport.use(new LocalStrategy(
  function(username, password, callback) {
    console.log('this is username', username);
    console.log('this is password', password);
    User.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        return callback(err);
      }

      // No user found with that username
      if (!user) {
        return callback(null, false);
      }

      // Make sure the password is correct
      user.verifyPassword(password, function(err, isMatch) {
        if (err) {
          return callback(err);
        }

        // Password did not match
        if (!isMatch) {
          return callback(null, false);
        }

        // Success
        return callback(null, user);
      });
    });
  }
));

//SERIALIZING
//reads CURD keys on the browser and server
passport.serializeUser(function(user, done) {
  console.log("userfound", done);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
  secret: "iknowwhomibeleive",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(cors());


//stripe

app.post('/api/payment', stripeCtrl.makePayment);

//end points

router.route('/api/user')
  .post(userCtrl.create)
  .get(authCtrl.isAuthenticated, userCtrl.read);
//registration end point
router.route('/api/registration')
  .post(authCtrl.isAuthenticated, registrationCtrl.create)
  .get(authCtrl.isAuthenticated, registrationCtrl.read);

router.route('/api/registration/:id')
  .get(authCtrl.isAuthenticated, registrationCtrl.readId)
  .put(authCtrl.isAuthenticated, registrationCtrl.update)
  .delete(authCtrl.isAuthenticated, registrationCtrl.delete);

//passport stuff


app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    console.log('this is login', user);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect(302, '/#/swyc');
    }
    req.logIn(user, function(err) {
      console.log('is logIn', user);
      if (err) {
        return next(err);
      }
      return res.redirect(302, '/#/register');
    });
  })(req, res, next);
});

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
