import State from ".";

export default class SoldState extends State {
  insertQuarter(): void {
    console.log("Please wait, we are already giving you a gumball.");
  }

  ejectQuarter(): void {
    console.log("Sorry, you already turned the crank.");
  }

  turnCrank(): void {
    console.log("Turning twice does not get you another gumball.");
  }

  dispense(): void {
    this._gumballMachine.releaseBall();
    if (this._gumballMachine.count > 0) {
      this._gumballMachine.state = this._gumballMachine.noQuarterState;
    } else {
      console.log("Oops, out of gumballs");
      this._gumballMachine.state = this._gumballMachine.soldOutState;
    }
  }
}
