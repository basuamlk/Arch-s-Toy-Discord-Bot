/*
	Simple help command using embed to display all current commands.
	----------------------------------------------------------------
	!help

*/

const Discord = require('discord.js'); //require discord.js
module.exports.run = async (bot, message, args) => { // run command
	let embed = new Discord.RichEmbed()
			.setAuthor('Arch\'s Toy Bot') // name of bot
			.setDescription("These are Arch Toy's commands! :smile: ") // Description of help command
			.setFooter('say ping','https://cdn.discordapp.com/avatars/446808213007106058/150ba67778c395684861d1b7de3384c8.png?size=1024') // sets footer in embed
			.setThumbnail('https://cdn.discordapp.com/avatars/446808213007106058/150ba67778c395684861d1b7de3384c8.png?size=1024') // bot thumbnail
			.setColor('#42dcf4') //light blue
			.setTimestamp()
			.addField('!bday', 'Sends a happy birthday to the one mentioned. \n`Syntax: !bday @<user>`')
			.addField('!trivia','Gives a random number trivia.\n`Syntax: !trivia`')
			.addField('!userinfo', 'Gives users\' information data. \n`Syntax: !userinfo @<user>`')
			.addField('!avatar','Displays avatar of user. \n`Syntax: !avatar @<user>`')
			.addField('!quote','Gives a quote from a famous person or character. \n`Syntax: !quote`');
			message.channel.sendEmbed(embed);
}
module.exports.help ={ // help command
	name: 'help' // name of command
}