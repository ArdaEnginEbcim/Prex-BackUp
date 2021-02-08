const db = require("croxydb")
const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let yedekler = await db.get(`y_${message.author.id}`)
  let sj;
  if(!yedekler) {
    sj = "Yedeğin Bulunmamakta"
    } else {
      sj = yedekler.map(x => `**${x.id}**\n${x.adı} (\`${x.tarih}\`)\n`)
      }
  let embed = new dc.MessageEmbed()
  .setTitle("📄 Yedek Listesi")
  .setColor("GREEN")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL())
  .setDescription(sj)
  .setImage("https://cdn.discordapp.com/attachments/796027165870784562/796097183753043998/20210105_222533.jpg")
  message.channel.send(embed)
  }