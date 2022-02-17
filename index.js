const Discord = require('discord.js');
const Jimp = require('jimp');
const client = new Discord.Client();

const info = {
    token: 'discordBotToken',
}

let symbols = {
    bbbbbb: "⠀ ",
    wbbbbb: "⠁",
    bbwbbb: "⠂",
    bwbbbb: "⠈",
    wbwbbb: "⠃",
    bbbbwb: "⠄",
    wbbbwb: "⠅",
    bbwbwb: "⠆",
    wbwbwb: "⠇",
    wwbbbb: "⠉",
    bwwbbb: "⠊",
    wwwbbb: "⠋",
    bwbbwb: "⠌",
    wwbbwb: "⠍",
    bwwbwb: "⠎",
    wwwbwb: "⠏",
    bbbwbb: "⠐",
    wbbwbb: "⠑",
    bbwwbb: "⠒",
    wbwwbb: "⠓",
    bbbwwb: "⠔",
    wbbwwb: "⠕",
    bbwwwb: "⠖",
    wbwwwb: "⠗",
    bwbwbb: "⠘",
    wwbwbb: "⠙",
    bwwwbb: "⠚",
    wwwwbb: "⠛",
    bwbwwb: "⠜",
    wwbwwb: "⠝",
    bwwwwb: "⠞",
    wwwwwb: "⠟",
    bbbbbw: "⠠",
    wbbbbw: "⠡",
    bbwbbw: "⠢",
    wbwbbw: "⠣",
    bbbbww: "⠤",
    wbbbww: "⠥",
    bbwbww: "⠦",
    wbwbww: "⠧",
    bwbbbw: "⠨",
    wwbbbw: "⠩",
    bwwbbw: "⠪",
    wwwbbw: "⠫",
    bwbbww: "⠬",
    wwbbww: "⠭",
    bwwbww: "⠮",
    wwwbww: "⠯",
    bbbwbw: "⠰",
    wbbwbw: "⠱",
    bbwwbw: "⠲",
    wbwwbw: "⠳",
    bbbwww: "⠴",
    wbbwww: "⠵",
    bbwwww: "⠶",
    wbwwww: "⠷",
    bwbwbw: "⠸",
    wwbwbw: "⠹",
    bwwwbw: "⠺",
    wwwwbw: "⠻",
    bwbwww: "⠼",
    wwbwww: "⠽",
    bwwwww: "⠾",
    wwwwww: "⠿"
}

function pausa(ms) {
    const date = Date.now();
    let agora = null;
    do {
      agora = Date.now();
    } while (agora - date < ms);
  }

client.on('ready', () => {
    console.log('simbora')
})

client.on('message', async (message) => {
    if(message.content.toString().startsWith('!teste')){
        let imagem = message.attachments.first() || message.mentions.users.first().displayAvatarURL({size: 256, format: 'png'})
        let index = ''
        let mensagem = ''
        let x = 1
        let y = 1
        let base = await Jimp.read(imagem)
        base.resize(57,42)
        .greyscale()
        .contrast(1)
        let max = base.getWidth() * base.getHeight()
        for(ct = 1; ct < max; ct++){
            if(/4294967295/.test(base.getPixelColor(x, y))) index +='w'
            else index+='b'
            console.log(ct)
            
            if(ct%2 == 0) {
                y+=1
                x-=1
            }
            else x+=1

            if(ct%6 == 0 && ct >= 6) {
                mensagem+=symbols[index]
                y-=3
                x+=2
                index=''
            }

            if(ct >= max-1) var msg = await message.channel.send(mensagem)

            if(x == base.getWidth()){
                mensagem+="\n"
                x=1
                y+=3
            }
        }
    }
    if(message.content.toString() === '!start'){
        for(frame = 0.005750; frame <= 0.006571; frame+=0.000001){
        let index = ''
        let mensagem = ''
        let x = 1
        let y = 1
        let base = await Jimp.read(`frames/Bad Apple_${frame.toFixed(6).toString().slice(2)}.jpeg`)
        
        base.greyscale()
        base.contrast(1)
        let max = base.getWidth() * base.getHeight()
        for(ct = 1; ct < max; ct++){
            if(/4294967295/.test(base.getPixelColor(x, y))) index +='w'
            else index+='b'

            console.log(`${frame.toFixed(6)}`)


            if(ct%2 == 0) {
                y+=1
                x-=1
            }
            else x+=1

            if(ct%6 == 0 && ct >= 6) {
                mensagem+=symbols[index]
                // console.log(symbols[index], index, ct, 'x:' + x, 'y:' + y)
                y-=3
                x+=2
                index=''
            }

            if(ct >= max-1) {
                index=''
                if(frame <= 0.005750){
                    var msg = await message.channel.send(mensagem)
                }
                else {
                    msg.edit(mensagem)
                    pausa(1000)
                }
                mensagem=''
                x=1
                y=1
            }

            if(x == base.getWidth()){
                mensagem+="\n"
                x=1
                y+=3
            }
        }
        }
    }
})

client.login(info.token);