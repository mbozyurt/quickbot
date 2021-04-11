const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "komutlar")) {
    msg.channel.send('Sadece tek bir komutum var :( - !abdest ');
  } else
  if (msg.content.startsWith(prefix + "abdest")) {
    msg.channel.send('Galiba birilerinin abdest almaya ihtiyaci var o zaman: https://quickabdest.com/');
  }
});

client.on("ready", () => {
  console.log("Ready");
  client.user.setActivity("!abdest");
});

client.login("NTI1NDYxMDMwMzI3ODEyMTEx.XBwruA.LuH5m9V1MSiVutep7UF1hl59BMA");