import FlyBehavior from ".";

export default class FlyNoWay extends FlyBehavior {
  fly() {
    console.log("Does nothing...");
  }
}
