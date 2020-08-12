require('dotenv').config();

const { prefix } = require('./config.json');

const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

bot.on('ready',() =>{console.log(`${bot.user.tag} is ready for work`)});

bot.on('message',
async msg =>
{
    if (msg.content.startsWith(`${prefix}info`))
    {
        const info = new MessageEmbed()
            .setColor('BLACK')
            .setTitle('gochelias.com')
            .setURL('https://gochelias.com/')
            .addField('GitHub', '[@gochelias](https://github.com/gochelias)', true)
            .addField('CodePen', '[@gochelias](https://codepen.io/gochelias)', true)
            .addField('Instagram', '[@gochelias](https://www.instagram.com/gochelias/)', true)
            .setImage('https://avatars3.githubusercontent.com/u/56095957?s=460&u=cee3a2b23826a7d286d88bd9c64405fdbda83d56&v=4');
            msg.channel.send(info);
    }

    if (msg.content.startsWith(`${prefix}clear`))
    {
        const clear = await msg.channel.messages.fetch({ limit: 100 })
        msg.channel.bulkDelete(clear);
        console.log('✅ Deleted messages');
    }
});

bot.login(process.env.BOT_TOKEN);