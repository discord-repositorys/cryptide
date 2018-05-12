const mongoose = require("mongoose");

const GuildSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  prefix: { type: String, required: true }
});


const guildModel = mongoose.model("guild", GuildSchema);
module.exports = guildModel;