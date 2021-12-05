const music = require('@koenie06/discord.js-music');
module.exports.run = async (inter) => {
    const isConnected = await music.isConnected({
        interaction: inter
    });
    if(!isConnected) return inter.reply({ content: 'There are no songs playing', ephemeral: true });

    const queue = await music.getQueue({
        interaction: inter
    });

    let response = ``;

    for (let i = 0; i < queue.length; i++) {
        response += `${i + 1}. [${queue[i].info.title}](${queue[i].info.url}) - ${queue[i].info.duration}\n`
    };

    inter.reply({ content: response });


}

module.exports.help = {
    name: "queue",
}
