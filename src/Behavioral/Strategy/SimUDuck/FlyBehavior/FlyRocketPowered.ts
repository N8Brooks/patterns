import FlyBehavior from ".";

export default class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("Rocket powered!");
  }
}
