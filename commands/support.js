exports.run = async (client, message, args, tools) => {
    message.channel.send("https://discord.gg/ztDzRZu join the support server")
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "support",
    category: "Misc",
    description: "Join the support server.",
    usage: "support"
  };