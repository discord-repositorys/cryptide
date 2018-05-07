const Guild = require("../models/guild.js");

module.exports = async (client, message, [prefix], level) => {
  if(!prefix) return message.reply("Mention a prefix!");
  try {
    await Guild.findOneByIdAndUpdate(message.guild.id, { prefix }, { upsert: true });
    message.channel.send(`Changed prefix to \`${prefix}\``);
  } catch(err) {
    console.error(err);
    message.reply("Something went wrong try again later");
  }
};

exports.conf = {
  aliases: [],
  permLevel: "Moderator"
};
      
exports.help = {
  name: 'prefix',
  category: "Config",
  description: 'Change prefix for your server.',
  usage: 'prefix <pre>'
};