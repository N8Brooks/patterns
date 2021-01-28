import GumballMachine from "../GumballMachine";

export default abstract class State {
  protected _gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this._gumballMachine = gumballMachine;
  }

  abstract insertQuarter(): void;
  abstract ejectQuarter(): void;
  abstract turnCrank(): void;
  abstract dispense(): void;
}
