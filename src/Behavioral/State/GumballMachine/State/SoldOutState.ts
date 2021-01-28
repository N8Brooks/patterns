import State from ".";

export default class SoldOutState extends State {
  insertQuarter(): void {
    console.log("Do not insert a quarter when sold out.");
  }

  ejectQuarter(): void {
    console.log("You have not inserted a quarter.");
  }

  turnCrank(): void {
    console.log("Nothing happens.");
  }

  dispense(): void {
    console.log("Cannot dispense from an empty gumball machine.");
  }
}
