/*
NOMAC bot created specifically for the /r/DreamTheater discord
Coded with love by Mattheous

Using the lovely and quite annoying discord.js repo

With help from these awesome dudes:
@Windsdon
@Salies

QUICK COPY LINKS
FRONT NOMAC: https://b.thumbs.redditmedia.com/4b3mZRPvyN3LDEMcXt6cJNVKxQdZLo_m9z0Q-cfKF4I.png
SIDE NOMAC : https://b.thumbs.redditmedia.com/NAQCFZnuFZ-Le1K7Y1gXAqfgNnXggxN-HWzXWc3zFYA.png
*/


//Import the required modules
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-"
//Discord Login Token
client.login('');

//Terminal Ready Message
client.on('ready', () => {
  console.log('NOMAC is awake and fully operational!');
  
//Game Name (appears in the sidebar)
  client.user.setGame('PRE PRE ALPHA');
  
});
process.on("unhandledRejection", (err) => {
    console.error(`Uncaught Promise Rejection: \n${err.stack}`);
});

//Connection Messages
client.on('disconnect', () => {
  console.log('Track 33: Power Down');
})

client.on('error', () => {
  console.log('Track 29: Losing Faythe');
})

client.on('reconnecting', () => {
  console.log('Track 24: Begin Again');
})

// Create an event listener for new server members
client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find('name', 'discussion');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome ${member} to the /r/DreamTheater Discord server! I hope you will enjoy your stay here. 
  If you could write down what region you are from and if you play an instrument, 
  a moderator will assign those roles for you. 
  After that, feel free to hang out with the other cool dudes on our server!`);
});

client.on

client.on("message", function(message) {
  if (message.author.equals(client.user)) return;

  if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    //Allow Lower or Upper Case for the roles
    var availableRoles = {
    "europe": "Europe",
    "americas": "Americas",
    "guitar": "Guitar",
    "bass": "Bass",
    "keyboard": "Keyboard",
    "vocals": "Vocals",

        };

    switch (args[0].toLowerCase()) {
     
      case "ping": //ping command
        var startTime = Date.now();
        const pingEmbed = new Discord.RichEmbed()
        .setColor(0x85171d)
        .setAuthor("Pong, my man!", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
        .setDescription("Time taken : ")
        message.channel.sendEmbed(pingEmbed).then((m) => {
        m.delete()
        pingEmbed.setDescription('Time taken : ' + Math.floor(Date.now() - startTime) + ' ms.');
        pingEmbed.addField('Websocket Response Time : ' , Math.floor(client.ping) + "ms")
        message.channel.sendEmbed(pingEmbed)});
        break;
      
      case "avatar": //avatar
        message.reply(message.author.avatarURL);
        break;

        //SELF APPLICABLE ROLES
        
        //Europe
      case "europe":
        let europe = message.guild.roles.find('name', 'Europe');
        message.member.addRole(europe) .then(m => message.reply('You are now a :flag_eu: citizen. Unless your from :flag_uk: because BREXIT!')).catch(console.error);
        break;
        //Americas
      case "americas":
        let americas = message.guild.roles.find('name', 'Americas');
        message.member.addRole(americas) .then(m => message.reply('You are now from somewhere in the region of :flag_us: :flag_ca: and :flag_br:. There are too many flags to list')).catch(console.error);
        break;
        //Guitar
      case "guitar":
        let guitar = message.guild.roles.find('name', 'Guitar');
        message.member.addRole(guitar) .then(m => message.reply(':petrucci_scare: :guitar:')).catch(console.error);
        break;
        //Bass
      case "bass":
        let bass = message.guild.roles.find('name', 'Bass');
        message.member.addRole(bass) .then(m => message.reply(':myung_uwotm8: :guitar:')).catch(console.error);
        break;
        //Keyboard/Piano
      case "keyboard":
        let keyboard = message.guild.roles.find('name', 'Keyboard');
        message.member.addRole(keyboard) .then(m => message.reply(':rudess_yeo: :musical_keyboard:')).catch(console.error);
        break;
        //Vocals
      case "vocals":
        let vocals = message.guild.roles.find('name', 'vocals');
        message.member.addRole(vocals) .then(m => message.reply(':labrie_nightmare: :microphone:')).catch(console.error);
        break;
} 
});
