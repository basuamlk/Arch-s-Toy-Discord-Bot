/*
Created a simple Discord Bot created for personal use.
Includes some neat commands and api's to enjoy.
------------------------------------------------
*/
const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require('fs');

const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir('./cmds/', (err,files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split('.').pop() === 'js'); //takes all javascript files extentions
	if(jsfiles.length <= 0) {
		console.log("No commands to load!");
		return;
	}
	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f,i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i+1}: ${f} loaded!`);
		bot.commands.set(props.help.name,props);
	});
})

bot.on("ready", async () => {
	console.log(`Bot is ready! ${bot.user.username}`);

		try {
		let link = await bot.generateInvite(['ADMINISTRATOR']);
		console.log(link);
		} catch(e){
			console.log(e.stack);
		}
});

bot.on('message', async message => {
	let args;
	let target = message.mentions.users.first() || message.mentions.roles.first() || message.author;
	if (message.author.bot) return;
	if(message.channel.type === 'dm') return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let string1 = 'ping';
	let string2 = 'no';
	let string3 = 'u';
	if(command === string1){
      message.reply(':ping_pong: **Pong!**');
  	}
  	if(command === string2){
      message.channel.sendMessage(target.toString()+' '+string2+' '+string3); // Bot replies with 'no u'.
  	}


	if(!command.startsWith(prefix)) return;
	let cmd = bot.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(bot, message, args);
});



bot.login(botSettings.token);