/*
Displays user mentioned avatar
------------------------------
!avatar

*/
module.exports.run = async (bot, message, args) => {
	let target =  message.mentions.users.first() || message.mentions.roles.first() || message.author;
	 message.channel.send({files: [
		{
			attachment: target.displayAvatarURL,
			name: "avatar.png"
		}
	]});
}
module.exports.help ={
	name: 'avatar'
}