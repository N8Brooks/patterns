import State from ".";

export default class WinnerState extends State {
  insertQuarter(): void {
    console.log("Cannot insert quarter at the moment");
  }

  ejectQuarter(): void {
    console.log("You already spent your quarter");
  }

  turnCrank(): void {
    console.log("Cannot turn on winner state.");
  }

  dispense(): void {
    this._gumballMachine.releaseBall();
    if (this._gumballMachine.count == 0) {
      this._gumballMachine.state = this._gumballMachine.soldOutState;
    } else {
      console.log("YOU ARE A WINNER! You got two gumballs.");
      if (this._gumballMachine.count > 0) {
        this._gumballMachine.state = this._gumballMachine.noQuarterState;
      } else {
        console.log("Oops, out of gumballs!");
        this._gumballMachine.state = this._gumballMachine.soldOutState;
      }
    }
  }
}
