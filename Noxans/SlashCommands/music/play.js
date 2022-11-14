const music = require('@koenie06/discord.js-music');

module.exports.run = async (inter) => {
    const song = inter.options.getString("song")
    inter.reply({content:`Am Spielen: ${song}`})

    const voiceChannel = inter.member.voice.channel;
    if(!voiceChannel) return inter.reply({ content: 'Du musst in eienem Channel sein, um Musik zu hören !', ephemeral: true });

    music.play({
        interaction: inter,
        channel: voiceChannel,
        song: song
    });
}
module.exports.help = {
    name: "play",
    memberPermissions: []
}