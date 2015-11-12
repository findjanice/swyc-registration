//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var stripe = require('stripe')('sk_test_Ns26RNDadYy1USJuPMbjalcS');
var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var app = express();
var session = require('express-session');
var router = express.Router();
var uriUtil = require('mongodb-uri');
var config = require('./config.js');
var portNum = config.portNum;

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
app.use(express.static(__dirname + '/public'));
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
  .post(registrationCtrl.create)
  .get(registrationCtrl.read);

router.route('/api/registration/:id')
  .get(registrationCtrl.readId)
  .put(registrationCtrl.update)
  .delete(registrationCtrl.delete);

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
      return res.send(user);
    });
  })(req, res, next);
});

//nodemailer

app.post('/contact', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
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
// process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 80;
//
// var mongodbUri =
//   "mongodb://janice:adea@ds053894.mongolab.com:53894/swycproject";
// var mongooseUri = uriUtil.formatMongoose(mongodbUri);

// mongoose.connect(port);
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
// mongoose.connection.once('open', function() {
//   console.log('Connected to mongodb @', mongodbUri);
// })


var server = app.listen(portNum, function() {
  console.log('Server up and running at', server.address().port);
});
