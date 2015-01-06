var Role = require('./role');
var Player = require('./player');
var Pk = require('./pk');
function main () {
  var roleOne = new Role('战士', 7);
  var roleTwo = new Role('普通人', 5);

  var zhangsan = new Player(roleOne, '张三', 50);
  var lisi = new Player(roleTwo, '李四', 50);

  var pk = new Pk();
  var result = pk.getTexts(zhangsan, lisi);

  console.log(result);
}

main();
