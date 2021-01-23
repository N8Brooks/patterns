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
exports.RubberDuck = exports.RedheadDuck = exports.MallardDuck = void 0;
var FlyBehavior_1 = require("./FlyBehavior");
var QuackBehavior_1 = require("./QuackBehavior");
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performSwim = function () {
        console.log("All ducks float, even decoys.");
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this) || this;
        _this.quackBehavior = new QuackBehavior_1.Quack();
        _this.flyBehavior = new FlyBehavior_1.FlyWithWings();
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log("I'm a real Mallard duck");
    };
    return MallardDuck;
}(Duck));
exports.MallardDuck = MallardDuck;
var RedheadDuck = /** @class */ (function (_super) {
    __extends(RedheadDuck, _super);
    function RedheadDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedheadDuck.prototype.display = function () {
        console.log("idk");
    };
    return RedheadDuck;
}(Duck));
exports.RedheadDuck = RedheadDuck;
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RubberDuck.prototype.RubberDuck = function () {
        this.quackBehavior = new QuackBehavior_1.Squeak();
    };
    RubberDuck.prototype.display = function () {
        console.log("idk");
    };
    return RubberDuck;
}(Duck));
exports.RubberDuck = RubberDuck;
