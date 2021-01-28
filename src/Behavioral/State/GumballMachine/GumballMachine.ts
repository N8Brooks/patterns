import State from "./State";
import HasQuarterState from "./State/HasQuarterState";
import NoQuarterState from "./State/NoQuarterState";
import SoldOutState from "./State/SoldOutState";
import SoldState from "./State/SoldState";
import WinnerState from "./State/WinnerState";

export default class GumballMachine {
  private _soldOutState: State;
  private _noQuarterState: State;
  private _hasQuarterState: State;
  private _winnerState: State;
  private _soldState: State;

  private _count = 0;
  private _state: State;

  constructor(gumballs: number) {
    this._soldOutState = new SoldOutState(this);
    this._noQuarterState = new NoQuarterState(this);
    this._hasQuarterState = new HasQuarterState(this);
    this._winnerState = new WinnerState(this);
    this._soldState = new SoldState(this);

    this._count = gumballs;
    this._state = this._count > 0 ? this._noQuarterState : this._soldOutState;
  }

  insertQuarter(): void {
    this._state.insertQuarter();
  }

  ejectQuarter(): void {
    this._state.ejectQuarter();
  }

  turnCrank(): void {
    this._state.turnCrank();
    this._state.dispense();
  }

  releaseBall(): void {
    console.log("A gumball comes rolling out of the slot");
    this._count > 0 && this._count--;
  }

  get soldOutState(): State {
    return this._hasQuarterState;
  }

  get noQuarterState(): State {
    return this._noQuarterState;
  }

  get hasQuarterState(): State {
    return this._hasQuarterState;
  }

  get winnerState(): State {
    return this._winnerState;
  }

  get soldState(): State {
    return this._soldState;
  }

  set count(count: number) {
    if (0 < (this._count = count)) {
      this._state = this.noQuarterState;
    }
  }

  get count(): number {
    return this._count;
  }

  set state(state: State) {
    this._state = state;
  }
}
