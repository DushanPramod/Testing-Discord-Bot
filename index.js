require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("AA");
});

client.on("message", function (msg) {
  console.log(msg.content);
  if (msg.channel.id == "765229290354245655" && msg.content == "abc") {
    msg.reply("Hiiiiiiiii");
  }
});

// client.on("message", (msg) => {
//   if (msg.content === "ping") {
//     msg.reply("Pong!");
//   }
// });
