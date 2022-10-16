const discord = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");
const fivem = require("discord-fivem-api");
const server = new fivem.DiscordFivemApi("45.156.84.82:30148");
const Client = new discord.Client({
	intents: [
		discord.Intents.FLAGS.GUILDS,
		discord.Intents.FLAGS.GUILD_VOICE_STATES,
		discord.Intents.FLAGS.GUILD_MEMBERS,
		discord.Intents.FLAGS.GUILD_MESSAGES,
		discord.Intents.FLAGS.DIRECT_MESSAGES,
	],
	allowedMentions: { parse: ["users", "roles"], repliedUser: true },
});

Client.aliases = new discord.Collection();
Client.commands = new discord.Collection();
Client.events = new discord.Collection();
Client.SlashCmds = new discord.Collection();

module.exports.Client = Client;

Client.on("messageCreate", async (message) => {
	if (!message.guild || message.author.bot) return;
	if (message.content === "!status") {
		server
			.getPlayers()
			.then(async (data) => {
				let result = [];
				let index = 1;
				for (let player of data) {
					result.push(
						`${index++}. ${player.name} | ${player.id} ID | ${
							player.ping
						} ping\n`
					);
				}
				const embed = new discord.MessageEmbed()
					.setColor("PURPLE")
					.setAuthor("SevenLifeRP ist online (Entwicklungs Phase)")
					.setTitle(
						`Spieler (${
							data.length
						}/${await server.getPlayersOnline()})`
					)
					.setDescription(
						result.length > 0
							? result
							: `Es sind keine Spieler Online!`
					)
					.setFooter(
						`Ip / Port: ${server.getHost()} : ${server.getPort()}`
					)
					.setTimestamp();
				message.channel.send({ embeds: [embed] });
			})
			.catch((err) => {
				const embed = new discord.MessageEmbed()
					.setColor("RED")
					.setAuthor("SevenLifeRP ist offline")
					.setTimestamp();
				message.channel.send({ embeds: [embed] });
			});
	}
	if (message.content === "!serverstats") {
		const embed1 = new discord.MessageEmbed()
			.setColor("PURPLE")
			.setAuthor("SevenLifeRP Entwicklungsstand")
			.setTitle("Stand 12.10.2021")
			.addField("SevenLifeRP :", "  ``████ 32.5%``")
			.addField("Noxans AntiCheat: ", " ``█████ 50%``")
			.addField("Noxans Discord Bot: ", "``██████ 60% ``")
			.addField("Next Update:", "19.11.21")
			.setFooter("Noxans_UpdateSystem");
		message.channel.send({ embeds: [embed1] });
	}
	if (message.content === "!neuefraklcn") {
		const embed2 = new discord.MessageEmbed()
			.setColor("PURPLE")
			.setAuthor("Sevenlife Fraktionen")
			.setTitle("Folgende Fraktion wurde gegründet:")
			.addField(
				"Fraktion:",
				"<a:acceptit:908806834196971631> LCN (La Cosa Nostra)"
			)
			.addField("Don:", "<@457229726659117067>")
			.setFooter("Noxans_IngameSystems")
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/858761371582464021/908812696676360232/WOD0G8a.png"
			);
		message.channel.send({ embeds: [embed2] });
	}
	if (message.content === "!neuefraktionhigh") {
		const embed2 = new discord.MessageEmbed()
			.setColor("PURPLE")
			.setAuthor("Sevenlife Fraktionen")
			.setTitle("Folgende Fraktion wurde gegründet:")
			.addField(
				"Fraktion:",
				"<a:acceptit:908806834196971631>  High Rollin Hustlers"
			)
			.addField(
				"OG / s :",
				"<@573233863027982341> und <@536565831640023040>"
			)
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/858757330433867796/939236848792920134/Download_10.jpg"
			)
			.setFooter("Noxans_IngameSystems");
		message.channel.send({ embeds: [embed2] });
	}
	if (message.content === "!neuefrakmg13") {
		const embed2 = new discord.MessageEmbed()
			.setColor("PURPLE")
			.setAuthor("Sevenlife Fraktionen")
			.setTitle("Folgende Fraktion wurde gegründet:")
			.addField(
				"Fraktion:",
				"<a:acceptit:908806834196971631> MG13 (Marabunta Grande 13)"
			)
			.addField("Patrón:", "<@695344548733517996>")
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/858761371582464021/908812799092850738/mg13.png"
			)
			.setFooter("Noxans_IngameSystems");
		message.channel.send({ embeds: [embed2] });
	}
	if (message.content === "!neuefrakvvz") {
		const embed2 = new discord.MessageEmbed()
			.setColor("PURPLE")
			.setAuthor("Sevenlife Fraktionen")
			.setTitle("Folgende Fraktion wurde gegründet:")
			.addField(
				"Fraktion:",
				"<a:acceptit:908806834196971631> VVZ (Vory V Zakone)"
			)
			.addField(
				"Don / s :",
				"<@784076542480875561> und <@444131992918032384>"
			)
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/858761371582464021/909539043652546650/1820af7ebe6748fa3045a186a60f4685_1.webp"
			)
			.setFooter("Noxans_IngameSystems");
		message.channel.send({ embeds: [embed2] });
	}
	if (message.content === "!informationenrollen") {
		const embed2 = new discord.MessageEmbed()
			.setColor("PURPLE")
			.setAuthor("Sevenlife Fraktionen")
			.setTitle("Folgende Fraktion wurde gegründet:")
			.addField(
				"Fraktion:",
				"<a:acceptit:908806834196971631> VVZ (Vory V Zakone)"
			)
			.addField(
				"Don / s :",
				"<@784076542480875561> und <@444131992918032384>"
			)
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/858761371582464021/909539043652546650/1820af7ebe6748fa3045a186a60f4685_1.webp"
			)
			.setFooter("Noxans_IngameSystems");
		message.channel.send({ embeds: [embed2] });
	}
	if (message.content === "!Keys") {
		const embed2 = new discord.MessageEmbed()
			.setColor("PURPLE")
			.setTitle("Keys und Commands:")
			.addField(
				"**Keys:**",
				`
**F1** - Handy \n
**F2** - Inventar\n
**F3** - Main Menu\n
**F5** - Animationen\n
**F9** - Scoreboard\n
**F10** - Dialog Menu\n
**E** - Interargieren\n
**F** - Einsteigen, Austeigen etc.\n
**G** - Interaktions Menu\n
**M** - Kofferraum`
			)
			.addField("**Commands:**", "**/ooc** - OOC Chat")
			.addField(
				"**Auto Keys:**",
				`**B** - Sicherheitsgurt an/aus
**Linke Pfeiltaste** - Linker Blinker
**Rechte Pfeiltaste** - Rechter Blinker
**Untere Pfeiltaste** - Warnblinker
**K** - Manuelles Schalten der Gänge
**R** - 1 Gang runter
**Shift** - 1 Gang hoch`
			)
			.addField(
				"**Hinweis:**",
				"**Alle Angaben zu Keys und Commands können sich bis zum Server Start noch ändern** "
			)
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/950106813435621437/954113542502613063/big.png"
			)
			.setFooter("Noxans_Help - 06.09.2022");
		message.channel.send({ embeds: [embed2] });
	}
});

fs.readdirSync("./commands/").forEach((dir) => {
	fs.readdir(`./commands/${dir}`, (err, files) => {
		if (err) throw err;

		var jsFiles = files.filter((f) => f.split(".").pop() === "js");

		if (jsFiles.length <= 0) {
			console.log("[COMMANDHANDLER] - Can't find any commands!");
			return;
		}

		jsFiles.forEach((file) => {
			var fileGet = require(`./commands/${dir}/${file}`);
			console.log(`[COMMANDHANDLER] - File ${file} was loaded`);

			try {
				Client.commands.set(fileGet.help.name, fileGet);
				fileGet.help.aliases.forEach((alias) => {
					Client.aliases.set(alias, fileGet.help.name);
				});
			} catch (err) {
				return console.log(err);
			}
		});
	});
});
fs.readdirSync("./events/").forEach((dir) => {
	var jsFiles = fs
		.readdirSync("./events/")
		.filter((f) => f.split(".").pop() === "js");
	let check = false;
	if (jsFiles.length <= 0) {
		console.log("[EVENTDHANDLER] - Can't find any events!");
		return;
	}

	jsFiles.forEach((event) => {
		const eventget = require(`./events/${event}`);

		try {
			Client.events.set(eventget.name, eventget);
			if (check == false)
				console.log(`[EVENTDHANDLER] - File ${event} was loaded`);
			check = true;
		} catch (error) {
			return console.log(error);
		}
	});
});

fs.readdirSync("./SlashCommands/").forEach((dir) => {
	fs.readdir(`./SlashCommands/${dir}`, (err, files) => {
		if (err) throw err;

		var jsFiles = files.filter((f) => f.split(".").pop() === "js");

		if (jsFiles.length <= 0) {
			return console.log("[SLASHHANDLER] - Can't find any commands!");
		}

		jsFiles.forEach((file) => {
			var fileGet = require(`./SlashCommands/${dir}/${file}`);
			console.log(`[SLASHHANDLER] - File ${file} was loaded`);

			try {
				Client.SlashCmds.set(fileGet.help.name, fileGet);
			} catch (err) {
				return console.log(err);
			}
		});
	});
});
Client.login(token);
