const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String },
  description: { type: String },
  whyMakeThis: { type: String },
  type: { type: String },
  status: { type: String },
  url: {
    liveUrl: { type: String },
    repoUrl: { type: String },
  },
  // project_status: {
  //   reacts: { type: Number, default: 0 },
  //   comment: { type: mongoose.Schema.Types.Mixed, default: [{}] },
  //   views: { type: Number, default: 0 },
  // },
  codes: {
    html: { type: String },
    css: { type: String },
    js: { type: String },
    ts: { type: String },
  },
  features: [],
  comingFeatures: [],
  times: {
    createdDate: { type: String },
    createdTime: { type: String },
  },
})

module.exports = mongoose.model('Project', ProjectSchema)
