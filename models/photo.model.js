import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  url: { type: String, trim: true },
});

const Photo = mongoose.model('Photo', photoSchema);
export default Photo;
