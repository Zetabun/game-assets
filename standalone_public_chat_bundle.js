/*!
 * standalone_public_chat_bundle.js
 * Self-contained public chat replacement for the KaZaA HTML project.
 *
 * What it includes:
 * - Your original public chat data copied from the uploaded HTML.
 * - Expanded general chat, arguments, connect bursts, and ambient conversations.
 * - Fallback definitions for addChat/getContextualMessages/randomChatMessage so you can
 *   remove the original public chat block from the HTML and keep the chat working.
 *
 * Include after your main game script:
 *   <script src="standalone_public_chat_bundle.js"></script>
 */
(function () {
  'use strict';

  const ROOT = typeof window !== 'undefined' ? window : globalThis;
  if (ROOT.__standalonePublicChatBundleLoaded) return;
  ROOT.__standalonePublicChatBundleLoaded = true;

  const ORIGINAL_PUBLIC_CHAT = {
    CHAT_NICKS: ['xXPeer420Xx','TurboSeeder99','dial_up_dave','l33tShr3r','KazaaKing2001','n00bDL3r','OverclockOllie','shareware_sam','defrag_dan','bandwidth_betty','FLAC_Lord','DivX_Demon','warez_wizard','geocities_ghost','ICQ_vet','Napster_refugee','RealPlayer_hater','WinMX_mike','eDonkey2000_ed','modem_cowboy','ratiomaster_rob','scene_karen','nfo_reader','repack_ryan','seedbox_steve','leech_larry','crc_checker','port_forward_pete','dmca_dan','torrent_tina','xdcc_xander','irc_irene','ftp_frank','mirc_maddie','ukgarage_gav','rnb_rachel','lossless_lisa','h4x0r_pete','BonziBuddy_survivor','AIMbot_tony','Limewire_linda','Bearshare_bob','DirectConnect_dan','supernova_steve','peerguardian_paul','bitlord_barry','azureus_alice','emule_ed','morpheus_mike','grokster_gary','imesh_ian','soulseek_sarah','WinAmp_forever','SpySweeper_simon','ZoneAlarm_zoe','p2p_philosopher','overnight_oliver','ratio_god','upload_unity','the_real_supernode','56k_and_proud','_RIAA_agent_','fake_file_freddy','InfectedPatch_exe','definitely_legit'],
    CHAT_GENERAL: ['anyone got part 2 of that shareware pack??','my download queue is like 47 hours lmao','ISP just throttled me again >:(','pls seed!!! only 3 sources left!!!','got a new winamp skin if anyone wants it','this file is totally clean i promise','DEFRAG YOUR HDD YOU ANIMALS',"I'm at 2.0 share ratio, step up n00bs",'who the heck is uploading fake mp3s again','bro just buy a cable connection already','overnight downloads hit 100% at 6am yesss',"that 'batman begins rip' is definitely a virus lol",'my modem disconnected at 99%, im done','finally got ADSL, life is different now',"anyone else's ISP throttling at peak hours??",'FLAC > MP3 change my mind','found a geocities backup from 1999, seeding now','star wars kid is on here somewhere lol','the numa numa guy has 500 sources, legend','got the mystery fragment 004! only need 005 now','winamp skins are a legitimate art form fight me','anyone know how to forward ports?? i cant figure it out','cable internet = instant supernode. facts.','running virus scan, brb 45 minutes','my mum answered the phone and killed my 6 hour download. not speaking to her','does anyone actually READ the nfo files or just extract immediately','found winamp 2.9 installer on here. its a time machine','my upload speed is 28kb/s. i am doing my best okay','anyone remember when napster just worked and everything was fine','queue says 4 hours remaining. has said 4 hours remaining for 6 hours','why does every "full album" turn out to be one song repeated 12 times','kazaa lite is just kazaa but it doesnt spy on you allegedly','new rule: if the file size ends in .00 mb its a fake','my router has been running for 340 days straight. do not touch it',
// new entries
'anyone else name their downloads folder "school stuff" so parents dont check','if your ratio is below 1.0 you are a parasite and i mean that lovingly','whoever is uploading files called "definitely_not_virus.exe" you are not funny. you are very funny actually.','i have 4000 files queued on emule. i am playing the long game.','the "file not found" error message is the saddest thing on the internet','why do people upload fake files. what do they get out of it. who hurt them.','my neighbour has wifi and i can see it from my window. praying he doesnt use wep.','searching for "old skool garage vol 3" for 6 months. not giving up.','someone in this chatroom has a ratio of 0.02 and they know who they are','this download has been at 98.7% for twenty minutes. i am losing my mind.','found a folder called "backups" in my downloads. it was 47 winamp skins. perfect.','port 4662 is open. i am READY.','my sister tried to use the computer while i had 3 downloads going. we do not speak anymore.','the only thing i ask is that you seed what you download. that is all. please.','someone uploaded the matrix trilogy as one 4.2gb file. god bless them.','legitimate question: does anyone actually pay for music','i have been alive on this network since 1999 and i will die here','fun fact: the riaa cannot arrest all of us','does anyone know if isohunt is down or is that just me','my download folder is 89gb and growing. this is fine.'],
    CHAT_TECH: ['winamp 2.95 is peak software. they should never have made winamp 3','real player can rot in hell. i said what i said','cdex is the only ripper worth using','lame encoder at 320kbps. anything else is a war crime','128kbps was a mistake. we were all wrong in 1999','divx 5.1 is genuinely impressive. dvd quality at 700mb','zone alarm + adaware + spybot. the holy trinity of protection','ad-aware found 47 tracking cookies. my computer feels 10 years younger','overclocking my athlon from 1.4 to 1.6ghz. praying for stability','why does explorer.exe use 50% cpu when im literally doing nothing','msconfig is the only tool you need to fix 90% of problems','got 512mb of ram. i am basically invincible now',
// new entries
'virtual dub is criminally underrated. editing avis like a professional','the xvid codec vs divx argument will never be resolved. both sides have valid points.','ffdshow installed. i can now watch anything. i am untouchable.','bit torrent is just kazaa but with better ratio guilt. same vibes.','anybody else running windows 98 still. asking for a friend. the friend is me.','if the crc check fails i take it personally','k-lite codec pack installed. i now have 47 codecs i will never use. perfect.','error 0x00000050. blue screen. third time this week. i deserve this.','my page file is set to 2048mb. nobody can stop me.','why is svchost.exe using my entire cpu at 3am. what is it doing. i do not consent.','registry cleaner ran. deleted 847 entries. computer now slower. as expected.','anyone else keeps their downloaded drivers in a folder called "important dont delete" from 2001','my defrag has been running for 4 hours. the bar has barely moved. this is my life now.','tried to install limewire. got grokster instead. somehow. again.','kazaa media desktop vs kazaa lite. there is only one correct answer and it is lite.','found a copy of nero 5 in a zip file. it works. i am not asking questions.'],
    CHAT_DRAMA: ["who keeps uploading 1-second files labeled as full albums. COWARD","tired of peers connecting at 0.1kb/s. you are a burden",'there is a user on here sharing NOTHING and downloading EVERYTHING. you know who you are','my ratio is 0.4 and im not proud of it but im working on it','downloaded a 700mb file and it opened in notepad. i am hollow inside','whoever uploaded that corrupted zip of doom2 mods. we need to talk',
// new entries
'leechers ruin everything. every single time. leechers.','i left my pc on overnight to seed and my dad turned it off to save electricity. i am not okay.','someone just connected to me at 0.0kb/s. they are not even trying. they are mocking me.','if i find out who keeps sharing the wrong file with the right name i will be very disappointed','report: downloaded "full album". received: 1 song. 3 minutes 47 seconds. again.','the nerve of some people on this network. genuinely astounding.','just found the same fake mp3 ive downloaded 6 times. the thumbnail was perfect. betrayed again.','every single "1080p rip" on kazaa is 400x300 pixels. every single one.','ratio check: mine is 1.8. i have done the maths. some of you owe me several days of my life.','someone uploaded a pdf that is just the first page repeated 400 times. i am in awe of the commitment to wasting my time.','my 700mb download was a jpeg. a single jpeg. a JPEG.','i genuinely cannot believe the audacity of people who queue a 1gb download and then go offline'],
    CHAT_ISP: ['telewest throttling p2p again. right on schedule','ntl cable is the only way to live. everyone else is suffering','just switched from dialup to adsl and i feel like a different species','56k represent. slower yes. but we built character.','my isp has a 1gb monthly cap. laughing emoji. crying emoji.','getting 480kb/s on cable. peak of human civilization right here',
// new entries
'freeserve dialup at 11pm. its free after 6. you do what you have to do.','bt broadband waitlist is 6 months. i have written a letter. to nobody.','plusnet just throttled me. i thought we were friends plusnet.','cable went down for 3 hours. had to use my phone to check email. like an animal.','the bt engineer came, looked at my router, said "hmm", left. speeds unchanged. thanks.','my download cap is 2gb a month. i downloaded a dvdrip and its all gone. worth it.','anyone on tesco broadband. asking because i am on tesco broadband and i have concerns.','heard they are rolling out adsl max this year. 8mbps. the future is here lads.','my ping to the nearest peer is 4000ms. geography is my enemy.','got virgin media. 10mb cable. sharing with the whole street. 11pm is my time.','dialup handshake noise is genuinely one of the most comforting sounds in existence. controversial but true.','isp sent me a letter about usage. threw it away. downloading continued.'],
    CHAT_MUSINGS: ['do you think the riaa knows about this specific chatroom','sharing files is basically just lending a library book. philosophically.','whoever invented the resume download feature deserves a statue','some of these files have been bouncing around p2p networks since 1999. digital ghosts.','the ratio system is basically a social credit score for pirates. and i respect it.',
// new entries
'what if the real friends were the files we downloaded along the way','there are files on this network that no human has listened to in 3 years. digital orphans. i will seed them.','the nfo file is basically a love letter from the scene to the world. read the nfo files.','think about it: every file on here was uploaded by a person who wanted someone else to have it. thats kind of beautiful.','the internet in 2003 feels like the wild west but friendlier. mostly.','p2p is just communism for media and i mean that as a compliment','we are all participating in the largest library in human history and we called it piracy','the upload slots are always full on my machine. this is my contribution to society.','every time you seed a file a small part of you lives on that network forever. probably.','the peer who uploads at 28kb/s on a 56k line is doing gods work. respect.'],
    CHAT_MUSIC: ['anyone got the artful dodger album? looking for re-rewind','craig david is genuinely underrated. fill me in is a tune.','21 seconds so solid is a banger and i will not be taking questions','uk garage peak era was 2000-2002, no arguments','crazy in love is the song of 2003 full stop','lose yourself is the best eminem track and its not close','seven nation army riff is stuck in my head and has been for 3 weeks','mr brightside was uploaded yesterday and already has 400 sources','feel good inc is what happens when gorillaz and de la soul do drugs together','paranoid android at 6 minutes should not work but it absolutely does',
// new entries
'in da club has been in my head for 4 months. this is not a complaint.','white stripes elephant album is on here in flac. this is genuinely historical.','if you skip through a song while downloading it corrupts. i do not have proof but i believe this.','linkin park hybrid theory is the most downloaded album in history probably. should be.','nelly dilemma featuring kelly rowland. someone in this room knows exactly what im talking about.','searching for the original numa numa video in avi format. the man deserves recognition.','outkast hey ya is technically impossible to dislike. scientists have confirmed this.','the darkness i believe in a thing called love is an actual masterpiece. i said it.','bonnie tyler total eclipse of the heart has 847 sources. she is eternal.','the prodigy firestarter acapella exists on here somewhere. i will find it.','finding a rare b-side on emule is better than anything that happens in the real world.','just found the original star wars kid video in higher quality. legend status confirmed.'],
    CHAT_REBOOT_REACTIONS: ['anyone else just disconnect or was that just me','did the network just go down for a second','power cut? my downloads just died','back online. that was terrifying.','my pc just restarted by itself. normal.','right what did i miss','reconnecting... oh good its still here','whoever cut the power i know where you live (i dont)','power cuts and p2p do not mix. this is a tragedy.','brb setting my downloads back up after that. again.'],
    CHAT_ARGUMENTS: [
  [['MP3_purist','flac is a waste of space. nobody can hear the difference'],['FLAC_Lord','i can hear the difference and my ears are not lying to me'],['MP3_purist','you are listening on laptop speakers bro'],['FLAC_Lord','i have sennheisers and i KNOW what i hear'],['MP3_purist','we are not having this conversation again'],['FLAC_Lord','320kbps minimum. we can agree on that.'],['MP3_purist','finally. common ground.']],
  [['dial_up_dave','i was here before adsl and ill be here after it'],['TurboSeeder99','mate your download speed is 4kb/s. you are barely here now'],['dial_up_dave','character. i have CHARACTER'],['TurboSeeder99','i just downloaded 700mb in 4 minutes'],['dial_up_dave','good for you. i am going to bed. my download finishes at 7am'],['TurboSeeder99','lmao'],['dial_up_dave','laugh all you want. my ratio is immaculate']],
  [['scene_karen','why is nobody seeding the cs maps anymore'],['warez_wizard','because everyone downloaded it already karen'],['scene_karen','my name is not karen'],['scene_karen','seed your downloads. this is basic etiquette'],['warez_wizard','okay okay ill leave it running overnight'],['scene_karen','thank you. was that so hard']],
  [['Napster_refugee','nothing has been right since napster shut down'],['TurboSeeder99','kazaa is better than napster was'],['Napster_refugee','you did not know napster in its prime'],['Napster_refugee','it just WORKED. every song. instant. no fakes. it was heaven.'],['TurboSeeder99','sounds made up'],['Napster_refugee','it was real and lars ulrich took it from us'],['FLAC_Lord','lars ulrich must answer for what he has done'],['Napster_refugee','thank you flac lord. finally someone gets it']],
  [['ukgarage_gav','uk garage is the most important british music movement of the 2000s'],['rnb_rachel','thats a bold claim when you have coldplay and radiohead'],['ukgarage_gav','both of those are depressing. garage makes you move.'],['rnb_rachel','fair point. re-rewind is legitimately a classic.'],['ukgarage_gav','thank you. now seed it.'],['rnb_rachel','already am']],
  // new arguments
  [['h4x0r_pete','kazaa is full of feds. they are watching every download.'],['warez_wizard','every p2p network has always had feds. this is not new.'],['h4x0r_pete','i use peerguardian. i am protected.'],['warez_wizard','peerguardian blocks 3 ips and feels good about it'],['h4x0r_pete','those 3 ips are the RIAA'],['warez_wizard','...okay fair enough carry on'],['h4x0r_pete','thank you. downloading resumed.']],
  [['leech_larry','i just download. i dont really seed.'],['ratiomaster_rob','this is why we cant have nice things larry'],['leech_larry','i have slow upload. what do i do'],['ratiomaster_rob','you seed what you can. even 5kb/s matters.'],['leech_larry','fine. ive started seeding.'],['ratiomaster_rob','thank you larry. you are growing as a person.'],['leech_larry','my ratio is 0.12 and rising']],
  [['BonziBuddy_survivor','bonzi buddy was actually quite helpful'],['warez_wizard','bonzi buddy was spyware that looked like a purple gorilla'],['BonziBuddy_survivor','he told me jokes'],['warez_wizard','he stole your browsing data'],['BonziBuddy_survivor','...the jokes were very good though'],['warez_wizard','i cannot argue with that. the jokes were solid.']],
  [['56k_and_proud','some of us are still on 56k and we are fine'],['TurboSeeder99','how is 700mb in 34 hours fine'],['56k_and_proud','we queue overnight. we are patient people.'],['TurboSeeder99','i respect the commitment i do not respect the strategy'],['56k_and_proud','one day i will have cable. today is not that day.'],['TurboSeeder99','ill seed whatever you need mate. sorry.'],['56k_and_proud','thank you. i mean it.']],
  [['_RIAA_agent_','hello everyone normal person here just chatting about music downloads'],['l33tShr3r','what'],['_RIAA_agent_','i too enjoy downloading copyrighted files illegally'],['warez_wizard','youre not even trying mate'],['_RIAA_agent_','could someone share their ip address? for friendship'],['l33tShr3r','lmao'],['warez_wizard','blocked.'],['_RIAA_agent_','dang']],
  [['overnight_oliver','left my pc on all night seeding. woke up. ratio is 2.4.'],['ratiomaster_rob','this is what peak performance looks like'],['overnight_oliver','my dad turned the monitor off at 2am thinking he was helping'],['ratiomaster_rob','no'],['overnight_oliver','seeding continued in the background thankfully'],['ratiomaster_rob','your pc is a hero. honor it.']],
],
    CHAT_CONVERSATIONS: [
  // Help requests
  [['n00bDL3r','why does my download keep saying "connecting to peers" for like an hour'],['port_forward_pete','have you forwarded port 1214 on your router'],['n00bDL3r','whats a router'],['port_forward_pete','okay. so. do you have a box with flashing lights near your computer'],['n00bDL3r','yeah'],['port_forward_pete','go to 192.168.0.1 in your browser. admin and password are probably both \"admin\"'],['n00bDL3r','oh wow theres a whole website in my house'],['port_forward_pete','...yes. find port forwarding. add 1214. thank me later'],['n00bDL3r','done. speeds are insane now. you are a genius'],['port_forward_pete','i know']],
  [['dial_up_dave','is there a trick to downloading faster on 56k'],['TurboSeeder99','yes. get adsl'],['dial_up_dave','helpful thank you'],['modem_cowboy','dial_up_dave queue small files overnight. anything under 10mb can be done in one session'],['dial_up_dave','i know. i have a spreadsheet'],['modem_cowboy','a spreadsheet'],['dial_up_dave','a spreadsheet. categorised by size, estimated download time, and priority rating'],['modem_cowboy','you are either very organised or very sad'],['dial_up_dave','both. both is the answer']],
  [['Limewire_linda','just switched from limewire to kazaa lite. what am i missing'],['warez_wizard','less spyware. thats the main thing.'],['Limewire_linda','anything else'],['FLAC_Lord','better search. more sources on rare stuff. the community here is more serious.'],['Limewire_linda','serious how'],['FLAC_Lord','people actually seed. ratios are tracked. theres consequences for being a leech.'],['Limewire_linda','oh. like a p2p society.'],['warez_wizard','exactly. with its own culture and hierarchy. welcome to it.']],
  // Banter / bonding
  [['overnight_oliver','reminder that i have been awake for 23 hours waiting for this download to finish'],['TurboSeeder99','what file'],['overnight_oliver','the matrix reloaded dvdrip. 1.4gb. my connection is not fast.'],['TurboSeeder99','bro that is a commitment'],['overnight_oliver','i started it monday'],['TurboSeeder99','its wednesday'],['overnight_oliver','i know'],['ratiomaster_rob','respect honestly. the download will complete and it will mean more because of this.'],['overnight_oliver','it had better be worth it'],['ratiomaster_rob','it will not be. it is matrix reloaded.'],['overnight_oliver','...i have made a terrible mistake']],
  [['BonziBuddy_survivor','today marks 4 years since bonzi buddy told me i had a new email'],['warez_wizard','do you miss him'],['BonziBuddy_survivor','not even slightly. he destroyed my aunts computer.'],['warez_wizard','so thats a yes'],['BonziBuddy_survivor','the jokes were very good.'],['ZoneAlarm_zoe','i still have cydoor.dll on my machine. i cannot get rid of it.'],['SpySweeper_simon','run ad-aware. then spybot. then ad-aware again.'],['ZoneAlarm_zoe','ive done that 6 times'],['SpySweeper_simon','then it is simply part of you now. make peace with it.']],
  [['rnb_rachel','does anyone know if craig david actually replies to kazaa messages'],['ukgarage_gav','craig david is NOT on kazaa'],['rnb_rachel','how do you know'],['ukgarage_gav','because one of the accounts claiming to be him sent me a virus'],['rnb_rachel','wait which one'],['ukgarage_gav','all of them. they were all viruses.'],['rnb_rachel','oh no. oh no i clicked on one.'],['ZoneAlarm_zoe','run a virus scan RIGHT NOW'],['rnb_rachel','running. oh theres so many things. so many things found.'],['ukgarage_gav','i am so sorry rachel']],
  // Technical discussions
  [['FLAC_Lord','flac vs 320kbps mp3. lets settle this. blind test.'],['lossless_lisa','flac. obviously. the waveform integrity alone—'],['MP3_purist','nobody can hear it on normal speakers'],['lossless_lisa','i am using beyerdynamic DT770s'],['MP3_purist','okay show-off'],['FLAC_Lord','the point is ARCHIVAL. 320kbps is lossy. its gone. you cannot get those frequencies back.'],['MP3_purist','frequencies above 16khz that nobody over 25 can hear anyway'],['lossless_lisa','i am 23 and i can hear them'],['MP3_purist','for now'],['FLAC_Lord','...okay that was harsh but technically accurate']],
  [['crc_checker','genuine question: does anyone verify CRCs after every download or is that just me'],['nfo_reader','every single time. non-negotiable.'],['crc_checker','thank you. i thought i was alone.'],['warez_wizard','what does a CRC failure actually mean in practice'],['nfo_reader','it means the file is corrupt or was tampered with. do not install it.'],['warez_wizard','and if i already installed it'],['nfo_reader','delete it. then run a scan. then delete it again.'],['warez_wizard','asking for a friend'],['crc_checker','your friend should also format and reinstall probably'],['warez_wizard','my friend is fine its fine']],
  [['h4x0r_pete','the best way to avoid fakes is to only download from uploaders you know'],['scene_karen','or use the file size check. 3 min mp3 at 128kbps = 2.8mb. not 700mb.'],['h4x0r_pete','both. but name recognition is faster'],['repack_ryan','i have a blacklist of 47 uploaders going back to 2001'],['scene_karen','47 is conservative'],['repack_ryan','i add to it daily'],['nfo_reader','the nfo file almost always reveals the group. check the group. google the group.'],['h4x0r_pete','knowledge is the only antivirus'],['ZoneAlarm_zoe','zone alarm is also an antivirus'],['h4x0r_pete','...yes. both. knowledge and zone alarm.']],
  // Nostalgia
  [['Napster_refugee','sometimes i just think about napster in 1999'],['ICQ_vet','the search was instant. it was magical.'],['Napster_refugee','you searched for a song and 200 results appeared immediately'],['ICQ_vet','and everyone was sharing. nobody was being weird about it.'],['Napster_refugee','i found a live bootleg from 1984 in 45 seconds. it was just there.'],['FLAC_Lord','where is that bootleg now'],['Napster_refugee','gone. lars took it.'],['ICQ_vet','lars ulrich will have to answer for what he did'],['Napster_refugee','someday. someday.']],
  [['geocities_ghost','i have been archiving geocities pages before they go dark'],['ICQ_vet','archiving how'],['geocities_ghost','wget. recursive crawl. saving everything to external drive.'],['nfo_reader','thats actually important work. geocities is a historical document.'],['geocities_ghost','1999 personal homepages about dragonball z. yes. historical.'],['nfo_reader','especially those.'],['geocities_ghost','found a page with a dancing baby gif, a midi autoplay of the macarena, and a hit counter showing 3 views'],['ICQ_vet','three views and one of them was you'],['geocities_ghost','two of them were me. i checked twice to make sure it still worked.']],
  // Downloads going wrong
  [['n00bDL3r','i downloaded a file called shrek2_full_HD.avi and when i opened it it was a picture of shrek'],['warez_wizard','a picture'],['n00bDL3r','just a jpeg. of shrek. very high resolution.'],['warez_wizard','technically accurate labelling. its a file. it contains shrek.'],['n00bDL3r','i wanted the movie'],['leech_larry','what was the file size'],['n00bDL3r','700mb'],['leech_larry','...that is an impressive jpeg'],['warez_wizard','someone put genuine effort into this fake and i respect that']],
  [['OverclockOllie','my download completed and the file is actually a 4-hour recording of dial-up connecting'],['dial_up_dave','what'],['OverclockOllie','four. hours. of modem sounds. labelled as lord of the rings.'],['dial_up_dave','i would listen to that actually'],['OverclockOllie','surprisingly soothing. not what i wanted. but soothing.'],['modem_cowboy','theres an audience for everything on this network'],['OverclockOllie','im seeding it. 8 people are downloading it right now.'],['dial_up_dave','see. community service.']],
  // Scene politics / leaderboard
  [['scene_karen','who are [iNTERNAL] and why are they always first'],['repack_ryan','fastest scene group on the network. dedicated connection. probably topsite access.'],['scene_karen','how do you get topsite access'],['repack_ryan','you have to know people. and have something to offer. good upload speed. cracking skills.'],['scene_karen','i have a 512k adsl and i can mostly use winrar'],['repack_ryan','...keep working on it'],['warez_wizard','the scene is a meritocracy in theory. in practice its who you know.'],['scene_karen','so normal then'],['warez_wizard','so completely normal yes']],
  [['nfo_reader','just spent 20 minutes reading an nfo for a 2mb shareware crack. they wrote a manifesto.'],['repack_ryan','the good nfos are literature'],['nfo_reader','they discussed the nature of intellectual property. they had cited sources. in an nfo file.'],['warez_wizard','the scene takes itself very seriously'],['nfo_reader','there was an ascii art section. it was beautiful.'],['crc_checker','i collect nfo files. best ones get framed in notepad.'],['nfo_reader','...framed in notepad is not framing'],['crc_checker','it is if your monitor is the frame']],
  // Ratio anxiety
  [['leech_larry','okay my ratio is 0.08 and i know thats bad'],['ratiomaster_rob','0.08 is not a ratio. that is a disgrace.'],['leech_larry','i have slow upload. i cant help it.'],['ratiomaster_rob','0.08 means for every 100mb you take you give back 8mb'],['leech_larry','when you say it like that'],['ratiomaster_rob','start seeding. right now. everything you have. all of it.'],['leech_larry','my upload is 3kb/s'],['ratiomaster_rob','then seed 100 files at 0.03kb/s each. it adds up. it has to.'],['leech_larry','okay. seeding. all of it. this feels good.'],['ratiomaster_rob','welcome to the community larry. youre one of us now.']],
  // Random weirdness
  [['definitely_legit','hello everyone. normal download user here.'],['warez_wizard','oh no'],['definitely_legit','i am simply downloading files for personal enjoyment'],['l33tShr3r','thats the ip from the riaa lawsuit last month'],['definitely_legit','i do not know what the riaa is'],['warez_wizard','blocked. everyone block now.'],['definitely_legit','wait i just want to—'],['l33tShr3r','too late mate. you had your chance.'],['peerguardian_paul','peerguardian blocked them 20 minutes ago. stay safe out there.']],
  [['AIMbot_tony','does anyone remember when msn messenger had those animated winks that crashed your computer'],['ICQ_vet','the nudge feature alone was a weapon'],['AIMbot_tony','i sent a wink to someone in 2002 and it blue screened their pc'],['ICQ_vet','did you apologise'],['AIMbot_tony','i sent another wink'],['BonziBuddy_survivor','the emoticon sounds. the door opening. the door closing.'],['ICQ_vet','uh oh'],['BonziBuddy_survivor','uh oh'],['AIMbot_tony','uh oh'],['ICQ_vet','...uh oh']],
],
    CONNECT_BURSTS: [
  [['xXPeer420Xx','hey any1 got winamp skins??'],['TurboSeeder99','sharing 2847 files, come at me bro']],
  [['dial_up_dave','finally back online. modem decided to cooperate.'],['modem_cowboy','the connection gods smile upon you today']],
  [['leech_larry','quick question: what is a share ratio and why does mine say 0.04'],['ratiomaster_rob','larry. oh no. larry.']],
  [['FLAC_Lord','320kbps or lossless. pick one and live with your choice.'],['lossless_lisa','this is not a debate. flac. end of discussion.'],['MP3_purist','nobody can tell the difference']],
  [['n00bDL3r','how do i make downloads go faster'],['port_forward_pete','forward port 1214 on your router. trust me.']],
  [['warez_wizard','quiet in here. good. means nobody is getting sued today.'],['peerguardian_paul','peerguardian is on. we are protected.'],['warez_wizard','famous last words']],
  [['scene_karen','reminder: seed what you download. its not complicated.'],['ratiomaster_rob','thank you scene_karen. every single time.']],
  [['overnight_oliver','left 14 downloads running overnight. 12 completed. 1 stuck at 99%. 1 is a virus.'],['TurboSeeder99','what file was the virus'],['overnight_oliver','i do not want to talk about it']],
  [['Napster_refugee','still not over napster. never will be.'],['ICQ_vet','lars ulrich must answer for what he did'],['Napster_refugee','every day']],
  [['geocities_ghost','just found a kazaa search returning results from 2001. some of these files are older than my little sister.'],['ICQ_vet','digital archaeology']],
  [['BonziBuddy_survivor','my homepage changed again. not going to say to what. we all know.'],['ZoneAlarm_zoe','run ad-aware. right now.'],['BonziBuddy_survivor','this is the third time this week']],
  [['OverclockOllie','overclocked my cpu another 200mhz. either it runs faster or it catches fire. one way to find out.'],['TurboSeeder99','report back'],['OverclockOllie','still running. speeds are noticeably better. smells slightly warm.']],
  [['crc_checker','just failed a CRC check on a file i have been waiting 3 days for. i am going to lie down.'],['nfo_reader','i am so sorry. check if anyone reposted it under a different name.']],
  [['h4x0r_pete','peerguardian blocklist updated. the riaa added 800 new ips this week.'],['peerguardian_paul','already got them. stay frosty.'],['_RIAA_agent_','hello friends. normal user here. carry on.'],['h4x0r_pete','blocked.']],
  [['repack_ryan','the nfo on this release is a genuine work of art. 47 lines of ascii. a dedication section.'],['nfo_reader','read every word?'],['repack_ryan','twice']],
  [['upload_unity','reminder that uploading is not optional. it is a moral responsibility.'],['ratio_god','preach'],['leech_larry','okay okay im turning seeding on']],
  [['the_real_supernode','supernode status active. currently routing 340 searches per second.'],['TurboSeeder99','living the dream'],['the_real_supernode','it is a great honour and also my cpu is at 80%']],
  [['56k_and_proud','downloading at 4.2kb/s. estimated 11 hours remaining. this is fine.'],['overnight_oliver','respect. genuinely.'],['56k_and_proud','see you all tomorrow morning.']],
]
  };

  const EXTRA_CHAT_NICKS = [
  'codec_carla',
  'limewire_les',
  'bitrate_brian',
  'archive_andy',
  'pixelated_pam',
  'broadband_bev',
  'suspicious_sid',
  'mixtape_mel',
  'zipfile_zara',
  'router_rich',
  'mp3_marty',
  'avi_ash',
  'retro_riley',
  'tag_editor_ted',
  'buffering_becky',
  'crc_cait',
  'burner_ben',
  'port_1243_pat',
  'tracker_trish',
  'adsl_amy',
  'scene_simon',
  'soulseek_sid',
  'parity_paul',
  'winzip_wendy',
  'VirtualDub_vic'
];
  const EXTRA_CHAT_GENERAL = [
  'who just renamed an exe to .mp3 and thought we would not notice',
  'my downloads folder has become a museum of bad decisions',
  'i swear kazaa knows exactly when i need one last source and hides it from me',
  'left the pc on overnight and woke up emotionally attached to the progress bars',
  'if this file finishes before breakfast i will become a better person',
  'someone seeded an entire folder of old flash games and i nearly cried',
  'my hard drive sounds like it has opinions now',
  'there is no thrill like seeing 14 sources become 15',
  'half the fun is searching for something and finding three stranger things instead',
  'whoever still writes proper file names with artist and bitrate i salute you',
  'this queue has more structure than my actual life',
  'just found a folder of old amvs and suddenly it is 2003 again',
  'download ethics are real and some of you were raised badly',
  'there should be medals for people who keep rare files seeded for months',
  'my desktop is one accidental zip extraction away from collapse',
  'i keep telling myself one more album and then somehow it becomes twenty',
  'if a file has 1 source and a perfect filename i trust it more than i should',
  'there is a special kind of hope in the phrase more sources needed',
  'downloading something obscure makes me feel like an internet archaeologist',
  'this client is old enough to have a personality and frankly it does'
];
  const EXTRA_CHAT_TECH = [
  'mp3tag just saved me from a library of total chaos',
  'who needs a media centre when winamp already achieved perfection',
  'if your router needs rebooting twice a day it is part of the ecosystem now',
  'manual codec installation is a rite of passage and also a cry for help',
  'i trust no installer that finishes too quickly',
  'burned a data cd and the verification failed at 99 percent. authentic experience',
  'if the readme says disable antivirus first i become instantly spiritual',
  'svchost has entered the chat and eaten all available ram',
  'the only honest progress bar is the one that admits it has no idea',
  'windows update appeared while i was seeding and i took that personally',
  'i miss when software proudly told you exactly which dll it had broken',
  'virtual memory warnings are just the computer sighing at you',
  'every old pc survives on one fan and pure spite',
  'why does every codec pack installer feel like a moral test',
  'burn speed set to 8x because i have known suffering and i choose caution',
  'my c drive is hanging on through discipline and temporary files alone'
];
  const EXTRA_CHAT_DRAMA = [
  'someone uploaded the right album with the wrong track order and i am furious in a very specific way',
  'if you fake the bitrate in the filename you should have to explain yourself publicly',
  'i was promised dvd rip and received webcam regret',
  'three sources and every one of them vanished the second i queued it. targeted harassment',
  'a man can only open so many corrupted zips before he changes',
  'the same fake file has fooled me twice and honestly that is on both of us',
  'whoever puts passwords on random archives without saying them anywhere belongs in digital prison',
  'just watched my best source drop from 28kb to 0.4kb like a tragic character arc',
  'if your shared folder is empty but your queue is full i have notes',
  'this network has villains and they all name files full_version_final_REAL.exe',
  'one of you uploaded a text file that just says gotcha. i respect the cruelty but still',
  'the audacity required to share previews labelled as full releases must be studied'
];
  const EXTRA_CHAT_ISP = [
  'my provider says they do not throttle p2p and i say explain my evening then',
  'broadband adverts promised a future and instead i got customer support hold music',
  'adsl light blinking again. i choose faith over diagnostics',
  'at this point i judge isps entirely by whether they let me finish a download in peace',
  'cable users talk like they invented speed and honestly i let them have it',
  'my line drops every time it rains. excellent modern infrastructure',
  'the router has to sit at a weird angle or the internet becomes theoretical',
  'anyone else budgeting downloads around when the household needs the phone line',
  'there is no betrayal like peak-hour slowdown on a rare file',
  'customer support told me to stop using so many connections. unbelievable scenes',
  'you can tell who has stable broadband because they speak with confidence',
  'if this isp sends me one more fair usage email i will become unreasonable'
];
  const EXTRA_CHAT_MUSINGS = [
  'all of this runs on trust, stubbornness, and people forgetting to turn their pc off',
  'old peer-to-peer felt messy but at least it felt human',
  'somewhere out there a stranger is seeding the exact thing you forgot you needed',
  'a good username tells you everything and absolutely nothing',
  'every shared folder is a tiny accidental autobiography',
  'download culture has rules nobody wrote down and everyone somehow knows',
  'there is romance in old software if you squint and ignore the malware',
  'we built communities around waiting and somehow it worked',
  'part of me trusts old files more because they survived this long',
  'maybe the real bandwidth was the mutual frustration we shared along the way',
  'the internet used to feel like other people left the lights on for you',
  'there should be oral history projects about old chatroom arguments alone'
];
  const EXTRA_CHAT_MUSIC = [
  'whoever uploaded a clean uk garage folder just improved national morale',
  'there are at least six different files called best of dance 2001 and only one is honest',
  'if the rip starts with radio dj chatter i need emotional support',
  'found a live bootleg with crowd noise so loud it feels like being there. badly',
  'the difference between 192 and 320 matters mostly to my ego at this point',
  'someone labelled an album deluxe edition and i am choosing to believe them',
  'music discovery used to involve trusting total strangers with great usernames',
  'there is always one track on a compilation that exists nowhere else on earth',
  'burning a mix cd remains one of humanitys finer achievements',
  'i can forgive bad metadata. i cannot forgive the wrong artist entirely',
  'if the file says vinyl rip i am already interested',
  'some of the best songs i found were attached to the worst filenames imaginable'
];
  const EXTRA_REBOOT_REACTIONS = [
  'that disconnect nearly aged me five years',
  'reconnected and immediately checked if my queue survived',
  'if the power goes again i am writing to somebody important',
  'all my downloads resumed and i feel spiritually renewed',
  'that outage separated the brave from the broadbandless',
  'good news the client is back. bad news i have trust issues now',
  'reboot survived. queue survived. heart rate recovering',
  'i am treating every reconnect as a small personal miracle'
];
  const EXTRA_CHAT_ARGUMENTS = [
  [
    [
      'bitrate_brian',
      '320kbps is the practical ceiling. anything above that is showing off'
    ],
    [
      'lossless_lisa',
      'calling accuracy showing off is very revealing brian'
    ],
    [
      'bitrate_brian',
      'most people are listening through speakers from a cereal box'
    ],
    [
      'lossless_lisa',
      'and yet i continue to have standards'
    ],
    [
      'bitrate_brian',
      'standards are expensive in hard drive space'
    ],
    [
      'lossless_lisa',
      'then buy another hard drive'
    ],
    [
      'bitrate_brian',
      'with what money lisa i am downloading music on kazaa'
    ]
  ],
  [
    [
      'router_rich',
      'stop blaming your isp for every slow download'
    ],
    [
      'dial_up_dave',
      'rich i literally use dial-up'
    ],
    [
      'router_rich',
      'fair. except dave. dave gets to complain'
    ],
    [
      'dial_up_dave',
      'thank you'
    ],
    [
      'router_rich',
      'everyone else needs to port forward like adults'
    ],
    [
      'port_forward_pete',
      'finally someone said it'
    ],
    [
      'n00bDL3r',
      'i do not know what that means and i resent the tone'
    ]
  ],
  [
    [
      'mixtape_mel',
      'track order matters. you cannot just throw songs in a folder randomly'
    ],
    [
      'upload_unity',
      'its all music mel'
    ],
    [
      'mixtape_mel',
      'that is the kind of thing people say before ruining an album'
    ],
    [
      'upload_unity',
      'shuffle exists for a reason'
    ],
    [
      'mixtape_mel',
      'shuffle is for chaos not curation'
    ],
    [
      'nfo_reader',
      'mel is correct on artistic grounds'
    ],
    [
      'upload_unity',
      'fine but i remain spiritually unconvinced'
    ]
  ],
  [
    [
      'archive_andy',
      'deleting nfo files should be illegal'
    ],
    [
      'leech_larry',
      'i delete them instantly'
    ],
    [
      'archive_andy',
      'larry i am asking for one ounce of culture'
    ],
    [
      'leech_larry',
      'i came here for files not ascii literature'
    ],
    [
      'nfo_reader',
      'that is where you are wrong'
    ],
    [
      'archive_andy',
      'thank you'
    ],
    [
      'leech_larry',
      'you two deserve each other honestly'
    ]
  ],
  [
    [
      'broadband_bev',
      'always-on internet changed society and nobody talks about it enough'
    ],
    [
      'Napster_refugee',
      'we used to plan our entire evening around the phone line'
    ],
    [
      'broadband_bev',
      'children today do not know discipline'
    ],
    [
      '56k_and_proud',
      'we knew discipline and also pain'
    ],
    [
      'broadband_bev',
      'exactly'
    ],
    [
      'Napster_refugee',
      'and every completed download felt like a triumph'
    ],
    [
      '56k_and_proud',
      'because it was'
    ]
  ],
  [
    [
      'suspicious_sid',
      'you people trust random executables far too easily'
    ],
    [
      'InfectedPatch_exe',
      'i feel targeted by this conversation'
    ],
    [
      'suspicious_sid',
      'you should'
    ],
    [
      'InfectedPatch_exe',
      'my name is a joke'
    ],
    [
      'ZoneAlarm_zoe',
      'it is not a good joke'
    ],
    [
      'suspicious_sid',
      'thank you zoe'
    ],
    [
      'InfectedPatch_exe',
      'this room has no whimsy'
    ]
  ]
];
  const EXTRA_CHAT_CONVERSATIONS = [
  [
    [
      'mixtape_mel',
      'spent an hour arranging a perfect mix cd order'
    ],
    [
      'WinAmp_forever',
      'for the car or for emotional damage'
    ],
    [
      'mixtape_mel',
      'both if the transition from track 4 to 5 works'
    ],
    [
      'WinAmp_forever',
      'that is art and i support it'
    ],
    [
      'mixtape_mel',
      'thank you finally someone understands sequencing'
    ],
    [
      'upload_unity',
      'i would have just shuffled them and burned it'
    ],
    [
      'mixtape_mel',
      'and that is why history will not remember you kindly'
    ]
  ],
  [
    [
      'archive_andy',
      'found an old hard drive labelled misc and i opened a portal to 2002'
    ],
    [
      'ICQ_vet',
      'how bad was it'
    ],
    [
      'archive_andy',
      'winamp skins, dragonball amvs, and a text file called read_me_really.txt'
    ],
    [
      'ICQ_vet',
      'did you read it'
    ],
    [
      'archive_andy',
      'of course'
    ],
    [
      'ICQ_vet',
      'what did it say'
    ],
    [
      'archive_andy',
      'do not delete these they are important'
    ],
    [
      'ICQ_vet',
      'were they important'
    ],
    [
      'archive_andy',
      'emotionally yes. practically no'
    ]
  ],
  [
    [
      'buffering_becky',
      'anyone else used to watch the source count more than the progress bar'
    ],
    [
      'TurboSeeder99',
      'source count is the heartbeat of the network'
    ],
    [
      'buffering_becky',
      'exactly. one new source and suddenly hope returns'
    ],
    [
      'TurboSeeder99',
      'lose one source and your whole evening changes'
    ],
    [
      'buffering_becky',
      'p2p taught me emotional fragility'
    ],
    [
      'TurboSeeder99',
      'and patience'
    ],
    [
      'buffering_becky',
      'mostly fragility though'
    ]
  ],
  [
    [
      'zipfile_zara',
      'downloaded an archive with five nested archives inside it'
    ],
    [
      'crc_checker',
      'a zip within a zip within a zip is never good news'
    ],
    [
      'zipfile_zara',
      'at the centre was a jpeg of a frog'
    ],
    [
      'crc_checker',
      'honestly better than malware'
    ],
    [
      'zipfile_zara',
      'i could not even be angry. the commitment was impressive'
    ],
    [
      'warez_wizard',
      'the old internet respected a bit'
    ],
    [
      'zipfile_zara',
      'i am seeding the frog now out of principle'
    ]
  ],
  [
    [
      'tag_editor_ted',
      'just spent forty minutes fixing metadata because the artist field said unknown again'
    ],
    [
      'lossless_lisa',
      'doing necessary work for an ungrateful world'
    ],
    [
      'tag_editor_ted',
      'someone has to care'
    ],
    [
      'lossless_lisa',
      'and yet nobody thanks the tag editor'
    ],
    [
      'tag_editor_ted',
      'they will when their library stops looking haunted'
    ],
    [
      'WinAmp_forever',
      'ted i appreciate you'
    ],
    [
      'tag_editor_ted',
      'that is enough to keep me going'
    ]
  ],
  [
    [
      'retro_riley',
      'remember when seeing more than ten sources felt like celebrity status'
    ],
    [
      'Napster_refugee',
      'still does if the file is weird enough'
    ],
    [
      'retro_riley',
      'rarity adds dignity'
    ],
    [
      'Napster_refugee',
      'and anxiety'
    ],
    [
      'retro_riley',
      'especially anxiety'
    ],
    [
      'scene_karen',
      'if i see 12 sources on something obscure i become instantly suspicious'
    ],
    [
      'Napster_refugee',
      'healthy attitude honestly'
    ]
  ],
  [
    [
      'crc_cait',
      'my burned cd worked in the stereo first time and i am unstoppable'
    ],
    [
      'burner_ben',
      'that is a blessed event'
    ],
    [
      'crc_cait',
      'no skips no weird static no track errors'
    ],
    [
      'burner_ben',
      'frame that disc'
    ],
    [
      'crc_cait',
      'i might'
    ],
    [
      'WinAmp_forever',
      'the early 2000s equivalent of landing a plane'
    ],
    [
      'crc_cait',
      'exactly that feeling'
    ]
  ],
  [
    [
      'soulseek_sid',
      'sometimes the best part of old software is that it expects you to figure things out'
    ],
    [
      'p2p_philosopher',
      'more friction. more mystery. more personality'
    ],
    [
      'soulseek_sid',
      'modern software explains too much and means too little'
    ],
    [
      'p2p_philosopher',
      'finally someone brave enough to say it'
    ],
    [
      'soulseek_sid',
      'i am not brave i am nostalgic'
    ],
    [
      'p2p_philosopher',
      'same difference online'
    ]
  ],
  [
    [
      'mp3_marty',
      'every fake file teaches you something'
    ],
    [
      'fake_file_freddy',
      'like what'
    ],
    [
      'mp3_marty',
      'trust no one. read the bitrate. inspect the size. fear confidence'
    ],
    [
      'fake_file_freddy',
      'that is more than one thing'
    ],
    [
      'mp3_marty',
      'i have been hurt repeatedly'
    ],
    [
      'fake_file_freddy',
      'fair enough'
    ],
    [
      'mp3_marty',
      'growth through betrayal'
    ]
  ],
  [
    [
      'pixelated_pam',
      'all these old avatars were like tiny declarations of identity'
    ],
    [
      'AIMbot_tony',
      'mine was a dragon with sunglasses for four years'
    ],
    [
      'pixelated_pam',
      'exactly. no notes'
    ],
    [
      'AIMbot_tony',
      'what was yours'
    ],
    [
      'pixelated_pam',
      'a blurry anime crop that told people nothing and everything'
    ],
    [
      'AIMbot_tony',
      'the era had standards'
    ],
    [
      'pixelated_pam',
      'and terrible image compression'
    ]
  ]
];
  const EXTRA_CONNECT_BURSTS = [
  [
    [
      'codec_carla',
      'if this avi needs another codec i am leaving society'
    ],
    [
      'VirtualDub_vic',
      'do not leave before trying ffdshow at least'
    ]
  ],
  [
    [
      'archive_andy',
      'morning all. found a stack of old cds and now i have responsibilities'
    ],
    [
      'mixtape_mel',
      'report back with the tracklists'
    ]
  ],
  [
    [
      'router_rich',
      'rebooted the router and everything suddenly works. technical masterpiece'
    ],
    [
      'port_forward_pete',
      'the sacred reboot claims another victory'
    ]
  ],
  [
    [
      'tag_editor_ted',
      'good evening to everyone except people who upload tracks with no artist tags'
    ],
    [
      'lossless_lisa',
      'ted woke up and chose truth'
    ]
  ],
  [
    [
      'buffering_becky',
      'my best source came back online and i nearly applauded'
    ],
    [
      'TurboSeeder99',
      'we celebrate all small miracles here'
    ]
  ],
  [
    [
      'zipfile_zara',
      'queue restored. mood restored. life restored'
    ],
    [
      'overnight_oliver',
      'thats the spirit'
    ]
  ],
  [
    [
      'retro_riley',
      'network feels lively tonight'
    ],
    [
      'ICQ_vet',
      'someone somewhere just found a rare rip and the energy shifted'
    ]
  ],
  [
    [
      'suspicious_sid',
      'daily reminder not to run random patches from strangers'
    ],
    [
      'ZoneAlarm_zoe',
      'thank you sid. keep preaching'
    ]
  ]
];

  const state = {
    activeArgument: null,
    argumentStep: 0,
    argumentTimeout: 0,
    activeConvo: null,
    convoStep: 0,
    convoTimeout: 0,
    nextConvoTick: 0,
    chatCooldowns: new Map()
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function mergeStringArray(target, extras) {
    const out = Array.isArray(target) ? target : [];
    const seen = new Set(out.map(v => String(v).toLowerCase()));
    for (const item of extras || []) {
      const text = String(item || '').trim();
      if (!text) continue;
      const key = text.toLowerCase();
      if (seen.has(key)) continue;
      out.push(text);
      seen.add(key);
    }
    return out;
  }

  function mergeThreadArray(target, extras) {
    const out = Array.isArray(target) ? target : [];
    const seen = new Set(out.map(v => JSON.stringify(v)));
    for (const item of extras || []) {
      const key = JSON.stringify(item);
      if (seen.has(key)) continue;
      out.push(clone(item));
      seen.add(key);
    }
    return out;
  }

  function ensureGlobalArray(name, originalValue, extraValue, mode) {
    if (!Array.isArray(ROOT[name])) ROOT[name] = clone(originalValue);
    if (mode === 'threads') return mergeThreadArray(ROOT[name], extraValue);
    return mergeStringArray(ROOT[name], extraValue);
  }

  ensureGlobalArray('CHAT_NICKS', ORIGINAL_PUBLIC_CHAT.CHAT_NICKS, EXTRA_CHAT_NICKS, 'strings');
  ensureGlobalArray('CHAT_GENERAL', ORIGINAL_PUBLIC_CHAT.CHAT_GENERAL, EXTRA_CHAT_GENERAL, 'strings');
  ensureGlobalArray('CHAT_TECH', ORIGINAL_PUBLIC_CHAT.CHAT_TECH, EXTRA_CHAT_TECH, 'strings');
  ensureGlobalArray('CHAT_DRAMA', ORIGINAL_PUBLIC_CHAT.CHAT_DRAMA, EXTRA_CHAT_DRAMA, 'strings');
  ensureGlobalArray('CHAT_ISP', ORIGINAL_PUBLIC_CHAT.CHAT_ISP, EXTRA_CHAT_ISP, 'strings');
  ensureGlobalArray('CHAT_MUSINGS', ORIGINAL_PUBLIC_CHAT.CHAT_MUSINGS, EXTRA_CHAT_MUSINGS, 'strings');
  ensureGlobalArray('CHAT_MUSIC', ORIGINAL_PUBLIC_CHAT.CHAT_MUSIC, EXTRA_CHAT_MUSIC, 'strings');
  ensureGlobalArray('CHAT_REBOOT_REACTIONS', ORIGINAL_PUBLIC_CHAT.CHAT_REBOOT_REACTIONS, EXTRA_REBOOT_REACTIONS, 'strings');
  ensureGlobalArray('CHAT_ARGUMENTS', ORIGINAL_PUBLIC_CHAT.CHAT_ARGUMENTS, EXTRA_CHAT_ARGUMENTS, 'threads');
  ensureGlobalArray('CHAT_CONVERSATIONS', ORIGINAL_PUBLIC_CHAT.CHAT_CONVERSATIONS, EXTRA_CHAT_CONVERSATIONS, 'threads');
  ensureGlobalArray('CONNECT_BURSTS', ORIGINAL_PUBLIC_CHAT.CONNECT_BURSTS, EXTRA_CONNECT_BURSTS, 'threads');

  function randInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  function pick(arr) {
    return Array.isArray(arr) && arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;
  }

  function gameTick() {
    return ROOT.G && typeof ROOT.G.tickCount === 'number' ? ROOT.G.tickCount : 0;
  }

  function addChatFallback(type, msg, colour) {
    const log = document.getElementById('chatLog');
    if (!log) return;
    const div = document.createElement('div');
    div.className = 'chat-msg';
    const isAlert = type === 'sys' || type === 'warn-msg' || type === 'good-msg';
    div.dataset.msgtype = isAlert ? 'alert' : 'chat';
    if (colour) div.innerHTML = `<span style="color:${colour}">${msg}</span>`;
    else if (type === 'sys') div.innerHTML = `<span class="sys">${msg}</span>`;
    else if (type === 'warn-msg') div.innerHTML = `<span class="warn-msg">${msg}</span>`;
    else if (type === 'good-msg') div.innerHTML = `<span class="good-msg">${msg}</span>`;
    else div.innerHTML = `<span class="nick">[${type}]</span> ${msg}`;

    const g = ROOT.G || {};
    const msgLower = String(msg || '').toLowerCase();
    const playerName = String(g.username || '').toLowerCase().trim();
    const groupName = String(g.sceneGroupName || g.sceneGroup || '').toLowerCase().trim();
    const releases = Array.isArray(g.topsiteReleases) ? g.topsiteReleases : [];
    const isPlayerMention = (playerName && playerName.length > 2 && msgLower.includes(playerName))
      || (groupName && groupName.length > 2 && msgLower.includes(groupName))
      || releases.some(r => {
        const rn = String((r && (r.releaseName || r.name)) || '').toLowerCase();
        return rn.length > 4 && msgLower.includes(rn);
      });
    if (isPlayerMention) div.classList.add('player-mention');

    const filter = typeof ROOT._chatFilter !== 'undefined' ? ROOT._chatFilter : 'all';
    if (filter === 'chat' && isAlert) div.style.display = 'none';
    else if (filter === 'alerts' && !isAlert) div.style.display = 'none';

    log.appendChild(div);
    if (div.style.display !== 'none') log.scrollTop = log.scrollHeight;
    while (log.children.length > 200) log.removeChild(log.firstChild);
  }

  if (typeof ROOT.addChat !== 'function') ROOT.addChat = addChatFallback;

  ROOT.getContextualMessages = function getContextualMessages() {
    const msgs = [];
    const g = ROOT.G || {};
    const plans = Array.isArray(ROOT.ISP_PLANS) ? ROOT.ISP_PLANS : [];
    const plan = plans.find(p => p && p.id === g.ispPlan) || plans[0] || { speed: 0 };

    if (plan.speed <= 56) msgs.push('dialup in 2004 is a lifestyle choice','56k brotherhood rise up. we suffer together.','estimated time remaining: geological era','every finished dial-up download deserves a commemorative plaque');
    if (plan.speed >= 512 && plan.speed < 3072) msgs.push('adsl gang where are you. we made it out of dialup.','always-on internet is the greatest luxury of the modern age.','adsl users walk around like they invented progress');
    if (plan.speed >= 3072) msgs.push('cable speeds make everyone else look like theyre downloading through a straw','the queue says 20 minutes for a 700mb file. i am become speed.','broadband confidence is very real and frankly hard to listen to');
    if (typeof g.cleanliness === 'number' && g.cleanliness < 50) msgs.push('my desktop has 47 new icons i did not put there. normal tuesday.','cydoor.dll found in 14 places. everything is fine.','my homepage changed to search-and-earn.com and i dont know how','i opened internet explorer and four toolbars appeared like a threat');
    if (g.ispThrottled) msgs.push('isp throttle is active rn. infuriating.','throttled again. adding this to my list of grievances','my provider says this is fair usage and i say unfair actually');
    if (!g.avActive && typeof g.cleanliness === 'number' && g.cleanliness < 70) msgs.push('seriously people buy antivirus before your cleanliness hits zero','no antivirus AND using kazaa. living dangerously out here','raw unprotected kazaa usage is an act of reckless theatre');
    if (Array.isArray(g.downloads) && g.downloads.some(d => d && typeof d.progress === 'number' && d.progress > 95 && d.progress < 100)) msgs.push('something stuck at 99 percent? i can feel it through the screen','one more packet. just one more packet.');
    if (Array.isArray(g.topsiteReleases) && g.topsiteReleases.length >= 3) msgs.push('this network has been unusually active lately. somebody is cooking','release chatter is spicy tonight');
    return msgs.length ? msgs : null;
  };

  ROOT.maybeStartArgument = function maybeStartArgument() {
    if (state.activeArgument !== null) return;
    if (Math.random() < 0.10) {
      state.activeArgument = pick(ROOT.CHAT_ARGUMENTS);
      state.argumentStep = 0;
      state.argumentTimeout = 0;
    }
  };

  ROOT.tickArgument = function tickArgument() {
    if (state.activeArgument === null) return;
    state.argumentTimeout--;
    if (state.argumentTimeout > 0) return;
    const line = state.activeArgument[state.argumentStep];
    if (!line || !Array.isArray(line) || line.length < 2) {
      state.activeArgument = null;
      state.argumentStep = 0;
      return;
    }
    ROOT.addChat(line[0], line[1]);
    state.argumentStep++;
    state.argumentTimeout = randInt(28, 58);
    if (state.argumentStep >= state.activeArgument.length) {
      state.activeArgument = null;
      state.argumentStep = 0;
    }
  };

  ROOT._maybeStartConvo = function _maybeStartConvo() {
    if (state.activeConvo !== null) return;
    if (gameTick() < state.nextConvoTick) return;
    if (Math.random() < 0.08) {
      state.activeConvo = pick(ROOT.CHAT_CONVERSATIONS);
      state.convoStep = 0;
      state.convoTimeout = 0;
      state.nextConvoTick = gameTick() + 4200 + Math.floor(Math.random() * 7600);
    }
  };

  ROOT._tickConvo = function _tickConvo() {
    if (state.activeConvo === null) return;
    state.convoTimeout--;
    if (state.convoTimeout > 0) return;
    const line = state.activeConvo[state.convoStep];
    if (!line || !Array.isArray(line) || line.length < 2) {
      state.activeConvo = null;
      state.convoStep = 0;
      return;
    }
    ROOT.addChat(line[0], line[1]);
    state.convoStep++;
    state.convoTimeout = Math.random() < 0.16 ? randInt(75, 145) : randInt(18, 52);
    if (state.convoStep >= state.activeConvo.length) {
      state.activeConvo = null;
      state.convoStep = 0;
    }
  };

  ROOT._fireConnectChatter = function _fireConnectChatter() {
    const burst = pick(ROOT.CONNECT_BURSTS);
    if (!burst) return;
    let delay = 350;
    burst.forEach(function (line) {
      const nick = line[0];
      const msg = line[1];
      setTimeout(function () { ROOT.addChat(nick, msg); }, delay);
      delay += randInt(550, 1350);
    });
  };

  function availableFrom(pool) {
    const tick = gameTick();
    let available = pool.filter(function (msg) {
      const last = state.chatCooldowns.get(msg);
      return last === undefined || (tick - last) >= 280;
    });
    if (!available.length) {
      state.chatCooldowns.clear();
      available = pool.slice();
    }
    return available;
  }

  ROOT.randomChatMessage = function randomChatMessage() {
    if (state.chatCooldowns.size > 300) {
      const tick = gameTick();
      for (const [msg, seenAt] of state.chatCooldowns) {
        if ((tick - seenAt) >= 280) state.chatCooldowns.delete(msg);
      }
    }

    ROOT.tickArgument();
    ROOT._tickConvo();

    if (state.activeArgument !== null && Math.random() < 0.68) return;
    if (state.activeConvo !== null && Math.random() < 0.78) return;
    if (state.activeArgument === null) ROOT.maybeStartArgument();
    if (state.activeConvo === null) ROOT._maybeStartConvo();

    const contextual = ROOT.getContextualMessages();
    const roll = Math.random();
    let pool;
    if (contextual && roll < 0.28) pool = contextual;
    else if (roll < 0.17) pool = ROOT.CHAT_TECH;
    else if (roll < 0.31) pool = ROOT.CHAT_DRAMA;
    else if (roll < 0.46) pool = ROOT.CHAT_MUSIC;
    else if (roll < 0.58) pool = ROOT.CHAT_ISP;
    else if (roll < 0.70) pool = ROOT.CHAT_MUSINGS;
    else pool = ROOT.CHAT_GENERAL;

    let available = availableFrom(pool);
    if (!available.length) available = availableFrom(ROOT.CHAT_GENERAL);
    const nick = pick(ROOT.CHAT_NICKS);
    const msg = pick(available);
    if (!nick || !msg) return;
    state.chatCooldowns.set(msg, gameTick());
    ROOT.addChat(nick, msg);
  };

  ROOT.StandalonePublicChatBundle = {
    version: '1.0.0',
    originals: ORIGINAL_PUBLIC_CHAT,
    extras: {
      general: EXTRA_CHAT_GENERAL.length,
      tech: EXTRA_CHAT_TECH.length,
      drama: EXTRA_CHAT_DRAMA.length,
      isp: EXTRA_CHAT_ISP.length,
      musings: EXTRA_CHAT_MUSINGS.length,
      music: EXTRA_CHAT_MUSIC.length,
      arguments: EXTRA_CHAT_ARGUMENTS.length,
      conversations: EXTRA_CHAT_CONVERSATIONS.length,
      connectBursts: EXTRA_CONNECT_BURSTS.length
    }
  };
})();
