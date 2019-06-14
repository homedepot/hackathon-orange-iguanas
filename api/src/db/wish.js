const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wishSchema = new Schema({
  firstName: { type: String, required: true },
  age: { type: String, required: true },
  hometown: { type: String, required: true },
  illness: { type: String, required: true },
  wishType: { type: String, required: true },
  wishDetail: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

wishSchema.set('toObject', {
  virtuals: true, // include built-in virtual 'id'
  versionKey: false, // remove '__v' version key
  transform: (doc, ret) => {
    delete ret._id;
  }
})

module.exports = mongoose.model('Wish', wishSchema)