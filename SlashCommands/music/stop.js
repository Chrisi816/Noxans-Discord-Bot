const music = require('@koenie06/discord.js-music');

module.exports.run = async (inter) => {
    const isConnected = await music.isConnected({
        interaction: inter

    });
    if(!isConnected) return inter.reply({ content: 'There are no songs playing', ephemeral: true });

    const isPaused = music.isPaused({
        interaction: inter
    });
    if(isPaused) return inter.reply({ content: 'The song is already paused', ephemeral: true });


    music.pause({
        interaction: inter
    });

    inter.reply({ content: `Paused the music` });

},

module.exports.help = {
    name: "stop",
}