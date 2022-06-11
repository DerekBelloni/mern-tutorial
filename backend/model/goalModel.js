const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
})