const Client =  require("../index").Client
Client.on("messageCreate", async message => {
    if (message.author.bot || message.channel.type == "DM") return
  
    let prefix = "!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)
    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));
  if (commands) {
    if (!message.content.startsWith(prefix)) return
    commands.run(Client, message, args, prefix);
  }
  
    
})
const isInvite = async (guild, code) => {
  return await new Promise((resolve) => {
    guild.invites.fetch().then((invites) => {
      for (const invite of invites) {
        if (code === invite[0]) {
            resolve(true)
            return
          }
        }
        resolve(false)
     })
  })
}

Client.on("messageCreate", async (message) => {
  const {guild, member, content} = message
   
  const code = content.split("discord.gg/")[1]

  if (content.includes("discord.gg/")) {
    const isOurInvite = await isInvite(guild, code)
    if (!isOurInvite) {
      message.member.roles.add("938529895347261501")
      message.member.roles.remove("866732036508614717")
      message.delete()
      return message.channel.send(`${member} Bitte Poste keine Einladungen welche mit diesem Discord nichts zu tun haben. Du bekommst vorsichtshalber die MUTE rolle, und deine Bürger rolle wird entfernt`)
      
    }
   return 
  }
  if (content.includes("dsc.gg/")) {
    const isOurInvite = await isInvite(guild, code)
    if (!isOurInvite) {
      message.member.roles.add("938529895347261501")
      message.member.roles.remove("866732036508614717")
      message.delete()
      return message.channel.send(`${member} Bitte Poste keine Einladungen welche mit diesem Discord nichts zu tun haben. Du bekommst vorsichtshalber die MUTE rolle, und deine Bürger rolle wird entfernt`)
    }
   return 
  }
})