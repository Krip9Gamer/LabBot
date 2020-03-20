const Discord = require('discord.js'); //For this module to work, go to command promt, or your editors console and type in npm install discord.js --save
const bot = new Discord.Client(); //Nothing really much to say here lol, just Creating a new Discord Client with the name bot

bot.on("ready", async => {
   console.log("ready to launch"); //This code prints in your console "ready to launch" IF everything is correct.
})

bot.login("Your Token Here") //This requires you to put your own token, We will not put our token.

//Adding Ping command Later
