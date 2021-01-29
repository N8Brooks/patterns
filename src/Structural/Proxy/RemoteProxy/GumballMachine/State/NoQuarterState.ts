import State from ".";

export default class NoQuarterState extends State {
  insertQuarter(): void {
    console.log("You inserted a quarter");
    this._gumballMachine.state = this._gumballMachine.hasQuarterState;
  }

  ejectQuarter(): void {
    console.log("You have not inserted a quarter.");
  }

  turnCrank(): void {
    console.log("You have not inserted a quarter.");
  }

  dispense(): void {
    console.log("Cannot dispense gumball.");
  }
}
