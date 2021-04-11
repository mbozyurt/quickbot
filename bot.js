const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');

var prefix = settings.prefix;

client.on('ready', () => {
  console.log(`Sunucumuza ${client.user.tag} giris yapti!`);
});
client.on('message', msg => {
  if (msg.content === '!komutlar') {
    msg.channel.sendMessage('Sadece tek bir komutum var :( - !abdest ');
  }
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  if (msg.content.toLowerCase() === prefix + 'abdest') {
    msg.channel.sendMessage('Galiba birilerinin abdest almaya ihtiyaci var o zaman: https://quickabdest.com/');
  }
});

client.on('ready', () => {
  client.user.setActivity('quickabdest', {
    type: 'watching'
  });
});

client.login(process.env.BOT_TOKEN);