const yt = require('ytdl-core');

exports.run = (client, message) => {
  const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel || voiceChannel.type !== 'voice') throw "I couldn't connect to your voice channel...";
  return voiceChannel.join();
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "join",
    description: "Join a voice channel.",
    category: "Music",
    usage: "join"
  };