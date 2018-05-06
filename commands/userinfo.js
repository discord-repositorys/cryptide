const { MessageEmbed } = require("discord.js");
client.on('message', message => {
const UserInfo = new MessageEmbed()


.setAuthor(message.author.username, message.author.avatarURL())
.setTitle('UserInfo')
.setImage(message.author.avatarURL()) 
.setThumbnail(message.author.avatarURL())


.addField('Avatar', message.author.avatar, true) 
.addField('AvatarURL', message.author.avatarURL({
    format: 'png'
}), true) 
.addField('AvatarURL', message.author.avatarURL({
    size: '2048'
}), true)
.addField('Bot', message.author.bot, true)
.addField('Created At', message.author.createdAt, false) 
.addField('Discrim', message.author.discriminator, true) 
.addField('DMChannel', message.author.dmChannel) 
.addField('ID', message.author.id) 
.addField('Last Message', message.author.lastMessage)
.addField('Last Message ID', message.author.lastMessageID)
.addField('Presence', message.author.presence) 
.addField('Presence Status', message.author.presence.status) 
.addField('Presence Game', message.author.presence.activity.name)
.addField('Tag', message.author.tag) 
.addField('Username', message.author.username) 
.addField('Nick Name', message.guild.member(target).displayName) 

.setFooter('Requested By', message.author.tag) 
.setTimestamp() 

message.channel.send(UserInfo);
});
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "userinfo",
    description: "Get info on a user",
    category: "Fun",
    usage: "userinfo <user>"
  };
  