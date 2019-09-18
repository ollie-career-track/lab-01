const personSchema = {
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  hair: {
    type: Object,
    required: true
  },
  favoriteFoods: {
    type: Array,
    required: true
  },
  married: {
    type: Boolean,
    required: true
  },
  kids: {
    type: Number,
    required: true
  }
};

module.exports = { personSchema };