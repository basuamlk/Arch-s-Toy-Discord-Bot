/*
	Happy Birthday Command!
	-------------------------------------
	Says Happy Birthday to user mentioned
	!bday @<user>

*/
const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
	let target =  message.mentions.users.first() || message.mentions.roles.first() || message.author;
	let embed = new Discord.RichEmbed()
			.setTitle('Happy Birthday!')
			.setThumbnail(target.avatarURL)
			.setColor('#f4ee41')
			.setTimestamp()
			.addField(`${target.username}`,':sparkles: :confetti_ball: :birthday: Happy Birthday! :birthday: :confetti_ball: :sparkles:');
			message.channel.sendEmbed(embed);
}
module.exports.help ={
	name: 'bday'
}