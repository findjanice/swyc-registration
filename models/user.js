var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  role: {
    type: String,
    enum: ['administrator', 'attendee'],
    required: true
  },
  firstname: {
    type: String,
    maxlength: 20
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 20
  },
  address: {
    type: String,
    lowercase: true
  },
  city: {
    type: String,
    lowercase: true
  },
  state: {
    type: String,
    lowercase: true
  },
  postalCode: {
    type: String,
    lowercase: true
  },
  email: {
    type: String,
    lowercase: true
  },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true
  },
  age: {
    type: String,
    enum: ['0-3 years old', '4-12 years old', '13 and above']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//end of userSchema

module.exports = mongoose.model('User', userSchema);
