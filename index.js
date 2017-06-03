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
    "something": "Something"
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
        //-role (%RoleName%)
      case "role":
        if(availableRoles[args[1].toLowerCase()]){
        let role = message.guild.roles.find('name', availableRoles[args[1].toLowerCase()]);
        message.member.addRole(role ).catch(console.error);
        }
        break;
        //The Roles (%RoleName%)
      case "europe":
        let europe = message.guild.roles.find('name', 'Europe');
        message.member.addRole(europe) .then(() => 
        {message.channel.sendMessage("You have now entered Europe");}).catch(console.error)
        break;
}
});