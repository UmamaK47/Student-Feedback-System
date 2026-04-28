const router = require("express").Router()
const Feedback = require("../models/Feedback")

router.post("/login", (req, res) => {
  const { username, password } = req.body

  if (username === "admin" && password === "1234") {
    return res.json({ success: true })
  }

  res.status(401).json({ success: false })
})

router.post("/feedback", async (req, res) => {
  try {
    await Feedback.create(req.body)
    res.json({ message: "Submitted" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get("/feedbacks", async (req, res) => {
  const page = Number(req.query.page) || 1
  const limit = 5
  const skip = (page - 1) * limit
  const subject = req.query.subject

  const filter = subject ? { subject } : {}

  const data = await Feedback.find(filter)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit)

  const total = await Feedback.countDocuments(filter)

  res.json({
    data,
    pages: Math.ceil(total / limit)
  })
})

router.get("/average/:subject", async (req, res) => {
  const result = await Feedback.aggregate([
    { $match: { subject: req.params.subject } },
    {
      $group: {
        _id: "$subject",
        avg: { $avg: "$rating" }
      }
    }
  ])

  res.json(result[0] || { avg: 0 })
})

module.exports = router