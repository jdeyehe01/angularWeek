"use strict";
exports.__esModule = true;
var game = /** @class */ (function () {
    function game(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    game.prototype.firstAttack = function (p1, p2, rand) {
        if (p1.speed == p2.speed) {
            if (rand <= 0.50) {
                return p1;
            }
            return p2;
        }
    };
    return game;
}());
exports.game = game;
