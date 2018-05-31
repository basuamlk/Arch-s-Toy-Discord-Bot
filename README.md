# Archs-Toy-Discord-Bot
A simple Discord bot that uses some api's along with basic commands

## API'S

Somse API's found thanks to [Mashape](https://market.mashape.com)

The API's used in this discord bot belong to the owners of: [Numbers](http://numbersapi.com) and [Random Quotes](https://market.mashape.com/ishanjain28/random-quotes).

## Modules

Noteable modules used are: [Nodemon](https://nodemon.io/), [Unirest](http://unirest.io/), [Discord](https://discordapp.com/)

## Botsettings

The **botsettings.example.json** file is meant to hide the discord token, your prefix of choice e.g.("-", "+", "="), and your API Key if you choose to use an API.
Your local file should just be named **'botsettings.json'**.

The configuration for your **botsettings.json** folder is as follows:

```
{
"token": "Your Discord Token", 

"prefix": "!", 
	
"API_KEY": "Your API Key"
}
```
## Commands

The bot commands can be found in the **cmds** folder.

* The [trivia](https://github.com/basuamlk/Archs-Toy-Discord-Bot/blob/master/cmds/trivia.js) command utilises [Numbers](http://numbersapi.com) API.
* The [quote](https://github.com/basuamlk/Archs-Toy-Discord-Bot/blob/master/cmds/quote.js) command utilises [RandomQuotes](https://market.mashape.com/ishanjain28/random-quotes) API.
