var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 20
  },
  lastname: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 20
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true
  },
  age: {
    type: String,
    enum: ['0-3 years old', '4-12 years old', '13 and above'],
    required: 'true'
  }
})

//end of userSchema

module.exports = mongoose.model('User', userSchema);
