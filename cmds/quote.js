/*
Displays famous quotes using Random Quotes API found on Mashape (https://market.mashape.com/ishanjain28/random-quotes)
------------------------------
!quote

*/
const botSettings = require("../botsettings.json");
const Discord = require('discord.js');
const unirest =require('unirest');
module.exports.run = async (bot, message, args) => {
const api = 'https://quotes.p.mashape.com/';

		unirest.get(api)
	.header("X-Mashape-Key", botSettings.ranquotes_key) //andrux_key found in botsettings file
	.header("Accept", "application/json")
	.end(function (fact) {
  	console.log(fact.body);
	let embed = new Discord.RichEmbed()
			.setDescription(fact.body.quote+"\n -"+fact.body.author)
			.setColor("#f44242")
			message.channel.sendEmbed(embed);
});

}
module.exports.help ={
	name: 'quote'
}