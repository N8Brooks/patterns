import FlyBehavior from ".";

export default class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("Does nothing...");
  }
}
