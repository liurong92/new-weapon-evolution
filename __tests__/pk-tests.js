jest.autoMockOff();

describe('pk', function() {
    it('return who dead', function() {
        var Soldier = require('../src/model/soldier');
        var Role = require('../src/model/role');

        var role1 = new Role('战士', 10);
        var role2 = new Role('平民', 5);

        var soldier = new Soldier('李四', 20, role1);
        var player = new Soldier('张三', 20, role2);

        var PkText = require('../src/model/pktext');

        var result = PkText.getSimpleText(soldier, player);

        expect(result).toEqual('战士李四攻击了平民张三,张三受到了10点攻击，剩10点血。\n');
    });
});
