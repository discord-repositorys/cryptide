const urban = require('relevant-urban');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args, level) => {


  if (!args[0]) return message.channel.send(`***Please specify some text!***`);



  let res = await urban(args.join(' ')).catch(e => { 

    return message.channel.send('***Sorry, that word was not found!***');
  });

  // Now, we can form the response embed
  const embed = new MessageEmbed()
    .setUrl(res.urbanURL)
    .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`) 
    .setField('Author', res.author, true) 
    .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)

  if (res.tags.length > 0 && res.tags.join(' ').length < 1024) {
    embed.addField('Tags', res.tags.join(', '), true) 
  }


  message.channel.send(embed);

}
exports.conf = {
    aliases: [],
    permLevel: "User"
};
      
exports.help = {
    name: 'urban',
    category: "Misc",
    description: 'Urban command',
    usage: 'urban <text>'
};