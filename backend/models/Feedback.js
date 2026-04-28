<<<<<<< HEAD
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

=======
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

>>>>>>> 8c46a0544f6ee468fbfc496e36aa38c250ac5797
module.exports = mongoose.model("Feedback", feedbackSchema)