const { mysql } = require('../qcloud')

module.exports = function (ctx, next) {
  var data = mysql('waterside').select('*').from('user') 
  ctx.state.data = { msg: 'hello'+data[0]}
}