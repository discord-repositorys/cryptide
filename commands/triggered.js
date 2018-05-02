const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    await message.channel.send(new MessageAttachment(
        await client.API.triggered(message.mentions.users.first().displayAvatarURL({ format: "png", size: 128 })),
        "triggered.png"));
    }



exports.conf = {
    aliases: [],
    permLevel: 0
};
      
exports.help = {
    name: 'triggered',
    category: "Image Manipulation",
    description: 'Make a triggered pic of someone!',
    usage: 'triggered <user>'
};