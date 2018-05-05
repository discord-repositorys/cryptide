const { inspect } = require("util");
const { post } = require("snekfetch");
const Discord = require("discord.js");

exports.run = async (client, message, args, permlvl) => { // eslint-disable-line no-unused-vars
  if (message.author.id !== "349674631260667925" && message.author.id !== "292690616285134850") return message.channel.send("Only owners can use this command")
  const code = args.join(" ");
  const msg = message;
  const token = client.token.split("").join("[^]{0,2}");
  const rev = client.token.split("").reverse().join("[^]{0,2}");
  const filter = new RegExp(`${token}|${rev}`, "g");
  try {
    let output = eval(code);
    if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
    output = inspect(output, { depth: 0, maxArrayLength: null });
    output = output.replace(filter, "py bad");
    output = clean(output);
    if (output.length < 1950) {
      message.channel.send(`\`\`\`js\n${output}\n\`\`\``);
    } else {
    	  message.channel.send(`${output}`, {split:"\n", code:"js"});
    }
  } catch (error) {
    message.channel.send(`The following error occured \`\`\`js\n${error}\`\`\``);
 }

  function clean(text)  {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "9"
};

exports.help = {
  name: "eval",
  description: "Evaluates javascript.",
  category: "Owner",
  usage: "eval [code]"
};
