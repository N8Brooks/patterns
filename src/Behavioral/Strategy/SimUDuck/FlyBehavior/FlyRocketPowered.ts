import FlyBehavior from ".";

export default class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log("Rocket powered!");
  }
}
