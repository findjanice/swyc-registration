var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  role: {
    type: String,
    enum: ['administrator', 'attendee'],
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
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



userSchema.pre('save', function(callback) {
  var user = this;
  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

// Password match
userSchema.methods.verifyPassword = function(password, cb) {
  var user = this;
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//end of userSchema

module.exports = mongoose.model('User', userSchema);
