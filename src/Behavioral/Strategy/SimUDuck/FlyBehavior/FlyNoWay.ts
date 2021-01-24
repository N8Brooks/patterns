import FlyBehavior from ".";

export default class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("Flying!");
  }
}
