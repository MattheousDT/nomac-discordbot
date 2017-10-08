const Discord = require("discord.js");

//Bot info embed
module.exports.infoEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor(`NOMAC : The Astonishing's Cute Mascot`, 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setThumbnail('https://b.thumbs.redditmedia.com/4b3mZRPvyN3LDEMcXt6cJNVKxQdZLo_m9z0Q-cfKF4I.png')
.setTitle('Your all purpose Dream Theater Bot! Crafted with love by Mattheous. ♥')
.setDescription("-help for a list of commands")
.setFooter("Additional credit : Salies for co-developing NOMAC and Sabbath for the lovely lyrics")

//Weekly Listen embed
module.exports.weeklyEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor(`Weekly Listen 24/06`, 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setThumbnail('http://www.beprogmyfriend.com/17/wp-content/uploads/2016/10/noticia_mikeportnoy_2.jpg')
.setTitle(`Dream Theater: 12 Step Suite`)
.setDescription(`To celebrate MP's Shattered Fortress tour commencing.

Featuring: The Glass Prison, This Dying Soul, Root of All Evil, Repentance and The Shattered Fortress.

**10pm BST/5pm EST**`)
.setFooter("You can check all times by typing -times")

//Help Embeds
module.exports.helpEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Commands", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setThumbnail("https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png")
.addField("ping", "Pong!")
.addField("botinfo", "Displays a short description of the bot")
.addField("lyrics", "Displays lyrics for the song. Usage: -lyrics <song name>")
.addField("help", "Type this if you want to cause inception")
.addField("times", "Displays a list of times in different timezones.")
.addField("europe, americas or asia", "Choose your region")
.addField("<instrument>", "Type -instrumentlist list of variables")
.addField("instrumentlist", "I just explained what this does, Do you listen?")
.setFooter("Page 1 of 2 :: Use -help2 to view page 2 (Non serious commands)")

module.exports.helpEmbedTwo = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Commands", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setThumbnail("https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png")
.addField("deathgrowl", "DAY AFTER DAY!")
.addField("harmonica", "*Jurassic Park theme insues*")
.addField("kazoo", "I like to have fun fun FUN FUN")
.addField("triangle", "Illuminati Confirmed")


module.exports.helpEmbedInstrument = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Instrument Commands", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setThumbnail("https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png")
.addField("Guitar", "You become the Petruccinator")
.addField("Bass", "You become one with Ying and Yang")
.addField("Drums", "Mike is better than Mike")
.addField("Keyboard", "You become a wizard, Harry!")
.addField("Vocals", "You unleash a banshee scream")
.setFooter("Note: These commands are not case sensitive")

//Lyric Inbeds

//Images and Words

//Pull Me Under     
module.exports.pmuEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Pull Me Under", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=SGRgAULYgWE')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
Lost in the sky
Clouds roll by and I roll with them
Arrows fly
Seas increase and then fall again
This world is spinning around me
This world is spinning without me
And every day sends future to past
Every breath leaves one less to my last

Watch the sparrow falling
Gives new meaning to it all
If not today nor yet tomorrow
Then some other day

I'll take seven lives for one
And then my only father's son
As sure as I ever did love him
I am not afraid

This world is spinning around me
The whole world is spinning around me
All life is future to past
Every breath leaves me one less to my last
I wanna give you that's line with this one

Pull me under, pull me under
Pull me under I'm not afraid
All that I feel is honor and spite
All I can do is set it right

Dust fills my eyes
Clouds roll by and I roll with them
Centuries cry
Orders fly and I fall again

This world is spinning inside me
The whole world is spinning inside of me
Every day sends future to past
Every step brings me closer to my last

Pull me under, pull me under
Pull me under I'm not afraid
Living my life too much in the sun
Only until your will is done

Pull me under, pull me under
Pull me under I'm not afraid
All that I feel is honor and spite
All I can do is set it right

Pull me under, pull me under
Pull me under I'm not afraid
Living my life too much in the sun
Only until your will is done

Oh that this too
Too solid flesh would melt`)
.setFooter('Lyrics by Kevin Moore | Images and Words | 1992')

//Another Day
module.exports.adEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Another Day", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=mGMKm2BBeoo')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
Live another day
Climb a little higher
Find another reason to stay
Ashes in your hands
Mercy in your eyes
If you're searching for a silent sky

You won't find it here
Look another way
You won't find it here
So die another day

The coldness of his words
The message in his silence
"Face the candle to the wind"
The distance in my voice
Isn't leaving you a choice
So if you're looking for a time to run away

You won't find it here
Look another way
You won't find it here
So try another day

They took pictures of our dreams
Ran to hide behind the stairs
And said maybe when it's right for you, they'll fall

But if they don't come down
Resist the need to pull them in
And throw them away
Better to save the mystery
Than surrender to the secret
No!

You won't find it here
Look another way
You won't find it here
So try another day`)
.setFooter('Lyrics by John Petrucci | Images and Words | 1992')

//Take The Time
module.exports.tttEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Take The Time", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=XvUzTheN-J0')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
Just let me catch my breath...
I've heard the promises
I've seen the mistakes
I've had my fair share of tough breaks
I need a new voice, a new law, a new way
Take the time, reevaluate
It's time to pick up the pieces,
Go back to square one
I think it's time for a change

There is something that I feel
To be something that is real
I feel the heat within my mind
And craft new changes with my eyes
Giving freely wandering promises
A place with decisions I'll fashion
I won't waste another breath

You can feel the waves coming on
(It's time to take the time)
Let them destroy you or carry you on
(It's time to take the time)
You're fighting the weight of the world
But no one can save you this time
Close your eyes
You can find all you need in your mind

The unbroken spirit
Obscured and disquiet
Finds clearness this trial demands
And at the end of this day sighs an anxious relief
For the fortune lies still in his hands

If there's pensive fear, a wasted year
A man must learn to cope
If his obsession's real,
Suppression that he feels must turn to hope

Life is no more assuring than love
(It's time to take the time)
There are no answers from voices above
(It's time to take the time)
You're fighting the weight of the world
And no one can save you this time
Close your eyes
You can find all you need in your mind

I close my eyes
And feel the water rise around me
Drown the bead of time
Let my senses fall away
I can see much clearer now,
I'm blind

You can feel the waves coming on
(It's time to take the time)
Let them destroy you or carry you on
(It's time to take the time)
You're fighting the weight of the world
But no one can save you this time
Close your eyes
You can find all you need in your mind

Find all you need in your mind
If you take the time
Find all you need in your mind
If you take the time
`)
.setFooter('Lyrics by Portnoy, Petrucci, Moore and Myung | Images and Words | 1992')

//Surrounded
module.exports.surroundedEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Surrounded", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=yVrJlPiyX_s')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
Morning comes too early
and nighttime falls too late
And sometimes all I want to do
is wait
The shadow I've been hiding in
has fled from me today

I know it's easier to walk away
than look it in the eye
But I will raise a shelter to the sky
and here beneath this
star tonight I'll lie
She will slowly yield the light
As I awaken from the longest
night

Dreams are shaking
Set sirens waking up tired eyes
With the light the memories
all rush into his head

By a candle stands a mirror
Of his heart and soul she
dances
She was dancing thru the night
above his bed

And walking to the window
he throws the shutters out
against the wall
And from an ivory tower hears
her call
"Let light surround you"

It's been a long, long time
He's had a while to think it over
In the end he only sees the
change
Light to dark, Dark to light
Light to dark, Dark to light
`)
.setFooter('Lyrics by Kevin Moore | Images and Words | 1992')
//Surrounded 2
module.exports.surroundedtwoEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Surrounded", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=yVrJlPiyX_s')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
Heaven must be more than this
When angels waken with a kiss
Sacred hearts won't take the
pain
But mine will never be the same

He stands before the window
His shadow slowly fading from
the wall
And from an ivory tower hears
her call
"Let the light surround you"

Once lost but I was found
When I heard the stained glass
shatter all around me
I sent the spirits tumbling
down the hill
But I will hold this one on high
above me still
She whispers words to clear my mind
I once could see but now at last
I'm blind

I know it's easier to walk away
than look it in the eye
But I had given all that
I could take
And now I've only habits left
to break
Tonight I'll still be lying here
Surrounded in all the light
`)
.setFooter('Lyrics by Kevin Moore | Images and Words | 1992')            

//Metropolis Part 1
module.exports.metropolisEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Metropolis—Part I: 'The Miracle and the Sleeper'", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=kKAkreYSns4')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
The smile of dawn arrived early May she carried a gift from her home
The night shed a tear to tell her of fear and of sorrow and pain she'll never outgrow
Death is the first dance, eternal

There's no more freedom
The both of you will be confined to this mind

I was told there's miracle for each day that I try
I was told there's a new love that's born for each one that has died
I was told there'd be no one to call on when I feel alone and afraid
I was told if you dream of the next world
You'll find yourself swimming in a lake of fire
As a child, I thought I could live without pain without sorrow
As a man I've found it's all caught up with me I'm asleep yet I'm so afraid

Somewhere like a scene from a memory
There's a picture worth a thousand words
Eluding stares from faces before me
It hides away and will never be heard of again
Deceit is the second without end
The city's cold blood teaches us to survive
Just keep my heart in your eyes and we'll stay alive the third arrives

Before the leaves have fallen before we lock the doors there must be the third and last dance
This one will last forever Metropolis watches and thoughtfully smiles she's taken you to your home
It can only take place when the struggle between our children has ended
Now the Miracle and the Sleeper know that the third is love Love is the Dance of Eternity
`)
.setFooter('Lyrics by John Petrucci | Images and Words | 1992')

//Under a Glass Moon
module.exports.uagmEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Under a Glass Moon", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=JEKTNtmKZEw')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
Tell me
Remind me
Chase the water racing from
the sky
Always beside me
Taste the memories running
from my eyes
Nervous flashlights scan my
dreams
Liquid shadows silence their
screams
I smile at the moon
Chasing water from the sky
I argue with the clouds
Stealing beauty from my eyes

Outside the soundness of your
mind
Bathing your soul in silver tears
Beneath a blackened summer sky
Praying for time to disappear

Beneath a summer sky
Under glass moonlight
Night awaits the lamb's arrival
Liquid shadows crawl
Silver teardrops fall
The bride subsides to her
survival

By your hand
I've awakened
Bear this honor in my name
`)
.setFooter('Lyrics by John Petrucci | Images and Words | 1992')

//Wait for Sleep
module.exports.wfsEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Wait For Sleep", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=OynRoSnDxkQ')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
Standing by the window
Eyes upon the moon
Hoping that the memory
will leave his spirit soon

She shuts the doors and lights
And lays her body on the bed
Where images and words are
running deep
She has too much pride to pull
the sheets above her head
So quietly she lays and waits
for sleep

She stares at the ceiling
And tries not to think
And pictures the chains
She's been trying to link again
But the feeling is gone

And water can't cover her
memory
And ashes can't answer her
pain
God give me the power to take
breath from a breeze
And call life from a cold metal
frame

In with the ashes
Or up with the smoke from the
fire
With wings up in heaven
Or here, lying in bed
Palm of her hand to my head
Now and forever curled in my
heart
And the heart of the world
`)
.setFooter('Lyrics by Kevin Moore | Images and Words | 1992')

//Learning to Live
module.exports.ltlEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Learning to Live", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=1VigPPJ6j40')
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/8/8d/Dream_Theater_-_Images_and_Words.jpg")
.setDescription(`
There was no time for pain
No energy for anger
The sightlessness of hatred
slips away
Walking through winter streets
alone
He stops and take a breath
With confidence and self-
control

I look at the world and see no
understanding
I'm waiting to find some sense
of strength
I'm begging you from the
bottom of my heart to show
me understanding

I need to live life
Like some people never will
So find me kindness
Find me beauty
Find me truth
When temptation brings me to
my knees
And I lay here drained of
strength
Show me kindness
Show me beauty
Show me truth

The way your heart sounds
makes all the difference
It's what decides if you'll endure
the pain that we all feel
The way your heart beats
makes all the difference
In learning to live
Here before me is my soul
I'm learning to live
I won't give up
Till I've no more to give

Listening to the city
Whispering its violence
I set out watching from above
The 90s bring new questions
New solutions to be found
I fell in love to be let down

Once again we dance in the
crowd
At times a step away
From a common fear that's all
spread out
It won't listen to what you say
Once you're touched you stand
alone
To face the bitter fight
Once I reached for love
And now I reach for life

Another chance to lift my life
Free the sensation in my heart
To ride the wings of dreams
into changing horizons
It brings inner peace within my
mind,
As I'm lifted from where I've
spilt my life
I hear an innocent voice
I hear kindness, beauty and
truth

The way your heart sounds
makes all the difference
It's what decides if you'll endure
the pain that we all feel
The way your heart beats
makes all the difference
In learning to live
Spread before you is your soul
So forever hold the dreams
within our hearts
Through nature's inflexible
grace
I'm learning to live
`)
.setFooter('Lyrics by John Myung | Images and Words | 1992')

//Awake

//6:00
module.exports.sixoclockEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // 6:00", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=yz7bxTBhtVo') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
[Samples from the film "The Dead", an adaptation of James Joyce's short story from his book] 
"Six o'clock on a Christmas morning..."
"And for what?"
"Well, isn't it for the honor of God, Aunt Kate?"
"I know all about the honor of God, Mary Jane."

Six o'clock the siren kicks him from a dream
Tries to shake it off but it just won't stop
Can't find the strength but he's got promises to keep
And wood to chop before he sleeps

I may never get over
but never's better than now
I've got bases to cover

He's in the parking lot and he's just sitting in his car
It's nine o'clock but he can't get out
He lights a cigarette
and turns the music down
but just can't seem to shake that sound

Once I thought I'd get over
but it's too late for me now
I've got bases to cover

Melody walks through the door
and memory flies out the window
and nobody knows what they want
'til they finally let it all go

The pain inside
coming outside

So many ways to drown a man
So many ways to drag him down
Some are fast and some take years and years
Can't hear what he's saying when he's talking in his sleep
He finally found the sound but he's in too deep

I could never get over
Is it too late for me now?
Feel like blowing my cover

Melody walks through the door
and memory flies out the window
and nobody knows what they want
'til they finally let it all go

But don't cut your losses too soon
'cause you'll only be cutting your throat
And answer a call while you still hear at all
'cause nobody will if you won't
`)

.setFooter('Lyrics by Kevin Moore | Awake | 1994')

//Caught in a Web
module.exports.ciawEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Caught In A Web", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=gO1w1Rrcuu8') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
Silence disguised
I watch you
Show me the hurt
that haunts you
would you despise the thrill
If all you hide were mine?

I can't hold on any longer
These feelings keep growing stronger
Echoes that deafen the mind
will bury my voice in their wake

Caught in a Web
Removed from the world
Hanging on by a thread
Spinning the lies
devised in my head

I've seen the path
the one you take
shows the truth
for you to make
This turn of phrase
we might not see
is the thirst of desire
found so easily

Try to push me 'round
the world some more
And make me live in fear
I bare all that I am
made of now
Attractive I don't care
'Cause even when I danced with life
no one was there to share

Does this voice the wounds of your soul?
Does this voice the wounds of your soul?

Caught in a Web
Removed from the world
Hanging on by a thread
Spinning the lies
devised in my head

Tried to live the life
you live and saw
It doesn't work for me
I bare all that I am
made of now
Attractive, I can't be
Inside the Dance of Life is one
I'll never hold to me

You can't heal the wounds of my soul.
You can't heal the wounds of my soul.

Caught in a Web
Removed from the world
Hanging on by a thread
Spinning the lies
devised in my head

Caught in a Web
Refused by the world
Hanging on by a thread
Spinning a cage
Denied and misread
`)
.setFooter('Lyrics by James LaBrie and John Petrucci | Awake | 1994')

//Innocence Faded
module.exports.ifEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Innocence Faded", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=OeU6Sw_1dBA') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
Animation
breathes a cloudless mind
Fascination
leaves the doubting blind
Until the circle breaks and wisdom lies ahead
the faithful live Awake
the rest remain misled

Some will transcend spinning years
One as if time disappears

Innocence faded
the mirror falls behind you
Trinity jaded
I break down walls to find you

Callow and vain
fixed like a fossil, shrouding pain
Passionless stage
Distant like brothers
Wearing apathetic displays
Sharing flesh like envy in cages
Condescending
Not intending to end

Some will transcend spinning years
One as if time disappears

Innocence faded
the mirror falls behind you
Trinity jaded
I break down walls to find you

Beginnings get complicated
the farther we progress
Opinions are calculated
Immune to openness

Beyond the circle's edge
We're driven by her blessings
Forever hesitating
Caught beneath the wheel

Innocence faded
the mirror falls behind you
Cynically jaded
The child will crawl to find you.
`)
.setFooter('Lyrics by John Petrucci | Awake | 1994') 

//Erotomania
module.exports.erotomaniaEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Erotomania", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=V3JQyV4dUKM') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
A Mind Beside Itself. I

dah dah dah dah dah dah dah dah
dah dah dah dah dah dah dah dah
`)
.setFooter('Lyrics by John Myung | Awake | 1994') 

//Voices
module.exports.voicesEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Voices", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=JDGSvbpB9Kg') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
A Mind Beside Itself. II
'Love, just don't stare'
He used to say to me
every Sunday morning
The spider in the window
The angel in the pool
The old man takes the poison
Now the widow makes the rules

'So speak, I'm right here'
She used to say to me
not a word, not a word
Judas on the ceiling
the Devil in my bed
I guess Easter's never coming
So I'll just wait inside my head

Like a scream but sort of silent
living off my nightmares

Voices repeating me
'Feeling threatened?
We reflect your hopes and fears.'
Voices discussing me
'Others steal your thoughts
they're not confined
within your mind.'

Thought disorder
Dream control
Now they read my mind on the radio
But where was the Garden of Eden?

I feel elated
I feel depressed
Sex is death, Death is sex
Says it right here on my Crucifix

Like a scream but sort of silent
living off my nightmares

Voices protecting me
'Good behavior
brings the Savior
to his knees.'
Voices rejecting me
'Others steal your thoughts
they're not confined
to your own mind.'
`)
.setFooter('Lyrics by John Petrucci | Awake | 1994') 

//Voices 2
module.exports.voicestwoEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Voices part 2", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png')
.setURL('https://www.youtube.com/watch?v=JDGSvbpB9Kg') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
[Dialogue by rap artist Prix-mo reading from the book "Cultural Revolution".]
"I don't wanna be here, 'cause of my
suffering, 'cause of my illness.
Only love is worth having, only
love is what matters, loving every 
people on equal terms. "
"You've got to know who you're 
dealin' with because, like a stranger, 
a-heh, just might come in through
here with a gun... and then, what 
would you do? (Heh.)"
"Everything is immaterial..."
"'n' you know that reality is immaterial."
"This is not reality..."

I'm kneeling on the floor
staring at the wall
like the spider in the window
I wish that I could speak
Is there fantasy in refuge?
God in politicians?
Should I turn on my religion?
These demons in my head tell me to

I'm lying here in bed
Swear my skin is inside out
Just another Sunday morning

Seen my diary on the newsstand
Seems we've lost the truth to quicksand
It's a shame no one is praying
'Cause these voices in my head
keep saying...

'Love, just don't stare.'
'Reveal the Word when you're
supposed to'
Withdrawn and introverted
Infectiously perverted
'Being laughed at and confused
keeps us pleasantly amused
enough to stay.'

Maybe I'm just Cassandra fleeting
Twentieth century Icon bleeding
Willing to risk Salvation
to escape from isolation

I'm witness to redemption
heard you speak but never listened
Can you rid me of my secrets?
Deliver us from Darkness?

Voices repeating me
'Feeling threatened?
We reflect your hopes and fears.'
Voices discussing me
Don't expect your own Messiah
This neverworld which you desire
is only in your mind.
`)
.setFooter('Lyrics by John Petrucci | Awake | 1994') 

//The Silent Man
module.exports.tsmEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // The Silent Man", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=M1gFXVANCt8') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
A Mind Beside Itself. III
A question well served,
'Is silence like a fever?'
'A voice never heard?'
'Or a message with no receiver?'

Pray they won't ask
Behind the stained glass
There's always one more mask

Has man been a victim
of his woman, of his father?
if he elects not to bother,
will he suffocate their faith?

Desperate to fall
Behind the Great Wall
That separates us all

When there is reason
Tonight I'm Awake
when there's no answer
Arrive the Silent Man

If there is balance
tonight He's Awake
If they have to suffer
There lies the Silent Man

Sin without deceivers
A God with no believers
I could sail by
on the Winds of Silence
And maybe they won't notice
But this time I think
It'd be better if I swim

When there is reason
Tonight I'm Awake
When there's no answer
Arrive the Silent Man
If there is balance
Tonight he's Awake
But if they have to suffer
There lies the Silent Man
`)
.setFooter('Lyrics by John Petrucci | Awake | 1994') 
//The Mirror/Puppies On Acid
module.exports.tmEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // The Mirror", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') //Change title, not link
.setURL('https://www.youtube.com/watch?v=RRv2-GA00k0') //YouTube Video
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
Temptation-
Why won't you leave me alone?
Lurking Every Corner, everywhere I go

Self Control-
Don't turn your back on me now
When I need you the most

Constant pressure tests my will
My will or my won't
My Self Control escapes from me still...

Hypocrite-
How could you be so cruel
and expect my faith in return?

Resistance-
Is not as hard as it seems
When you close the door

I spent so long trusting in you
I trust you forgot
Just when I thought I believed in you...

[Sample is Meryl Streep from the film "Falling In Love".]
"What're you doing? 
What're you doing?"

It's time for me to deal
Becoming all too real
living in fear-
Why did you lie and pretend?
This has come to an end
I'll never trust you again
It's time you made your amends
Look in the mirror my friend

[Sample is Jeremy Irons from the film "Damage".]
"That I haven't behaved as I should"
[Sample is Mary Beth Hurt from the film "Light Sleeper".]
"Everything you need is around you. The only danger is inside you."
[Sample is Jeremy Irons from the film "Damage".]
"I thought you could control life, but it's not like that. There are things you can't control."

Let's stare the problem right in the eye
It's plagued me from coast to coast
Racing the clock to please everyone
All but the one who matters the most

Reflections of reality
are slowly coming into view
How in the hell could you possibly forgive me?
After all the hell I put you through

It's time for me to deal
Becoming all too real
living in fear-
Why'd I betray my friend?
Lying until the end
Living life so pretend
It's time to make my amends
I'll never hurt you again
`)
.setFooter('Lyrics by Mike Portnoy (Inspired the 12 Steps Suite) | Awake | 1994')

//Lie
module.exports.lieEmbed = new Discord.RichEmbed()
.setColor(0x85171d)
.setAuthor("NOMAC // Lie", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=_zpYDthEXsU')
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
Daybreak
at the bottom of lake
it's a hundred degrees I can't breathe
And I won't get out
'til I figure it out
Though I'm weak like I can't believe
So you tell me 'trust me' l can trust you
Just let me show you
But I gotta work it out in a shadow of doubt
'cause I don't know if I know you

Doing fine but don't waste my time
Tell me what it is you want to say
You sin, you win, just let me in - hurry
I've been out in the rain all day
So you tell me 'trust me' I can trust you
as far as I can throw you
And I'm trying to get out of a shadow of doubt
'cause I don't know if I know you

Don't tell me you wanted me
Don't tell me you thought of me
I won't, I swear I won't
(Did)
I'll try, I swear I'll try
(Lie)

Mother Mary quite contrary
Kiss the boys and make them wary
Things are getting just a little bit scary
It's a wonder I can still breathe

Never been much of a doubting Thomas
but nothing breaks like a broken promise
You tell me 'bout your two more coming
but once is just enough for me

I had gotten used to being a soul destroyed
She comes in apparently to fill the void
All dogs need a leash and
at least I'll forget it
And she would never hurt me though
she's never said it
But I'm not gonna ask her today
I don't wanna scare her away
Your town, I'm all alone
and I just can't stare at the phone
I wanna talk about lifelong mistakes
and you can tell your stepfather I said so
`)
.setFooter('Lyrics by Kevin Moore | Awake | 1994')

//Lifting Shadows Off A Dream
module.exports.lsoadEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Lifting Shadows Off A Dream", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=n7ffBCDM4V0') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
He seems alone and silent
thoughts remain without an answer
Afraid and uninvited
he slowly drifts away

Moved by desire and fear
Breaking delicate wings

Lifting shadows
off a Dream once broken
She can turn a drop of water
Into an ocean

As the rain is pouring down
Tears of sorrow wash his mind
Drifting with the current
This stream of life flows on

He seems alone and silent
waiting on his hands and knees
The chill of winter's darkness sits quietly

Moved by desire and fear
he takes a few steps away

Lifting shadows
off a Dream once broken
She can turn a drop of water
Into an ocean

And she listens openly

He pours his soul into the water
reflecting the mystery
She carries him away
and the winds die slowly

And she listens openly
And she listens openly

Lifting shadows
off a Dream once broken
She can turn a drop of water
Into an ocean

Lifting Shadows off a Dream
Lifting Shadows off a Dream
`)
.setFooter('Lyrics by John Myung | Awake | 1994') 

//Scarred
module.exports.scarredEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Scarred", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=SGRgAULYgWE') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
To Rise, To Fall.
To Hurt, To Hate.
To Want, To Wait.
To Heal, To Save.

Can't hear it
we fear it
awareness won't come near it

Distractive
Reactive
Disguised in spite of time

I never bared my emotion
My passion always strong
I never lost my devotion
but somewhere fate went wrong

Can't let them rape me again
Your venom's not family here
won't let them fill me with
fatalistic remedies

What if the rest of the world
was hopelessly blinded by fear?
Where would my sanctity live?
Suddenly nobody cares.

It's never enough
You're wasting your time
Isn't there something I could say?
You don't understand
You're closing me out
How can we live our lives this way?

You tell me I'm wrong
I'm risking my life
Still, I have nothing in return
I show you my hands
You don't see the scars
Maybe you'll leave me here to burn.

What if the rest of the world
was hopelessly drowning in vain?
Where would our self pity run?
Suddenly everyone cares.
`)
.setFooter('Lyrics by John Petrucci | Awake | 1994')

//Scarred 2
module.exports.scarred2Embed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Scarred Part 2", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=SGRgAULYgWE') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854") 
.setDescription(`
Blood...Heal me
Fear...Change me
Belief will always save me
Blood...Swearing
Fear...Staring
Conviction made aware

Give up on misery
Turn your back on dissent
Leave their distrust behind
Wash your hands of regret

Do you feel you don't know me anymore?
And do you feel I'm afraid of your love?
And how come you don't want me asking?
And how come my heart's not invited?
You say you want everyone happy
Well, we're not laughing.

And how come you don't understand me?
And how come I don't understand you?
Thirty years say we're in this together
So open your eyes.

People in prayer for me
everyone there for me
Sometimes I feel I should face this alone
My soul exposed
It calms me to know that I won't

Blood...Heal me
Fear...Change me
Belief will always save me
Blood...Swearing
Fear...Staring
Conviction made aware

Give up on misery
Turn your back on dissent
Leave their distrust behind
Wash your hands of regret

Blood...Heal me
Fear...Change me
Belief will always save me
Blood...Swearing
Fear...Staring
Conviction made aware

Learning from misery
Staring back at dissent
Leaving distrust behind
I'm inspired and content
`)
.setFooter('Lyrics by John Petrucci | Awake | 1994')


//Space-Dye Vest
module.exports.sdvEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Space-Dye Vest", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=rNbFhLDBbhQ') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854")
.setDescription(`
Falling through pages of Martens on angels
Feeling my heart pull west
I saw the future dressed as a stranger
love in a space-dye vest

Love is an act of blood and I'm bleeding
a pool in the shape of a heart
Beauty projection in the reflection
Always the worst way to start

[Sample is Julian Sands from the film "A Room With A View".]
"But he's the sort who can't know
anyone intimately, least of all a
woman. He doesn't know what a woman
is. He wants you for a possession, 
something to look at like a painting or an ivory box. 
Something to own and to display. He doesn't want you to be real, 
or to think or to live. He doesn't love you, but I love you. 
I want you to have your own thoughts and ideas and 
feelings, even when
I hold you in my arms. It's our last chance... It's our 
last chance..."

Now that you're gone I'm trying to take it
Learning to swallow the rage
Found a new girl I think we can make it
as long as she stays on the page

This is not how I want it to end
And I'll never be open again

[Sample from "The Trouble With Evan", from the Canadian series "The Fifth Estate".]
"...I was gonna move out...ummm...get,
get a job, get my own place, ummm, 
but... I go into the mall where I
want to work and they tell me, I'm, 
I was too young..."

[Sample is Jim Hill from a news commentary about the OJ Simpson freeway chase.]
"Some people, gave advice before,
about facing the facts, about
facing reality. And this is, this
without a doubt, is his biggest 
challenge ever. He's going to have to face it. 
You're gonna have to try, he's gonna to have to try and, 
uh, and, and, and get some help here. I mean no one can 
say they know how he feels."
`)
.setFooter('Lyrics by Kevin Moore | Awake | 1994')

//Space-Dye Vest 2
module.exports.sdv2Embed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // Space-Dye Vest 2", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=rNbFhLDBbhQ') 
.setThumbnail("https://vignette4.wikia.nocookie.net/dreamtheater/images/8/89/Awake.jpg/revision/latest?cb=20090626210854")
.setDescription(`
[Sample from the Conan O'Brien show.]
"That, so they say that, in ya know
like, Houston or something, you'd
say it's a hundred and eighty degrees, 
but it's a dry heat.
In Houston they say that?
Oh, maybe not. I'm all mixed up.
Dry until they hit the swimming pool."

[Sample from "The Trouble With Evan", from the Canadian series "The Fifth Estate".]
"...I get up with the sun... Listen.
You have your own room to sleep in,
I don't care what you do. I don't
care when. That door gets locked, 
that door gets locked at night by nine o'clock. 
If you're not in this house by nine o'clock, then you'd 
better find some 
place to sleep. Because you're not going to be a bum in 
this house. 
Supper is ready..."

There's no one to take my blame
if they wanted to
There's nothing to keep me sane
and it's all the same to you
There's nowhere to set my aim
so I'm everywhere
Never come near me again
do you really think I need you

I'll never be open again, I could never be open again.
I'll never be open again, I could never be open again.

And I'll smile and I'll learn to pretend
And I'll never be open again
And I'll have no more dreams to defend
And I'll never be open again
`)
.setFooter('Lyrics by Kevin Moore | Awake | 1994')

//A CHANGE OF SEASONS

//PART 1: CRIMSON SUNRISE
module.exports.acosoneEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // A Change of Seasons I", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=mZKrwJzGg0k') 
.setThumbnail("https://images.genius.com/41d1d7ed649b2b2f5a225f0e0dda4b13.1000x1000x1.jpg")
.setDescription(`
Bong, ding ding ding, Bong ding ding ding
Bong, ding ding ding, Bong ding duhhh-ing
`)
.setFooter('Lyrics by John Petruccis 7 String | A Change of Seasons EP | 1995')

//PART 2: INNOCENCE
module.exports.acostwoEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // A Change of Seasons II", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=mZKrwJzGg0k?t=3m50s') 
.setThumbnail("https://images.genius.com/41d1d7ed649b2b2f5a225f0e0dda4b13.1000x1000x1.jpg")
.setDescription(`
[II. Innocence]

I remember a time
My frail, virgin mind
Watched the crimson sunrise
Imagined what it might find
Life was filled with wonder
I felt the warm wind blow
I must explore the boundaries
Transcend the depth of winter's snow

Innocence caressing me
I never felt so young before
There was so much life in me
Still I longed to search for more

But those days are gone now
Changed like a leaf on a tree
Blown away forever
Into the cool autumn breeze
The snow has now fallen
And my sun's not so bright
I struggle to hold on
With the last of my might

In my den of inequity
Viciousness and subtlety
Struggle to ease the pain
Struggle to find the same

Ignorance surrounding me
I've never been so filled with fear
All my life's been drained from me
The end is drawing near...
`)
.setFooter('Lyrics by Mike Portnoy | A Change of Seasons EP | 1995')

//PART 3: CARPE DIEM
module.exports.acosthreeEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // A Change of Seasons III", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=mZKrwJzGg0k?t=6m50s') 
.setThumbnail("https://images.genius.com/41d1d7ed649b2b2f5a225f0e0dda4b13.1000x1000x1.jpg")
.setDescription(`
[III. Carpe Diem]

"Carpe diem
Seize the day"

I'll always remember
The chill of November
The news of the fall
The sounds in the hall
The clock on the wall
Ticking away
"Seize the Day"
I heard him say
Life will not always be this way
Look around
Hear the sounds
Cherish your life
While you're still around

("Gather ye rosebuds while ye may)
(Old Time is still a-flying;)
(And this same flower that smiles today)
(Tomorrow will be dying")

We can learn
From the past
But those days
Are gone
We can hope
For the future
But there might not be one

The words stuck in my mind
Alive from what I've learned
I have to seize the day
To home I returned

Preparing for her flight
I held with all my might
Fearing my deepest fright
She walked into the night
She turned for one last look
She looked me in the eye
I said, "I Love You...
Good-bye"

("It's the most awful thing you'll ever hear")
("If you're lying to me...")
("Oh, you dearly love her")
("...just have to leave...)
(All our lives")
("Seize the day!")
("Something happened")
("Gather ye rosebuds while ye may")
("She was killed")
`)
.setFooter('Lyrics by Mike Portnoy | A Change of Seasons EP | 1995')

//PART 4: DARKEST OF WINTERS
module.exports.acosfourEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // A Change of Seasons IV", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=mZKrwJzGg0k?t=10m8s') 
.setThumbnail("https://images.genius.com/41d1d7ed649b2b2f5a225f0e0dda4b13.1000x1000x1.jpg")
.setDescription(`
[IV. The Darkest Of Winters]

[Instrumental]
`)
.setFooter('Lyrics by John Petruccis 7 String | A Change of Seasons EP | 1995')

//PART 5: Another World
module.exports.acosfiveEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // A Change of Seasons V", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=mZKrwJzGg0k?t=13m1s') 
.setThumbnail("https://images.genius.com/41d1d7ed649b2b2f5a225f0e0dda4b13.1000x1000x1.jpg")
.setDescription(`
[V. Another World]

So far or so it seems
All is lost
With nothing fulfilled
Off the pages and the
T.V. screen
Another world
Where nothing's true

Tripping through
The life fantastic
Lose a step
And never get up
Left alone
With a cold blank stare
I feel like giving up

I was blinded by a paradise
Utopia high in the sky
A dream that only drowned me
Deep in sorrow, wondering why

Oh come let us adore him
Abuse and then ignore him
No matter what
Don't let him be
Let's feed upon his misery
Then string him up for all the world to see

I'm sick of all
Your hypocrites
Holding me at bay
And I don't need
Your sympathy
To get me through the day

Seasons change and so can I
Hold on Boy
No time to cry
Untie these strings
I'm climbing down
I won't let them push me away

Oh come let us adore him
Abuse and then ignore him
No matter what
Don't let him be
Let's feed upon
His misery
Now it's time for them
To deal with me
`)
.setFooter('Lyrics by Mike Portnoy | A Change of Seasons EP | 1995')

//PART 6: THHE INEVITABLE SUMMER
module.exports.acossixEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // A Change of Seasons VI", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=mZKrwJzGg0k?t=16m56s') 
.setThumbnail("https://images.genius.com/41d1d7ed649b2b2f5a225f0e0dda4b13.1000x1000x1.jpg")
.setDescription(`
[VI. The Inevitable Summer]

Sexy ass guitar solo insues

[Instrumental]
`)
.setFooter('Lyrics by John Petruccis Fingers | A Change of Seasons EP | 1995')

//PART 7: THE CRIMSON SUNSET
module.exports.acossevenEmbed = new Discord.RichEmbed() 
.setColor(0x85171d)
.setAuthor("NOMAC // A Change of Seasons VII", 'https://a.thumbs.redditmedia.com/CK3mlJPLodayl_2bTbFkxC8FBuyevfeCTu0b6gK-_x8.png') 
.setURL('https://www.youtube.com/watch?v=mZKrwJzGg0k?t=20m13s') 
.setThumbnail("https://images.genius.com/41d1d7ed649b2b2f5a225f0e0dda4b13.1000x1000x1.jpg")
.setDescription(`
[VII. The Crimson Sunset]

I'm much wiser now
A lifetime of memories
Run through my head
They taught me how
For better or worse
Alive or dead
I realize
There's no turning back
Life goes on
The offbeaten track

I sit down with my son
Set to see the Crimson Sunset
(Gather ye rosebuds while ye may)
Many years have come and gone
I've lived my life, but now must move on
(Gather ye rosebuds while ye may)
He's my only one
Now that my time has come
Now that my life is done
We look into the sun
"Seize the day
And don't you cry
Now it's time
To say good-bye
Even though
I'll be gone
I will live on
Live on"
`)
.setFooter('Lyrics by Mike Portnoy | A Change of Seasons EP | 1995')