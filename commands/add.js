const yt = require('ytdl-core');

exports.run = (client, message, [song]) => {
  if (!client.hasOwnProperty('queue')) client.queue = {};
	yt.getInfo(song, (err, info) => {
		if (err) return message.channel.send(`Invalid YouTube Link: ${err}`);
		if (!client.queue.hasOwnProperty(message.guild.id)) {
			client.queue[message.guild.id] = {
				playing: false,
				songs: []
			};
		}
		client.queue[message.guild.id].songs.push({ url: song, title: info.title, requester: message.author.username });
		return message.channel.send(`🎵 Added **${info.title}** to the queue 🎶`);
  });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "add",
    description: "Add a song to the queue.",
    category: "Music",
    usage: "add <message>"
  };