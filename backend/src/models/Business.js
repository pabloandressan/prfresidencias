// backend/src/models/Business.js
const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  address: String,
  phone: String,
  website: String,
  image: String,
  schedule: String,
  location: {
    lat: Number,
    lng: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Business", businessSchema);
