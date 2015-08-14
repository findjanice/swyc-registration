var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
