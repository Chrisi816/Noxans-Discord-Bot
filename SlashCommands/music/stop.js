const music = require('@koenie06/discord.js-music');

module.exports.run = async (inter) => {
    const isConnected = await music.isConnected({
        interaction: inter
    });
    if(!isConnected) return inter.reply({ content: 'There are no songs playing', ephemeral: true });

    
    const queue = music.queue({
        interaction: inter
    });
    
    if(queue.length === 0) return inter.reply({ content: 'No music is playing', ephemeral: true });

   
    music.stop({
        interaction: inter
    });


},

module.exports.help = {
    name: "stop",
}