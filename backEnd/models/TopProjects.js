const mongoose = require('mongoose')

const TopProjectsSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
})

module.exports = mongoose.model('TopProject', TopProjectsSchema)
