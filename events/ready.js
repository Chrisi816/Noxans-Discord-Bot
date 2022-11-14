const Client = require("../index").Client;

const { createCmd, acCmd } = require("../dataHandler");
Client.on("ready", async () => {
	let status = [
		`!help for ${Client.guilds.cache.size} Servers`,
		`for ${Client.users.cache.size} Members`,
	];
	Client.user.setStatus("dnd");
	setInterval(() => {
		let statuse = status[Math.floor(Math.random() * status.length)];
		Client.user.setPresence({
			activities: [{ name: statuse, type: "WATCHING" }],
		});
	}, 5000);
	console.log(`${Client.user.tag} is Online`);
	let commands;
	commands.create({
		name: "ping",
		description: "Replies with pong",
	});
	commands.create({
		name: "truth",
		description: "Replies with truth",
	});

	createCmd(Client, null);
});
