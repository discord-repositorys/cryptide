const mongoose = require("mongoose");

const prefixSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  prefix: { type: String, required: true }
});

// name has to be singular, mongoose will make it plural
// and create a collection.
const prefixModel = mongoose.model("prefix", prefixSchema);
module.exports = prefixModel;