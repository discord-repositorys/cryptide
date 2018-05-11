const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // this is server id
  prefix: { type: String, required: true }, // custom prefix.
  starboardChannel: { type: String, default: "off" } // anything else u want
});
const guildModel = mongoose.model("guild", guildSchema);
module.exports = guildModel;