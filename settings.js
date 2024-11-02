require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6282396328667" // kalo ga paham chat gw dstu 🗿
global.namaowner = "MAHIRU SHINA"

//======== Setting Bot & Link ========//
global.namabot = "Shina Mahiru" 
global.namabot2 = "Shina Mahiru"
global.foother = "© Copyright Shina Mahiru - 2024"
global.idsaluran = "120363344211897809@newsletter"
global.linkgc = 'https://chat.whatsapp.com/KUctG1lRvlC7ItQzE8TLvN'
global.linksaluran = "https://whatsapp.com/channel/0029VarD8iiKGGG9hiMvAK18"
global.linkyt = 'https://www.youtube.com/@Shyodes'
global.linktele = "https://t.me/ShyoDes"
global.packname = "Created By Shina Mahiru"
global.author = "Shina Mahiru By ShyoDes"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 10000
global.delayjpm = 10000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "-" // LINK LOGIN PANEL
global.apikey = "-" // PLTA AMBIL DISETTINGAN ADMIN PANEL / APLICATION
global.capikey = "-" // PLTC AMBIL DIACCOUNT

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "NOPE ELU"
global.gopay = false
global.ovo = false
global.seabank = false
global.pulsa = "NOPE ELU"
global.qris = fs.readFileSync("./media/qris.jpeg")
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error rek butut 🗿🤣",
"done": "cek bng 🗿", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "Fitur Khusus ownerkuuuu", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer ShyoDes"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
