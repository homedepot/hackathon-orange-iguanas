const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Wish = new Schema({
  firstName: { type: String, required: true },
  age: { type: Number, required: true },
  hometown: { type: String, required: true },
  illness: { type: String, required: true },
  wishType: { type: String, required: true },
  wishDetail: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

Wish.set('toObject', {
  versionKey: false, // remove '__v' version key
})

module.exports = mongoose.model('Wish', Wish)