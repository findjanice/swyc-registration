var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registrationSchema = new Schema({
  regtype: {
    type: String,
    required: true
  },
  room: {
    type: String
  },

  meal: {
    type: String
  },
  regpass: {
    type: String
  },
  basecost: {
    type: Number,
    min: 0
  },
  roommate: {
    type: 'String',
    maxlength: 40
  },
  shirttype: {
    type: String
  },
  total: {
    type: Number,
    min: 0
  },
  payment: {
    type: String,
    enum: ['Credit Card', 'Cash', 'Check', 'No Payment', 'Sabbath',
      'Paypal'
    ]
  },
  paid: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  attendee: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  checkin: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String
  }
  //end registerSchema
})

module.exports = mongoose.model('Registration', registrationSchema);
