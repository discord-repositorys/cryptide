const Fortnite = require("fortnite");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const ft = new Fortnite(process.env.FORTNITEAPIKEY);
exports.run = async (client, message, args, level) => {

    let username = args[0];
    let platform = args[1] || "pc";

    let data = ft.getInfo(username, platform).then(data => {

        let stats = data.lifetimeStats;
        let kills = stats.find(s => s.stat == 'kills');
        let wins = stats.find(s => s.stat == 'wins');
        let kd = stats.find(s => s.stat == 'kd');
        let mPlayed = stats.find(s => s.stat == 'matchesPlayed');
        let tPlayed = stats.find(s => s.stat == 'timePlayed');
        let asTime = stats.find(s => s.stat == 'avgSurvivalTime');

        let embed = new MessageEmbed()
        .setTitle("Fortnite Stats")
        .setAuthor(data.username)
        .setColor('RANDOM')
        .addfield("Kills", kills.value, true)
        .addfield("Wins", wins.value, true)
        .addfield("KD", kd.value, true)
        .addfield("Matches played", mPlayed.value, true)
        .addfield("Time Played", tPlayed.value, true)
        .addfield("Average survival time", asTime.value, true)
        
        message.channel.send(embed);

        console.log(data);


    }).catch(e => {
        console.log(e);
        message.channel.send("User not found");
    })




}


exports.conf = {
    aliases: [],
    permLevel: "User"
};
          
    
exports.help = {
    name: 'fortnite',
    category: "Game Stats",
    description: 'Get a users fortnite stats',
    usage: 'fortnite <platform> <user>'
};