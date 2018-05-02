const exec = require('child_process').exec;

exports.run = async(client, message, args, level) => {
  if (message.author.id !== "349674631260667925" && message.author.id !== "292690616285134850") return message.channel.send("Only owners can use this command")
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
    });
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "9"
};

exports.help = {
  name: "exec",
  category: "Owner",
  description: "Executes command prompt code",
  usage: "exec [...code]"
};