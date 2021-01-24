import QuackBehavior from ".";

export default class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quacking");
  }
}
