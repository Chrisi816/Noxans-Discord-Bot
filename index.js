const discord = require("discord.js")
const { token } = require("./config.json")
const fs = require("fs")
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
}
          // laa
          

Client.login(token)
