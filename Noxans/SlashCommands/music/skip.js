const music = require('@koenie06/discord.js-music');
module.exports.run = async (inter) => {
    const isConnected = await music.isConnected({
        interaction: inter
    });
    if(!isConnected) return inter.reply({ content: 'There are no songs playing', ephemeral: true });

    
    music.skip({
        interaction: inter
    });

    inter.reply({ content: `Skipped the song` });

}

module.exports.help = {
    name: "skip",
}