exports.run = (client, message, args) => {
    const cleverbot = require("cleverbot.io");
    const clever = new cleverbot(process.env.CLEVERBOT_USER, process.env.CLEVERBOT_APIKEY);
    clever.setNick("Source code");
    clever.create(function(err, session) {
        clever.ask(args.join(' '), function(err, res) {
            message.channel.send(res);
        });
    });
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "cleverbot",
    category: "Misc",
    description: "cleverbot.",
    usage: "cleverbot"
  };