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
var moment = require('moment');
var momentTz = require('moment-timezone');

function test(){
    "use strict";
    let a = 1;
} 

const prefix = "-"
//Discord Login Token
client.login('');

//Terminal Ready Message
client.on('ready', () => {
  console.log('NOMAC is awake and fully operational!');
  
//Game Name (appears in the sidebar)
  client.user.setGame('v1.0 | -botinfo');
  
});
process.on("unhandledRejection", (err) => {
    console.error(`Uncaught Promise Rejection: \n${err.stack}`);
});

//Extra Files Required
var embed = require("./embeds.js");


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
  If you could type either -europe or -americas to set your region.
  After that, feel free to hang out with the other cool dudes on our server! #welcome has all of the information you should need.
  You can request help from the NOMAC by typing -help`);
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
    "drums": "Drums",

        };

    switch (args[0].toLowerCase()) {
     
      //Ping
      case "ping":
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
      //Avatar
      case "avatar":
        message.reply(message.author.avatarURL);
        break;

        //SELF APPLICABLE ROLES
        
        //Europe
      case "europe":
        let europe = message.guild.roles.find('name', 'Europe');
        message.member.addRole(europe) .then(m => message.reply("You are now a :flag_eu: citizen. Unless you're from :flag_gb: because BREXIT!")).catch(console.error);
        break;
        //Americas
      case "americas":
        let americas = message.guild.roles.find('name', 'Americas');
        message.member.addRole(americas) .then(m => message.reply('I flew around the globe and landed here! :earth_americas:')).catch(console.error);
        break;
        //Asia
      case "asia":
        let asia = message.guild.roles.find('name', 'Asia');
        message.member.addRole(asia) .then(m => message.reply("I flew around the globe in search of music and landed here! :earth_asia:")).catch(console.error);
        break;
        //Guitar
      case "guitar":
        let guitar = message.guild.roles.find('name', 'Guitar');
        message.member.addRole(guitar) .then(m => message.reply('<:petrucci_scare:293783989288828928> :guitar:')).catch(console.error);
        break;
        //Bass
      case "bass":
        let bass = message.guild.roles.find('name', 'Bass');
        message.member.addRole(bass) .then(m => message.reply('<:myung_uwotm8:293783987812565003> :guitar:')).catch(console.error);
        break;
        //Drums
      case "drums":
        let drums = message.guild.roles.find('name', 'Drums');
        message.member.addRole(drums) .then(m => message.reply('<:portnoy_stroke:293786431934038017> :drum:')).catch(console.error);
        break;
        //Keyboard
      case "keyboard":
        let keyboard = message.guild.roles.find('name', 'Keyboard/Piano');
        message.member.addRole(keyboard) .then(m => message.reply('<:rudess_yeo:293783985689985024> :musical_keyboard:')).catch(console.error);
        break;
        //Piano
      case "piano":
        let piano = message.guild.roles.find('name', 'Keyboard/Piano');
        message.member.addRole(piano) .then(m => message.reply('<:rudess_yeo:293783985689985024> :musical_keyboard:')).catch(console.error);
        break;
        //Vocals
      case "vocals":
        let vocals = message.guild.roles.find('name', 'Vocals');
        message.member.addRole(vocals) .then(m => message.reply('<:labrie_nightmare:293790537880961024> :microphone:')).catch(console.error);
        break;

        //stupid instrument that don't actually exist
      case "harmonica":
        message.reply("<:mangini_phonecall:293783988353368064> https://youtu.be/-w-58hQ9dLk?t=10s  <:mangini_phonecall:293783988353368064>");
        break;
      
      case "kazoo":
        message.reply("<:petrucci_ayy:293786431661539328> I like to sing... Dance... Pretend... annddddd..... https://www.youtube.com/watch?v=cRpdIrq7Rbo");
        break;

      case "cowbell":
        message.reply("I've got a fever, and the only prescription is https://www.youtube.com/watch?v=TklM2-lSby4");
        break;
      case "triangle":
        message.reply(":small_red_triangle: https://www.youtube.com/watch?v=RFakY9qS47E");
        break;

      case "deathgrowl":
        message.reply("<:portnoy_oh:293783988399767552> DAY AFTER DAY! https://www.youtube.com/watch?v=ltqQhXNA2KA AND NIGHT AFTER NIGHT! <:portnoy_oh:293783988399767552>");
        break;

      //END OF ROLES
        //OTHER COMMANDS BELOW

      case "botinfo":
        message.channel.sendEmbed(embed.infoEmbed);
        break;
      
      case "help":
      message.channel.sendEmbed(embed.helpEmbed);
      break;
     
      case "help2":
      message.channel.sendEmbed(embed.helpEmbedTwo);
      break;

    
      case "weeklylisten":
      message.channel.sendEmbed(embed.weeklyEmbed);
      break;

      case "sub":
      message.reply("http://reddit.com/r/dreamtheater");
      break;  

      case "subreddit":
      message.reply("http://reddit.com/r/dreamtheater");
      break

      case "instrumentlist":
      message.channel.sendEmbed(embed.helpEmbedInstrument);
      break;

      case "times":
        current_time = moment().format('MMMM Do YYYY, h:mm a');
        est = momentTz().tz("America/New_York").format('MMMM Do YYYY, h:mm a');
        pst = momentTz().tz("America/Los_Angeles").format('MMMM Do YYYY, h:mm a');
        mst = momentTz().tz("America/Boise").format('MMMM Do YYYY, h:mm a');
        nst = momentTz().tz("America/St_Johns").format('MMMM Do YYYY, h:mm a');
        cet = momentTz().tz("Europe/Stockholm").format('MMMM Do YYYY, h:mm a');
        gmt = momentTz().tz("Europe/Dublin").format('MMMM Do YYYY, h:mm a');
        ist = momentTz().tz("Asia/Kolkata").format('MMMM Do YYYY, h:mm a');
        ast = momentTz().tz("Asia/Qatar").format('MMMM Do YYYY, h:mm a');
        timesEmbed = new Discord.RichEmbed()
        .setColor(0x85171d)
        .setAuthor("Six O'Clock on a Christmas Morning", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
        .setThumbnail("https://openclipart.org/image/2400px/svg_to_png/217068/6oclock.png")
        .addField("CST (Central Standard Time)", current_time)
        .addField("EST (Eastern Standard Time)", est)
        .addField("PST (Pacific Standard Time)", pst)
        .addField("MST (Mountain Standard Time)", mst)
        .addField("NST (Newfoundland Standard Time)", nst)
        .addField("CET (Central European Time)", cet)
        .addField("GMT (Greenwich Mean Time)", gmt)
        .addField("IST (Indian Standard Time)", ist)
        .addField("AST (Arabia Standard Time)", ast)
        .setFooter("Don't see your timezone? Ping Mattheous to get yours added!")
        message.channel.sendEmbed(timesEmbed);
          break;

    case "lyrics":
      var paramInput1 = message.content.split(" ").slice(1);
          paramInput2 = paramInput1.join(" ");
          param = paramInput2.toUpperCase();
          
  //IMAGES AND WORDS
      if (param == "PULL ME UNDER"){
          message.channel.sendEmbed(embed.pmuEmbed);
        }
     
      else if (param == "ANOTHER DAY"){
          message.channel.sendEmbed(embed.adEmbed);
        }
      
      else if (param == "TAKE THE TIME" || param == "TTT"){
          message.channel.sendEmbed(embed.tttEmbed);
        }

      else if (param == "SURROUNDED"){
          message.channel.sendEmbed(embed.surroundedEmbed);
          message.channel.sendEmbed(embed.surroundedtwoEmbed);
        }

      else if (param == "METROPOLIS" || param == "METROPOLIS PART 1" || param == "METROPOLIS PT 1" || param == "METROPOLIS 1"){
          message.channel.sendEmbed(embed.metropolisEmbed);
        }

      else if (param == "UNDER A GLASS MOON" || param == "GLASS MOON"){
          message.channel.sendEmbed(embed.uagmEmbed);
        }

      else if (param == "WAIT FOR SLEEP" || param == "THAT SONG BEFORE LEARNING TO LIVE"){
          message.channel.sendEmbed(embed.wfsEmbed);
        }

      else if (param == "LEARNING TO LIVE" || param == "LTL" || param == "NATURES UNFLEXABLE GRACE"){
          message.channel.sendEmbed(embed.ltlEmbed);
        }

  //AWAKE
      else if (param == "6:00" || param == "6" || param == "6 OCLOCK" || param == "6 O'CLOCK"){
          message.channel.sendEmbed(embed.sixoclockEmbed);
        }

      else if (param == "CAUGHT IN A WEB"){
          message.channel.sendEmbed(embed.ciawEmbed);
      }
      
      else if (param == "INNOCENCE FADED"){
          message.channel.sendEmbed(embed.ifEmbed);
        }
         
      else if (param == "EROTOMANIA" || param =="EROTO" || param == "EROT"){
          message.channel.sendEmbed(embed.erotomaniaEmbed);
        }
         
      else if (param == "VOICES"){
          message.channel.sendEmbed(embed.voicesEmbed);
          message.channel.sendEmbed(embed.voicestwoEmbed);
        }
         
      else if (param == "THE SILENT MAN" || param == "SILENT MAN"){
          message.channel.sendEmbed(embed.tsmEmbed);
        }
         
      else if (param == "THE MIRROR" || param == "MIRROR" || param == "PUPPIES ON ACID"){
          message.channel.sendEmbed(embed.tmEmbed);
        }
         
      else if (param == "LIE"){
          message.channel.sendEmbed(embed.lieEmbed);
        }
         
      else if (param == "LIFTING SHADOWS OFF A DREAM"){
          message.channel.sendEmbed(embed.lsoadEmbed);
        }
         
      else if (param == "SCARRED"){
          message.channel.sendEmbed(embed.scarredEmbed);
          message.channel.sendEmbed(embed.scarred2Embed);
        }
        
      else if (param == "SPACE-DYE VEST" || param == "SPACE DYE VEST" || param== "SPACE DYE"){
          message.channel.sendEmbed(embed.sdvEmbed);
          message.channel.sendEmbed(embed.sdv2Embed);
        }

  //A CHANGE OF SEASONS
      else if (param == "A CHANGE OF SEASONS" || param == "CHANGE OF SEASONS" || param == "ACOS"){
          message.channel.sendEmbed(embed.acosoneEmbed);
          message.channel.sendEmbed(embed.acostwoEmbed);
          message.channel.sendEmbed(embed.acosthreeEmbed);
          message.channel.sendEmbed(embed.acosfourEmbed);
          message.channel.sendEmbed(embed.acosfiveEmbed);
          message.channel.sendEmbed(embed.acossixEmbed);
          message.channel.sendEmbed(embed.acossevenEmbed);          
        }

      else if (param == "A CHANGE OF SEASONS 1" || param == "CHANGE OF SEASONS 1" || param == "ACOS 1" || param == "THE CRIMSON SUNRISE" || param == "CRIMSON SUNRISE"){
          message.channel.sendEmbed(embed.acosoneEmbed);        
        }

      else if (param == "A CHANGE OF SEASONS 2" || param == "CHANGE OF SEASONS 2" || param == "ACOS 2" || param == "INNOCENCE"){
          message.channel.sendEmbed(embed.acostwoEmbed);        
        }

      else if (param == "A CHANGE OF SEASONS 3" || param == "CHANGE OF SEASONS 3" || param == "ACOS 3" || param == "CARPE DIEM"){
          message.channel.sendEmbed(embed.acosthreeEmbed);        
        }

      else if (param == "A CHANGE OF SEASONS 4" || param == "CHANGE OF SEASONS 4" || param == "ACOS 4" || param == "THE DARKEST OF WINTERS" || param == "DARKEST OF WINTERS"){
          message.channel.sendEmbed(embed.acosfourEmbed);        
        }

      else if (param == "A CHANGE OF SEASONS 5" || param == "CHANGE OF SEASONS 5" || param == "ACOS 5" || param == "ANOTHER WORLD"){
          message.channel.sendEmbed(embed.acosfiveEmbed);        
        }

      else if (param == "A CHANGE OF SEASONS 6" || param == "CHANGE OF SEASONS 6" || param == "ACOS 6" || param == "THE INEVITABLE SUMMER" || param == "INEVITABLE SUMMER"){
          message.channel.sendEmbed(embed.acossixEmbed);        
        }

      else if (param == "A CHANGE OF SEASONS 7" || param == "CHANGE OF SEASONS 7" || param == "ACOS 7" || param == "THE CRIMSON SUNSET" || param == "CRIMSON SUNSET" || param == "ACOS FINAL"){
          message.channel.sendEmbed(embed.acossevenEmbed);        
        }


      else{
          const errorEmbed = new Discord.RichEmbed()
          .setColor(0xDC143C)
          .setAuthor("Error!", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
          .setDescription("You entered an invalid parameter")
          .setFooter("Correct usage: -lyrics <dt song> | It is possible you made a typo somewhere. Check your original message.")
          message.channel.sendEmbed(errorEmbed);
      }
    }
  });