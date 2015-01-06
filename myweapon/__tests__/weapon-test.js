jest.dontMock('../src/weapon');

describe('Weapon', function() {
  describe('#getEffect', function () {
    it('should return effect', function() {
      var Effect = require('../src/effect');
      var Weapon = require('../src/weapon');

      var effect = new Effect('中毒了', 1, 2, 0.2, true);
      var weapon = new Weapon('毒剑', 5, [effect]);
      var text = weapon.getEffect();
      expect(text).toEqual([effect]);
    });

  });
});
