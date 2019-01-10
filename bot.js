const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Sunucumuza ${client.user.tag} giri� yapt�!`);
});
client.on('message', msg => {
  if (msg.content === '!komutlar') {
    msg.channel.sendMessage('Sadece tek bir komutum var :( - !abdest ');
  }
  if (!msg.content.startsWith(prefix)) {
    return;
}
if (msg.content.toLowerCase() === prefix + 'abdest') {
  msg.channel.sendMessage('Galiba birilerinin abdest almaya ihtiyac� var o zaman: https://quickabdest.com/')
}
});

client.on('ready', () => {
client.user.setActivity('quickabdest', { type: 'watching' });
});

client.login(process.env.BOT_TOKEN);
