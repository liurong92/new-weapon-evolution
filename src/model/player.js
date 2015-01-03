function Player (name, hp, role) {
    this.name = name;
    this.hp = hp;
    this.role = role;
}

Player.prototype.getRoleName = function () {
  return this.role.roleName;
};

Player.prototype.getRoleAttack = function () {
  return this.role.roleAttack;
};

module.exports = Player;
