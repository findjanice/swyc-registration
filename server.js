//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();

//controllers

var userCtrl = require('./controller/userCtrl');
var registrationCtrl = require('./controller/registrationCtrl');
//middleware

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

//end points
//user end point
app.post('/user', userCtrl.create);
app.get('/user', userCtrl.read);
//registration end point
app.post('/registration', registrationCtrl.create);
app.post('/registration', registrationCtrl.read);

//connections
var port = 3000;
var mongoUri = 'mongodb://localhost:27017/swyc-registration';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to mongodb @', mongoUri);
})

var server = app.listen(port, function() {
  console.log('Server up and running at', server.address().port);
})
