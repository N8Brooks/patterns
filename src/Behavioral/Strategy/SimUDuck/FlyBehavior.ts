export abstract class FlyBehavior {
  abstract fly(): void;
}

export class FlyWithWings extends FlyBehavior {
  fly() {
    console.log("Flying!");
  }
}

export class FlyNoWay extends FlyBehavior {
  fly() {
    console.log("Does nothing...");
  }
}

export class FlyRocketPowered extends FlyBehavior {
  fly() {
    console.log("Rocket powered!");
  }
}
