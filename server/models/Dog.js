const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
 
});


const Dog = model('Dog', dogSchema);

module.exports = Dog;
