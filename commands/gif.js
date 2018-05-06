const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args, level) => {

      gifSearch.random(args[0]).then(
          gifUrl => {
  
          let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
          var embed = new MessageEmbed()
              .setColor(`#${randomcolor}`)
              .setImage(gifUrl)
          message.author.send(embed);
      });

  
  }