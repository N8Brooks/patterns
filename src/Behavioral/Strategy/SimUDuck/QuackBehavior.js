"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MuteQuack = exports.Squeak = exports.Quack = exports.QuackBehavior = void 0;
var QuackBehavior = /** @class */ (function () {
    function QuackBehavior() {
    }
    return QuackBehavior;
}());
exports.QuackBehavior = QuackBehavior;
var Quack = /** @class */ (function (_super) {
    __extends(Quack, _super);
    function Quack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quack.prototype.quack = function () {
        console.log("Quacking");
    };
    return Quack;
}(QuackBehavior));
exports.Quack = Quack;
var Squeak = /** @class */ (function (_super) {
    __extends(Squeak, _super);
    function Squeak() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Squeak.prototype.quack = function () {
        console.log("Squeak");
    };
    return Squeak;
}(QuackBehavior));
exports.Squeak = Squeak;
var MuteQuack = /** @class */ (function (_super) {
    __extends(MuteQuack, _super);
    function MuteQuack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MuteQuack.prototype.quack = function () {
        console.log("...");
    };
    return MuteQuack;
}(QuackBehavior));
exports.MuteQuack = MuteQuack;
