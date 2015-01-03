var PkText = require('./pktext');
function Pk() {

}

Pk.prototype.getText = function (soldier, player) {
    var text = '';

    while(1) {
        text += PkText.getSimpleText(soldier, player);
        if(player.hp <= 0) {
            text += player.name + '输。';
            break;
        }

        text += PkText.getSimpleText(player, soldier);
        if(soldier.hp <= 0) {
            text += soldier.name + '输。';
            break;
        }
    }
    return text;
};

module.exports = Pk;
