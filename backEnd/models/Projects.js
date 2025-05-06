const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String },
  description: { type: String },
  projectType: { type: String },
  projectCategory: { type: String },
  projectStatus: { type: Boolean },
  url: {
    liveUrl: { type: String },
    repoUrl: { type: String },
  },
  status: {
    reacts: { type: Number, default: 0 },
    comment: { type: mongoose.Schema.Types.Mixed, default: [{}] },
    views: { type: Number, default: 0 },
  },
  codes: {
    html: { type: String },
    css: { type: String },
    javaScript: { type: String },
    typeScript: { type: String },
  },
})

module.exports = mongoose.model('Project', ProjectSchema)
