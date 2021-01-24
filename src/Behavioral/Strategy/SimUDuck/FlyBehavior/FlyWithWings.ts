import FlyBehavior from ".";

export default class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("Does nothing...");
  }
}
