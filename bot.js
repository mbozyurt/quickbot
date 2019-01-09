const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Sunucumuza ${client.user.tag} giriş yaptı!`);
});
client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.channel.sendMessage('Selamlar!');
  }
  if (!msg.content.startsWith(prefix)) {
    return;
}
if (msg.content.toLowerCase() === prefix + 'abdest') {
  msg.reply('https://quickabdest.com/')
}
if (msg.content.toLowerCase() === prefix + 'ig') {
  msg.reply('https://instagram.com/mehmetberkozyurt')
}
if (msg.content.toLowerCase() === prefix + 'sc') {
  msg.reply ('https://soundcloud.com/mehmetberkozyurt')
}
});

client.login('NTI1NDYxMDMwMzI3ODEyMTEx.Dv2-Qg.L_9vzQ6TSnIGkH54R447IP13XTA');
