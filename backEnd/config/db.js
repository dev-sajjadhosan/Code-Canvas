const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('MongoDB Connected.')
  } catch (error) {
    console.log('MongoDB Error', error.message)
  }
}

module.exports = connectDB
