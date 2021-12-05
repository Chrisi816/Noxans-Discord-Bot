const Client =  require("../index").Client

const { createCmd, acCmd } = require("../dataHandler")
Client.on("ready", async () => {
    Client.user.setPresence({ activities: [{ name: `!help for ${Client.guilds.cache.size} Servers`, type: "WATCHING" }] })
    console.log(`${Client.user.tag} is Online`)

    createCmd(Client, "866729353252831242")
    acCmd(Client, "775033960300019732")
  })