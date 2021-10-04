const { Schema, model } = require('mongoose');

const documentScheme = new Schema({
  _id: String,
  data: { type: Object, default: '' }
});

module.exports = model('Document', documentScheme);
