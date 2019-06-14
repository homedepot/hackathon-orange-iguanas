const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Wish = new Schema({
  firstName: { type: String, required: true },
  age: { type: String, required: true },
  hometown: { type: String, required: true },
  illness: { type: String, required: true },
  wishType: { type: String, required: true },
  wishDetail: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Wish', Wish)