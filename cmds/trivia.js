/*
Trivia Command!
Command that uses Numbers api (http://numbersapi.com) to give random number trivia.
Thanks to Mashape (https://market.mashape.com/)
-----------------------------------------------------------------------------------
!trivia
*/ 
const botSettings = require("../botsettings.json");
const Discord = require('discord.js');
module.exports.run =  async (bot, message, args) => {
// Example api url:
//	const api_url = 'https://numbersapi.p.mashape.com/42/trivia?fragment=true&json=true&notfound=floor';
const api = 'https://numbersapi.p.mashape.com/';
let RanNum =  Math.floor((Math.random() * 1000));   // random number from 1 to 1000
let num = RanNum.toString(); // example: let number = '10' instead of 10;

	
const api_url = api+num+'/trivia?fragment=true&json=true&notfound=floor';	//const api_url = api+number+'/'+type+'?fragment=true&json=true&notfound=floor';
const unirest = require('unirest'); //using unirest module to get api
	unirest.get(api_url)
	.header("X-Mashape-Key", botSettings.API_KEY)
	.header("Accept", "text/plain")
	.end(function (result) {		
  	console.log(result.body);//(result.status,result.headers,result.body) 

	let embed = new Discord.RichEmbed()
			.setDescription("Here's our random number trivia!")
			.setColor('#f49e42')
			.setTimestamp()
			.setFooter('Thanks to http://numbersapi.com ','https://cdn.discordapp.com/avatars/446808213007106058/150ba67778c395684861d1b7de3384c8.png?size=1024')
			.addField(result.body.number,result.body.text.charAt(0).toUpperCase()+result.body.text.slice(1)+'.'); //modified to capitalize first letter , sends the text sent from the url
			message.channel.sendEmbed(embed);
});

}
module.exports.help ={

	name: 'trivia'

}