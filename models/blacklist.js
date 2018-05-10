const mongoose = require("mongoose");

const BlacklistSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  user: { type: String, required: true }
});

const blacklistModel = mongoose.model("blacklist", BlacklistSchema);
module.exports = blacklistModel;