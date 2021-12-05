async function createCmd(Client, guildId) {
    const data = [
        {
            name: "echo",
            description: "Echo your text",
            options: [{
                name:"text",
                type:"STRING",
                description: "The input",
                required: true 
            }],
        },
        {
            name: "ping",
            description: "REPLY"
        },
        {
            name: "jump",
            description: "Jumping",
            options: [{
                name:"number",
                type:"STRING",
                description: "Die numer von dem Lied welches du spielen willst",
                required: true 
            }],
        },
        {
            name: "play",
            description: "play a song",
            options: [{
                name: "song",
                description: "Spiele ein Lied ab",
                type:"STRING",
                required: true 
            }],
        },
        {
            name: "queue",
            description: "Get the Queue",
        },
        {
            name: "stop",
            description: "Stop the Songs",
        },
    ]
    await Client.guilds.cache.get(guildId)?.commands.set(data)
}
module.exports = {createCmd}