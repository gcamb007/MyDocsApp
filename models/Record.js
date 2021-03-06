var mongoose = require("mongoose");

var RecordSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  description: String,
  published_year: Number,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Record", RecordSchema);
