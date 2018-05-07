const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, level) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '357555941215961099') return message.channels.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
  if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 10000}));
  
  const embed = new MessageEmbed()
    .setTitle(args.join(' '))
    .setFooter('React to vote on Poll!')
    .setColor('#7289DA')
    const pollTitle = await message.channel.send({ embed });
      await pollTitle.react(`ðŸ‘`);
      await pollTitle.react(`ðŸ‘Ž`);
  
    const filter = (reaction) => reaction.emoji.name === 'ðŸ‘';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  
    const filter1 = (reaction) => reaction.emoji.name === 'ðŸ‘Ž';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};
      
exports.help = {
    name: 'poll',
    category: "Misc",
    description: 'Make a poll',
    usage: 'poll <args>'
};