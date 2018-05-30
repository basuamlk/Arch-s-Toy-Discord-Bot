/*
	Using Discord Api RichEmbed to create an embed displaying user information.
	--------------------------------------------------------------------------
	!userinfo

*/

const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
	let target =  message.mentions.users.first() || message.mentions.roles.first() || message.author;
	let embed = new Discord.RichEmbed()
			.setAuthor(target.username)
			.setDescription("This is the user's info!")
			.setThumbnail(target.avatarURL)
			.setColor('#f44141')
			.setTimestamp()
			.addField('Full Username', `${target.username}#${target.discriminator}`)
			.addField('ID',target.id)
			.addField('Account created on', target.createdAt);
			message.channel.sendEmbed(embed);
}
module.exports.help ={
	name: 'userinfo'
}