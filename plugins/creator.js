let handler = function (m) {
  conn.fakeReply(m.chat, 'Ini Owner Ku :)', '32460222190@s.whatsapp.net', '*Saya Salsa :)*')
  //this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  //plsss do not change this, jika mau add boleh tapi jangan rubah
  this.sendContact(m.chat, '32460222190', 'Salsa Cans :>', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
