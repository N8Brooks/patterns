import State from ".";

export default class HasQuarterState extends State {
  insertQuarter(): void {
    console.log("You cannot insert another quarter.");
  }

  ejectQuarter(): void {
    console.log("Quarter returned.");
  }

  turnCrank(): void {
    console.log("You turned.");
    this._gumballMachine.state = Math.random() < 0.3 ? this._gumballMachine.winnerState : this._gumballMachine.soldState;
  }

  dispense(): void {
    console.log("No gumball dispensed.");
  }
}
