import Command from ".";
import { CeilingFan } from "../SlotItems";

export class CeilingFanOnCommand implements Command {
  _ceilingFan: CeilingFan;

  constructor(ceilingFan: CeilingFan) {
    this._ceilingFan = ceilingFan;
  }

  execute(): void {
    this._ceilingFan.on();
  }
}

export class CeilingFanOffCommand implements Command {
  _ceilingFan: CeilingFan;

  constructor(ceilingFan: CeilingFan) {
    this._ceilingFan = ceilingFan;
  }

  execute(): void {
    this._ceilingFan.off();
  }
}
