const Client =  require("../index").Client
const { guildMember, MessageEmbed } = require("discord.js")
Client.on("guildMemberAdd", async guildMember => {
    const channel = Client.channels.cache.get("866733474986459156").send({
       embeds: [
           new MessageEmbed()
           .setColor("PURPLE")
           .setAuthor("Neuer Member")
           .setDescription(`**<@${guildMember.user.id}> ist dem Server beigetreten**`)
           .setThumbnail("https://cdn.discordapp.com/attachments/858761371582464021/931587238150680666/big.png")
           .setFooter("Noxans_Welcome")
       ]
    })
 })