const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Photo" }]
});

const Collection = mongoose.model('Collection', collectionSchema);
module.exports = Collection;