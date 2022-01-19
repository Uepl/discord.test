const express = require("express");
const app = express();
app.listen(3000,() => {
  console.log("project is running");  
})
app.get("/",(req,res) => {
  res.send("hello world");
})
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]});
client.on("messageCreate",message =>{
  if(message.content === "ping"){
    message.channel.send("Pong")
  }
  if(message.content === "Uepl"){
    let embed = new Discord.MessageEmbed()
    .setTitle("u/Uepl")

    .setAuthor("Uepl", "https://avatars.githubusercontent.com/u/92617912?s=400&u=b8575cfa785c7dfc99c14cb2ca1e98c07a66ddd9&v=4")
    .setURL("https://github.com/Uepl")
    .setDescription("my github")
    
    .setFooter("lel")
    .setColor("RED")
    .addField("I'm sleeping", "rn")

    message.channel.send({embeds : [ embed ]})
  }
})
client.login(process.env.token)

