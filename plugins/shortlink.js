let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan link nya https://', m)

	axios.get(`https://api.xteam.xyz/shorturl/gg?url=${text}&APIKEY=dhamzbot`).then ((res) => {
	 	let hasil = `Link: ${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['shortlink'].map(v => v + ' https://youtube.com <== CONTOH')
handler.tags = ['tools']
handler.command = /^(shortlink)$/i
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