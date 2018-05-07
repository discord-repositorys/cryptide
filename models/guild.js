const mongoose = require("mongoose");

const GuildSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  prefix: { type: String, required: true }
});

// name has to be singular, mongoose will make it plural
// and create a collection.
const guildModel = mongoose.model("guild", GuildSchema);
module.exports = guildModel;