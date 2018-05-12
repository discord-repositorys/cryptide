const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
  
    let hentaiEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(body.neko)

    message.channel.send(hentaiEmbed);

}
exports.conf = {
    aliases: [],
    permLevel: "User"
};
      
exports.help = {
    name: 'lewdneko',
    category: "NSFW",
    description: 'Let a newd neko',
    usage: 'lewdneko'
};