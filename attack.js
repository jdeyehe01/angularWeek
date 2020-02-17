"use strict";
exports.__esModule = true;
var attack = /** @class */ (function () {
    function attack(name, precision, dommage) {
        this.name = name;
        this.precision = precision;
        this.dommage = dommage;
    }
    attack.prototype.attackPokemon = function (targetPokemon) {
        targetPokemon.life = targetPokemon.life - this.dommage;
        return targetPokemon;
    };
    return attack;
}());
exports.attack = attack;
