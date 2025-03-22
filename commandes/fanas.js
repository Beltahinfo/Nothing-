const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "list", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");

    var commandsList = {};
    var mode = (s.MODE).toLocaleLowerCase() !== "yes" ? "private" : "public";

    cm.map((com) => {
        if (!commandsList[com.categorie]) commandsList[com.categorie] = [];
        commandsList[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('EAT');

    const time = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
  ☻ •Ꮹσσd єvєníng : ${nomAuteurMessage}

╭━•••••⪼ 
┋ ☻ •σwnєr : hαppínєss
┋ ☻ •prєfíх : [ ${s.PREFIXE} ]
┋ ☻ •mσdє : ${mode}
┋ ☻ •dαtє  : ${date}
┋ ☻ •plαtfσrm : ${os.platform()}
┋ ☻ •σwnєr : ɴᴊᴀʙᴜʟᴏ ᴊʙ 
┋ ☻ •vísíσn : 1.0
┋ ☻ •plugíns : ${cm.length}
╰━•••••⪼ \n`;

    let menuMsg = ` ${readmore}`;

    {
        menuMsg += `
`íα`
╭─•••••⪼ 
┋ ☻ • njαвulσ 
┋ ☻ • dαllє 
┋ ☻ • αí 
┋ ☻ • gpt
╰─•••••⪼
`gєnєrαl`
╭─•••••⪼  
┋ ☻ • σwnєr 
┋ ☻ • dєv 
┋ ☻ • suppσrt 
┋ ☻ • αntí-dєlєtє 
┋ ☻ • αntí-stíckєr-dєlєtє 
┋ ☻ • вíвlє 
┋ ☻ • pσll 
┋ ☻ • вrσαdcαst 
┋ ☻ • cσntαctsαvє 
┋ ☻ • gєtαllmєmвєrs 
┋ ☻ • chαnnєll 
┋ ☻ • grσups 
┋ ☻ • updαtє 
┋ ☻ • nαmєвσt 
┋ ☻ • nαmєσwnєr 
┋ ☻ • hαck 
┋ ☻ • undєfínєd 
┋ ☻ • mєnu 
┋ ☻ • σвt 
┋ ☻ • tєst 
┋ ☻ • uptímє 
┋ ☻ • pαír 
┋ ☻ • píng 
┋ ☻ • αrєαct 
┋ ☻ • ímαg-gєnєrαtє 
┋ ☻ • tσєхtrαct 
┋ ☻ • fluх-ímg 
┋ ☻ • mínα 
┋ ☻ • dвєαutífч
╰─•••••⪼
`dσwnlσαd`
╭─•••••⪼ 
┋ ☻ • vídєσ1 
┋ ☻ • αpk 
┋ ☻ • ínstαgrαm 
┋ ☻ • fαcєвσσk 
┋ ☻ • tíktσk 
┋ ☻ • lítє 
┋ ☻ • plαч1
╰─•••••⪼
`fun`
╭─•••••⪼ 
┋ ☻ • rαnímє 
┋ ☻ • fαncч 
┋ ☻ • rαnk 
┋ ☻ • tσprαnk
╰─•••••⪼
`sєαrch`
╭─•••••⪼
┋ ☻ • hєlp  
┋ ☻ • gσσglє 
┋ ☻ • ímdв 
┋ ☻ • mσvíє 
┋ ☻ • dєfínє 
┋ ☻ • lчrícs 
┋ ☻ • ímg 
┋ ☻ • gαlαхч 
┋ ☻ • plαч 
┋ ☻ • vídєσ3 
┋ ☻ • íphσnє12prσ
╰─•••••⪼
`cσnvєrsíσn`
╭─•••••⪼  
┋ ☻ • єmσmíх 
┋ ☻ • stíckєr 
┋ ☻ • scrσp 
┋ ☻ • tαkє 
┋ ☻ • wrítє 
┋ ☻ • phσtσ 
┋ ☻ • trt 
┋ ☻ • url 
┋ ☻ • tєstαmєnt
╰─•••••⪼
`usєr`
╭─•••••⪼  
┋ ☻ • fαct 
┋ ☻ • quσtєs 
┋ ☻ • dít 
┋ ☻ • íttα 
┋ ☻ • sαч
╰─•••••⪼
`ímαgє-єdít`
╭─•••••⪼  
┋ ☻ • shít 
┋ ☻ • wαstєd 
┋ ☻ • wαntєd 
┋ ☻ • tríggєr 
┋ ☻ • trαsh 
┋ ☻ • ríp 
┋ ☻ • sєpíα 
┋ ☻ • rαínвσw 
┋ ☻ • hítlєr 
┋ ☻ • ínvєrt 
┋ ☻ • jαíl 
┋ ☻ • αffєct 
┋ ☻ • вєαutíful 
┋ ☻ • вlur 
┋ ☻ • círclє 
┋ ☻ • fαcєpαlm 
┋ ☻ • grєчscαlє 
┋ ☻ • jσkє
╰─•••••⪼
`gαmєs`
╭─•••••⪼  
┋ ☻ • ríddlє 
┋ ☻ • chífumí 
┋ ☻ • quízz
╰─•••••⪼
`grσup`
╭─•••••⪼  
┋ ☻ • αdd 
┋ ☻ • dísαp-σff 
┋ ☻ • dísαp 
┋ ☻ • rєq 
┋ ☻ • dísαp90 
┋ ☻ • rєjєct 
┋ ☻ • dísαp7 
┋ ☻ • dísαp1 
┋ ☻ • αpprσvє 
┋ ☻ • vcf 
┋ ☻ • ínvítє 
┋ ☻ • rєvσkє 
┋ ☻ • αntíwσrd 
┋ ☻ • αntílínk-αll 
┋ ☻ • tαgαll 
┋ ☻ • línk 
┋ ☻ • prσmσtє 
┋ ☻ • dєmσtє 
┋ ☻ • rєmσvє 
┋ ☻ • dєl 
┋ ☻ • ínfσ 
┋ ☻ • αntílínk 
┋ ☻ • αntíвσt 
┋ ☻ • grσup 
┋ ☻ • gnαmє 
┋ ☻ • gdєsc 
┋ ☻ • gpp 
┋ ☻ • hídєtαg 
┋ ☻ • αutσmutє 
┋ ☻ • αutσunmutє 
┋ ☻ • fkíck 
┋ ☻ • nsfw 
┋ ☻ • kíckαll 
┋ ☻ • σnlчαdmín 
┋ ☻ • tαgαdmín 
┋ ☻ • wαrn 
┋ ☻ • wαrn
╰─•••••⪼
`mσds`
╭─•••••⪼
┋ ☻ • lєft 
┋ ☻ • tєlєstíckєr 
┋ ☻ • crєw 
┋ ☻ • lєft 
┋ ☻ • jσín 
┋ ☻ • jíd 
┋ ☻ • вlσck 
┋ ☻ • unвlσck 
┋ ☻ • вαn 
┋ ☻ • вαngrσup 
┋ ☻ • sudσ 
┋ ☻ • sαvє 
┋ ☻ • mєntíσn 
┋ ☻ • lulcαtч 
┋ ☻ • sαdcαtч 
┋ ☻ • nσkíαh 
┋ ☻ • unfσrgívαв 
┋ ☻ • pσσhh 
┋ ☻ • σhσgwαч 
┋ ☻ • jвídєn 
┋ ☻ • hdríp 
┋ ☻ • clσwns 
┋ ☻ • tєrmínαt
╰─•••••⪼
`hєntαí`
╭─•••••⪼  
┋ ☻ • hwαífu 
┋ ☻ • trαp 
┋ ☻ • hnєkσ 
┋ ☻ • вlσwjσв 
┋ ☻ • hєntαívíd 
┋ ☻ • hwαífu 
┋ ☻ • trαp 
┋ ☻ • hnєkσ 
┋ ☻ • вlσwjσв 
┋ ☻ • hєntαívíd 
┋ ☻ • αss 
┋ ☻ • mαstєrвαtíσn 
┋ ☻ • thígh 
┋ ☻ • pαntч 
┋ ☻ • wαífuєs1 
┋ ☻ • trαp1 
┋ ☻ • nєkσ1 
┋ ☻ • вlσwjσв1
╰─•••••⪼
`hєrσku`
╭─•••••⪼  
┋ ☻ • sєtvαr 
┋ ☻ • αllvαr 
┋ ☻ • gєtvαr
╰─•••••⪼
`lσgσ`
╭─•••••⪼  
┋ ☻ • hαckєr 
┋ ☻ • drαgσnвαll 
┋ ☻ • nαrutσ 
┋ ☻ • dídσng 
┋ ☻ • wαll 
┋ ☻ • summєr 
┋ ☻ • nєσnlíght 
┋ ☻ • grєєnnєσn 
┋ ☻ • glítch 
┋ ☻ • dєvíl 
┋ ☻ • вσσm 
┋ ☻ • wαtєr 
┋ ☻ • snσw 
┋ ☻ • trαnsfσrmєr 
┋ ☻ • thundєr 
┋ ☻ • hαrrчpσttєr 
┋ ☻ • cαt 
┋ ☻ • whítєgσld 
┋ ☻ • líghtglσw 
┋ ☻ • thσr 
┋ ☻ • nєσn 
┋ ☻ • purplє 
┋ ☻ • gσld 
┋ ☻ • αrєnα 
┋ ☻ • íncαndєscєnt
╰─•••••⪼
`sєαrch`
╭─•••••⪼
┋ ☻ • lчrícs 
┋ ☻ • scrєєnswídth 
┋ ☻ • scrєєnscrσp 
┋ ☻ • mαхαgє 
┋ ☻ • jpg 
┋ ☻ • png 
┋ ☻ • nσαnímαtє 
┋ ☻ • wαít 
┋ ☻ • víєwpσrtwídth 
┋ ☻ • íphσnє5 
┋ ☻ • íphσnє6 
┋ ☻ • íphσnє6plus 
┋ ☻ • íphσnєх 
┋ ☻ • íphσnє14prσmαх 
┋ ☻ • gαlαхчs5 
┋ ☻ • scrєєnshσt 
┋ ☻ • ímgs 
┋ ☻ • mєssí
╰─•••••⪼
`rєαctíσn`
╭─•••••⪼  
┋ ☻ • вullч 
┋ ☻ • cuddlє 
┋ ☻ • crч 
┋ ☻ • hug 
┋ ☻ • αwσσ 
┋ ☻ • kíss 
┋ ☻ • líck 
┋ ☻ • pαt 
┋ ☻ • smug 
┋ ☻ • вσnk 
┋ ☻ • чєєt 
┋ ☻ • вlush 
┋ ☻ • smílє 
┋ ☻ • wαvє 
┋ ☻ • híghfívє 
┋ ☻ • hαndhσld 
┋ ☻ • nσm 
┋ ☻ • вítє 
┋ ☻ • glσmp 
┋ ☻ • slαp 
┋ ☻ • kíll 
┋ ☻ • kíck 
┋ ☻ • hαppч 
┋ ☻ • wínk 
┋ ☻ • pσkє 
┋ ☻ • dαncє 
┋ ☻ • críngє
╰─•••••⪼
`gíthuв`
╭─•••••⪼ 
┋ ☻ • gít 
┋ ☻ • rєpσ 
┋ ☻ • scrípt 
┋ ☻ • sc
╰─•••••⪼
`hєrσku-clíєnt`
╭─•••••⪼  
┋ ☻ • αntícαll 
┋ ☻ • rєαdstαtus 
┋ ☻ • αntídєlєtє 
┋ ☻ • dσwnlσαdstαtus 
┋ ☻ • stαrtmєssαgє 
┋ ☻ • rєαdmєssαgє 
┋ ☻ • pm-pєrmít 
┋ ☻ • chαtвσt 
┋ ☻ • grєєt 
┋ ☻ • αntívv 
┋ ☻ • puвlícmσdє 
┋ ☻ • αutσrєcσrd 
┋ ☻ • αutσtчpíng 
┋ ☻ • αlwαчsσnlínє 
┋ ☻ • prívαtєmσdє 
┋ ☻ • αutσlíkєstαtus 
┋ ☻ • chαtвσt 
┋ ☻ • sєttíngs
╰─•••••⪼
`wєєв`
╭─•••••⪼  
┋ ☻ • wαífu 
┋ ☻ • nєkσ 
┋ ☻ • shínσвu 
┋ ☻ • mєgumín 
┋ ☻ • cσsplαч 
┋ ☻ • cσuplєpp
╰─•••••⪼`;
    }

    menuMsg += `\n> sir Njabulo Jb 2025`;

    var imageUrl = mybotpic();

    try {
        if (imageUrl.match(/\.(mp4|gif)$/i)) {
            await zk.sendMessage(dest, { video: { url: imageUrl }, caption: infoMsg + menuMsg, gifPlayback: true }, { quoted: ms });
        } else if (imageUrl.match(/\.(jpeg|png|jpg)$/i)) {
            await zk.sendMessage(dest, { image: { url: imageUrl }, caption: infoMsg + menuMsg }, { quoted: ms });
        } else {
            repondre(infoMsg + menuMsg);
        }

        // Download and send audio
        const audioUrl = "https://files.catbox.moe/dimtpb.m4a";
        const audioPath = "./temp_audio.mp3";

        const response = await axios({
            url: audioUrl,
            method: "GET",
            responseType: "stream",
        });

        const writer = fs.createWriteStream(audioPath);
        response.data.pipe(writer);

        writer.on("finish", async () => {
            await zk.sendMessage(dest, { audio: { url: audioPath }, mimetype: "audio/mp4", ptt: true }, { quoted: ms });
            fs.unlinkSync(audioPath); // Delete the audio file after sending
        });

    } catch (e) {
        console.log("🥵🥵 Menu error: " + e);
        repondre("🥵🥵 Menu error: " + e);
    }
});
      
