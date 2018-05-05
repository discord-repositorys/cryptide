const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
const List = message.guild.emojis.map(e => e.toString()).join(" ");

const EmojiList = new MessageEmbed() 
    .setTitle('➠ Emoji\'s') 
    .setAuthor(message.guild.name, message.guild.iconURL `https://cdn.discordapp.com/attachments/383886042178256909/397988796186230784/4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkAw300.png`) //<Guild> Name, Icon URL || If <Guild> Icon => Null Sends Custom Image URL 
    .setColor('RANDOM') 
    .setDescription(List) 
    .setTimestamp() 
    .setFooter(message.guild.name) 
message.channel.send(EmojiList) 
}