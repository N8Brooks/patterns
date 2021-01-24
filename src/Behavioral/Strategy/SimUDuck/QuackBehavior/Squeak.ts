import QuackBehavior from ".";

export default class Squeak implements QuackBehavior {
  quack(): void {
    console.log("Squeak");
  }
}
