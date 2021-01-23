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
exports.FlyNoWay = exports.FlyWithWings = exports.FlyBehavior = void 0;
var FlyBehavior = /** @class */ (function () {
    function FlyBehavior() {
    }
    return FlyBehavior;
}());
exports.FlyBehavior = FlyBehavior;
var FlyWithWings = /** @class */ (function (_super) {
    __extends(FlyWithWings, _super);
    function FlyWithWings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyWithWings.prototype.fly = function () {
        console.log("Flying!");
    };
    return FlyWithWings;
}(FlyBehavior));
exports.FlyWithWings = FlyWithWings;
var FlyNoWay = /** @class */ (function (_super) {
    __extends(FlyNoWay, _super);
    function FlyNoWay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyNoWay.prototype.fly = function () {
        console.log("Does nothing...");
    };
    return FlyNoWay;
}(FlyBehavior));
exports.FlyNoWay = FlyNoWay;
