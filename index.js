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
    if (message.content === "!serverstats") {
      const embed1 = new discord.MessageEmbed()
      .setColor("PURPLE")
      .setAuthor("SevenLifeRP Entwicklungsstand")
      .setTitle("Stand 12.11.2021")
      .addField("SevenLifeRP :", "  ``███ 25%``")
      .addField("Noxans AntiCheat: ", " ``█████ 50%``")
      .addField("Noxans Discord Bot: ", "``██████ 60% ``")
      .addField("Next Update:" ,  "19.11.21")
      .setFooter("Nexons_UpdateSystem")
      message.channel.send({ embeds: [embed1]})
      }
    if (message.content === "!neuefraklcn") {
      const embed2 = new discord.MessageEmbed()
      .setColor("PURPLE")
      .setAuthor("Sevenlife Fraktionen")
      .setTitle("Folgende Fraktion wurde gegründet:")
      .addField("Fraktion", "<a:acceptit:908807440462675978> LCN (La Cosa Nostra)")
      .addField("Don", "@Jxxq#4296")
      .setFooter("Noxans_IngameSystems")
      message.channel.send({ embeds: [embed2]})
    }
    if (message.content === "!neuefrakmg13") {
      const embed2 = new discord.MessageEmbed()
      .setColor("PURPLE")
      .setAuthor("Sevenlife Fraktionen")
      .setTitle("Folgende Fraktion wurde gegründet:")
      .addField("Fraktion", "<a:acceptit:908807440462675978> MG13 (Marabunta Grande 13)")
      .addField("Don", "@74Hinata#4140")
      .setFooter("Noxans_IngameSystems")
      message.channel.send({ embeds: [embed2]})
    }
})
Client.login(token)
