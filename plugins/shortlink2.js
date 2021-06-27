let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan link nya https://', m)

	axios.get(`https://api.xteam.xyz/shorturl/bitly?url=${text}&APIKEY=dhamzbot`).then ((res) => {
	 	let hasil = `Long Url: ${res.data.result.long_url}\nShort Url: ${res.data.result.link}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['shortlink2'].map(v => v + ' https://youtube.com <== CONTOH')
handler.tags = ['tools']
handler.command = /^(shortlink2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler