//Import the required modules
const Discord = require('discord.js');
const request = require('request');
const async = require('async');
const client = new Discord.Client();
const token = 'token';
const key = 'musixmatchkey';
const prefix = "!"
//Discord Login Token
client.login(token);

//Terminal Ready Message
client.on('ready', () => {
  console.log('NOMAC is awake and fully operational!');
  
//Game Name (appears in the sidebar)
client.user.setGame("Salies' Beta");

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

client.on("message", function(message) {
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
    //instead of setting the prefix each time, do this instead
    var args = message.content.substring(prefix.length).split(" ");
    console.log(args);
    //simple commands
    switch (args[0].toLowerCase()) {
        case "ping": //ping command
            message.reply(args[0]);
            var startTime = Date.now();
            const pingEmbed = new Discord.RichEmbed()
            .setColor(0x85171d)
            .setAuthor("Pong, my man!", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
            .setDescription("Time taken : ")
            message.channel.sendEmbed(pingEmbed).then((m) => {
                m.delete();
                pingEmbed.setDescription('Time taken : ' + Math.floor(Date.now() - startTime) + ' ms.');
                pingEmbed.addField('Websocket Response Time : ' , Math.floor(client.ping) + "ms")
                message.channel.sendEmbed(pingEmbed)
            });
        break;
      
        case "avatar": //avatar
            message.reply(message.author.avatarURL);
        break;

        case "help":
            message.channel.send(
                new Discord.RichEmbed()
                .setColor(0x85171d)
                .setAuthor("NOMAC // Commands", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
                .setThumbnail("https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png")
                .addField("ping", "Pong!")
                .addField("botinfo", "Displays a short description of the bot")
                .addField("lyrics", "Displays lyrics for the song. Usage: -lyrics <song name>")
                .addField("help", "Type this if you want to cause inception")
                .addField("times", "Displays a list of times in different timezones.")
                .addField("europe, americas, oceania, africa or asia", "Choose your region")
                .addField("<instrument>", "Type -instrumentlist list of variables")
                .addField("instrumentlist", "I just explained what this does, Do you listen?")
                .setFooter("Page 1 of 2 :: Use -help2 to view page 2 (Non serious commands)")
            );
    }

    //self-applicable roles
    if(args[0]=='role'){
        if(args[1]!=undefined){
            let validRoles = ['americas','europe','asia','oceania','africa','bass','guitar','keyboard','vocals','drums', 'piano'];
            let world = (args[1].toLowerCase()).charAt(0).toUpperCase() + args[1].slice(1);
            let roles = {
                'americas':'I flew around the globe and landed here! :earth_americas:',
                'europe':"You are now a :flag_eu: citizen. Unless you're from :flag_gb: because BREXIT!",
                'asia':"I flew around the globe in search of music and landed here! :earth_asia:",
                'oceania':':ocean: ia, yay',
                'africa':"I flew around the globe in search of music and landed here! :earth_africa:",
                'guitar':'<:petrucci_scare:293783989288828928> :guitar:',
                'bass':'<:myung_uwotm8:293783987812565003> :guitar:',
                'drums':'<:portnoy_stroke:293786431934038017> :drum:',
                'keyboard':'<:rudess_yeo:293783985689985024> :musical_keyboard:',
                'piano':'<:rudess_yeo:293783985689985024> :musical_keyboard:',
                'vocals':'<:labrie_nightmare:293790537880961024> :microphone:'
            };

            if(!validRoles.includes(args[1].toLowerCase())){
                message.reply("This role is not self applicable.")
            }
            else{
                let r_mes = eval(`roles.${args[1].toLowerCase()}`);
                message.member.addRole(message.guild.roles.find('name', world)).then(m => message.reply(r_mes)).catch(console.error);
            }
        }

        else{
            message.reply("Role help message.")
        }
    }

    //lyrics
    if(args[0]=='lyrics'){
            if(args[1] === undefined){return;}
            var song_input = args[1].toLowerCase();
            for(i=2;i<args.length;i++){
                song_input += ` ${args[i]}`.toLowerCase();
            }
            let bad_songs = ['regression', 'overture 1928', 'strange deja vu', 'through my words', 'fatal tragedy', 'beyond this life', 'through her eyes', 'home', 'the dance of eternity', 'one last time', 'the spirit carries on', 'finally free'];
            let instrumentals = ['eve', 'the ytse jam', 'ytse jam', 'erotomania', "hell's kitchen", 'bombay vindaloo', 'stream of consciousness', 'enigma machine', 'raw dog', 'false awakening suite'];
            let bad_eq = [
                ['sceneoneregression', 'Act I: Scene One: Regression'],
                [false, 'Act I: Scene Two: I. Overture 1928'],
                ['iistrangedejavu', 'Act I: Scene Two: II. Strange Déjà Vu'],
                ['scenethreeithroughmywords', 'Act I: Scene Three: I. Through My Words'],
                ['iifataltragedy', 'Act I: Scene Three: II. Fatal Tragedy'],
                ['scenefourbeyondthislife', 'Act I: Scene Four: Beyond This Life'],
                ['through her eyes', 'Act I: Scene Five: Through Her Eyes '],
                ['scenesixhome', 'Act II: Scene Six: Home'],
                [false, 'Act II: Scene Seven: I. The Dance of Eternity'],
                ['iionelasttime', 'Act II: Scene Seven: II. One Last Time'],
                ['sceneeightthespiritcarrieson', 'Act II: Scene Eight: The Spirit Carries On'],
                ['sceneninefinallyfree', 'Act II: Scene Nine: Finally Free'],
            ];

            var musix_song = song_input;
            var az_song = song_input.replace(/ /g,'');

            for(i=0;i<bad_songs.length;i++){
                if(song_input == bad_songs[i]){
                    var musix_song = bad_eq[i][1];
                    var az_song = bad_eq[i][0];
                }
            }

            for(i=0;i<instrumentals.length;i++){
                if(song_input == instrumentals[i]){
                    var az_song = false;
                }
            }

            async.waterfall([
                function(callback) {
                    var m_url = `http://api.musixmatch.com/ws/1.1/track.search?apikey=${key}&q_artist=dream%20theater&q_track=${musix_song}`;
                    request(m_url, function(error, response, res) {
                        let result = JSON.parse(res);
                        if(result.message.header.available==0){
                            return;
                        }else{
                        var minfo = {
                            name:result.message.body.track_list[0].track.track_name,
                            album_name:result.message.body.track_list[0].track.album_name,
                            date:result.message.body.track_list[0].track.first_release_date
                        }
                        callback(null, minfo)
                        }
                    });
                }
            ], function (err, result) {
                let date = new Date(result.date).getFullYear() + 1;

                var covers = [
                    ['When Dream and Day Unite','https://i.imgur.com/5RHSiJH.jpg'],
                    ['Images And Words','https://imgur.com/o9szaWE.jpg'],
                    ['Images and Words','https://imgur.com/o9szaWE.jpg'],
                    ['Awake','https://i.imgur.com/7swxyDp.jpg'],
                    ['A Change of Seasons','https://upload.wikimedia.org/wikipedia/pt/7/7c/220px-Dtheater-change-seasons.jpg'],
                    ['Falling Into Infinity','https://i.imgur.com/0ecx5Q0.png'],
                    ['Cleaning Out the Closet','https://i.imgur.com/UnizVB6.png'],
                    ['Score: 20th Anniversary World Tour - Live With the Octavarium Orchestra','https://imgur.com/AxxMPqM.jpg'],
                    ['Metropolis, Part 2: Scenes From a Memory','https://imgur.com/lSY0v4R.png'],
                    ['Six Degrees of Inner Turbulence','https://upload.wikimedia.org/wikipedia/pt/1/15/220px-Dream_Theater_-_Six_Degrees_of_Inner_Turbulence.jpg'],
                    ['Train of Thought','https://i.imgur.com/FE0thyp.png'],
                    ['Octavarium','https://upload.wikimedia.org/wikipedia/en/9/96/Dream_Theater_-_Octavarium.jpg'],
                    ['Systematic Chaos','https://upload.wikimedia.org/wikipedia/en/e/e3/Dream_Theater_-_Systematic_Chaos.jpg'],
                    ['Black Clouds & Silver Linings','https://upload.wikimedia.org/wikipedia/en/7/7d/Dream_Theater_-_Black_Clouds_%26_Silver_Linings.jpg'],
                    ['A Dramatic Turn of Events','https://upload.wikimedia.org/wikipedia/en/7/7d/Dream_Theater_-_Black_Clouds_%26_Silver_Linings.jpg'],
                    ['Dream Theater','https://upload.wikimedia.org/wikipedia/pt/b/be/Dreamtheater2013.jpg'],
                    ['The Astonishing','https://upload.wikimedia.org/wikipedia/pt/8/87/Dream-Theater-The-Astonishing.jpg']
                ];

                var cover = '';
                for(i=0;i<covers.length;i++){
                    if(result.album_name == covers[i][0]){
                        console.log("foi")
                        cover = covers[i][1]
                    }
                }

                function print_lyrics(music){
                    var lyricEmbed = module.exports.lyricEmbed = new Discord.RichEmbed()
                    .setColor(0x85171d)
                    .setAuthor(`NOMAC // ${result.name}`, 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
                    .setThumbnail(cover)
                    .setDescription(`\n${music}`)
                    .setFooter(`${result.album_name} | ${date}`);

                    message.channel.send(lyricEmbed);
                }

                if(az_song === false){
                    print_lyrics('(Instrumental)');
                    return;
                }
                else{
                    let lyric_url = `https://www.azlyrics.com/lyrics/dreamtheater/${az_song}.html`;
                    request(lyric_url, function(error, response, res) {
                        if(error!==null){return;}
                        if(res.includes('Welcome to AZLyrics!')===true){
                            return;
                        }
                        var l = (((((((res.split('<!-- Usage of azlyrics.com content by any third-party lyrics provider is prohibited by our licensing agreement. Sorry about that. -->').pop()).split("<!-- MxM banner -->")[0])).replace(/<br>/g,'')).replace('</div>', '')).replace(/&quot;/g, '"')).replace(/^\s+|\s+$/g, '').replace(/<(\/)?i([^>]*)>/g, ''));

                        if(l.length > 2048){
                            let l_red = l.substring(0,1900) + '...\n\n**Full lyrics:** ' + lyric_url;
                            print_lyrics(l_red);
                        }
                        else{
                            print_lyrics(l);
                        }
                    });
                }

            });        
    }
});
