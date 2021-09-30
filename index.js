const discord = require("discord.js")
const { token } = require("./config.json")
const fs = require("fs")
const fivem = require("discord-fivem-api")
const server = new fivem.DiscordFivemApi("45.156.84.82:30148")
const Client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES],
    allowedMentions: { parse: ["users", "roles"], repliedUser: true}
})

Client.on("ready", async () => {
    Client.user.setPresence({activities: [{ name: `!help for ${Client.guilds.cache.size} Servers`, type: "WATCHING"}]})
    console.log(`${Client.user.tag} is Online`)
})

Client.on("messageCreate", async message => {
    if(message.author.bot || message.channel.type == "DM") return
})
Client.on("messageCreate", async (message) => {
    if (!message.guild || message.author.bot) return; 
    if (message.content === "!status") {
        server.getPlayers().then(async(data)  => {
            let result  = [];
            let index = 1;
            for (let player of data) {
              result.push(`${index++}. ${player.name} | ${player.id} ID | ${player.ping} ping\n`);
            }
            const embed = new discord.MessageEmbed()
              .setColor("PURPLE")
              .setAuthor("SevenLifeRP ist online (Entwicklungs Phase)")
              .setTitle(`Spieler (${data.length}/${(await server.getPlayersOnline())})`)
              .setDescription( result.length > 0 ? result : `Es sind keine Spieler Online!` )
              .setFooter(`Ip / Port: ${server.getHost()} : ${server.getPort()}`)
              .setTimestamp();
            message.channel.send({ embeds: [embed] });
          }).catch((err) => {
            const embed = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("SevenLifeRP ist offline")
            .setTimestamp();
          message.channel.send({ embeds: [embed] });
          });
    }
})
Client.login(token)