const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comments: String
}, { timestamps: true })

module.exports = mongoose.model("Feedback", feedbackSchema)