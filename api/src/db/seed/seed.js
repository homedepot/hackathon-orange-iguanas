const mongoose =  require('mongoose')
const Wish = require('../wish.js')
const seedWishes = require('./wishes.json')
const db = 'mongodb://mongo/my_database'

const schemaCreation = async () => {
  try {
    console.info('Connecting to mongodb at mongodb://mongo/my_database')
    await mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true})
    console.info('Dropping Database')
    await mongoose.connection.db.dropCollection('wishes')
    console.info('Seeding Database')
    await Wish.insertMany(seedWishes)
    await Wish.createIndexes()
    console.info('Disconnecting')
    await mongoose.disconnect();
  } catch (error) {
    console.error(error)
  }
}

schemaCreation()