const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/PicsArt_09-26-04.42.28.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Ameer Suhail*
*Creator number : wa.me/917736129238?text=Hi%20Monster%20Lallu.%20*
*Bot setting video : https://youtube.com/channel/UCn2lJjIrNXouId9m2u_vZrw*
*Githublink (Setup)  :    https://github.com/ameer-kallumthodi/pikachu*
*Audio commads :   https://github.com/ameer-kallumthodi/pikachu/tree/master/uploads*
*Sticker commads : https://github.com/ameer-kallumthodi/pikachu/tree/master/uploads*
`}) 

}));
