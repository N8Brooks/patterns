import GumballMachine from "./GumballMachine";

export default class GumballMonitor {
  _machine: GumballMachine;

  constructor(machine: GumballMachine) {
    this._machine = machine;
  }

  report(): void {
    console.log(`Gumball machine: ${this._machine.location}`);
    console.log(`Current inventory: ${this._machine.count} gumballs`);
    console.log(`Current state: ${this._machine.state.constructor.name}`);
  }
}
