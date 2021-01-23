"use strict";
exports.__esModule = true;
var Duck_1 = require("./Duck");
function miniDuckSimulator() {
    var mallard = new Duck_1.MallardDuck();
    mallard.performQuack();
    mallard.performFly();
}
miniDuckSimulator();
