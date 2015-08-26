var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registrationSchema = new Schema({
  regtype: {
    type: String,
    enum: ['Lodge', 'Cabin', 'Tent', 'RV', 'Meals', 'DayPass'],
    required: true
  },
  room: {
    type: String,
    enum: ["Adult - 2 Person Occpancy", "Adult - 3 Person Occupancy",
      "Adult - 4 Person Occupancy", "Child", "Infant - Toddler",
      "Adult - Cabin", "Child - Cabin", "Adult - 2 Nights/Cabin",
      "Child - 2 Nights/Cabin"
    ]
  },

  meal: {
    type: String,
    enum: ["Adult - 3 Meals", "Adult- 2 Meals", "Adult - 1 Meal",
      "Child - 3 Meals", "Child - 2 Meals", "Child - 1 Meal"
    ]
  },
  regpass: {
    type: String,
    enum: ["Adult - No Meals", "Child - No Meals", "Adult - Meals",
      "Child - Meals"
    ]
  },
  // cost: {
  //   type: Number,
  //   required: true,
  //   min: 0
  // },
  roommate: {
    type: 'String',
    maxlength: 40
  },
  preorder: {
    type: Boolean,
    order: false,
  },
  total: {
    type: Number,
    required: true,
    min: 0
  },
  payment: {
    type: String,
    enum: ['credit card', 'cash', 'check', 'no payment', 'sabbath'],
    required: true
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
    }]
    //end registerSchema
})

module.exports = mongoose.model('Registration', registrationSchema);
