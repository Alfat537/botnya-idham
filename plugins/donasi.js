let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [085294959195]
│ • Gopay [085294959195]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285294959195
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
