const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Image', schema);