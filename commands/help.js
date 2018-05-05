const settings = require('../config.json');
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`[Cryptide Commands]\n\n[Use ${settings.prefix}help <command> for information!]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code: 'ini'});
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send("", {embed: {
        color: 15400990,
            title: `Command Help:`,
            description: `Command Name: \`${command.help.name}\` \nDescription: ${command.help.description}\nUsage: ${settings.prefix}${command.help.usage}`,
          }});
    } else {
      message.channel.send("", {embed: {
        color: 15400990,
            title: `Non-Existant Command!`,
            description: `I was unable to find a command by the name of: \`${args[0]}\``,
          }});
    }
  }
};

exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays available commands.',
  usage: 'help <command>'
};