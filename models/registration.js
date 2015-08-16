var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registrationSchema = new Schema({
  regtype: {
    type: String,
    enum: ['Lodge', 'Cabin', 'Tent', 'RV', 'Meals', 'DayPass'],
    required: true
  },
  cost: {
    type: Number,
    required: true,
    min: 0,
    required: true
  },
  roommate: {
    type: 'String',
    maxlength: 25
  },
  preorder: {
    type: Boolean,
    order: false,
  },
  payment: {
    type: String,
    enum: ['credit card', 'cash', 'check', 'no payment'],
    required: true
  },
  paid: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
  //end registerSchema
})

module.exports = mongoose.model('Registration', registrationSchema);
