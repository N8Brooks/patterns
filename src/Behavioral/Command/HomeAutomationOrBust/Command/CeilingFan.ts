import Command from ".";
import { CeilingFan, fanSpeed } from "../SlotItems";

export class CeilingFanOffCommand implements Command {
  _ceilingFan: CeilingFan;
  _previousSpeed = fanSpeed.off;

  constructor(ceilingFan: CeilingFan) {
    this._ceilingFan = ceilingFan;
  }

  execute(): void {
    this._previousSpeed = this._ceilingFan.speed;
    this._ceilingFan.off();
  }

  undo(): void {
    switch (this._previousSpeed) {
      case fanSpeed.low:
        this._ceilingFan.low();
        break;
      case fanSpeed.med:
        this._ceilingFan.medium();
        break;
      case fanSpeed.high:
        this._ceilingFan.high();
        break;
    }
  }
}

export class CeilingFanLowCommand implements Command {
  _ceilingFan: CeilingFan;
  _previousSpeed = fanSpeed.off;

  constructor(ceilingFan: CeilingFan) {
    this._ceilingFan = ceilingFan;
  }

  execute(): void {
    this._previousSpeed = this._ceilingFan.speed;
    this._ceilingFan.low();
  }

  undo(): void {
    switch (this._previousSpeed) {
      case fanSpeed.off:
        this._ceilingFan.off();
        break;
      case fanSpeed.med:
        this._ceilingFan.medium();
        break;
      case fanSpeed.high:
        this._ceilingFan.high();
        break;
    }
  }
}

export class CeilingFanMediumCommand implements Command {
  _ceilingFan: CeilingFan;
  _previousSpeed = fanSpeed.off;

  constructor(ceilingFan: CeilingFan) {
    this._ceilingFan = ceilingFan;
  }

  execute(): void {
    this._previousSpeed = this._ceilingFan.speed;
    this._ceilingFan.medium();
  }

  undo(): void {
    switch (this._previousSpeed) {
      case fanSpeed.off:
        this._ceilingFan.off();
        break;
      case fanSpeed.low:
        this._ceilingFan.low();
        break;
      case fanSpeed.high:
        this._ceilingFan.high();
        break;
    }
  }
}

export class CeilingFanHighCommand implements Command {
  _ceilingFan: CeilingFan;
  _previousSpeed = fanSpeed.off;

  constructor(ceilingFan: CeilingFan) {
    this._ceilingFan = ceilingFan;
  }

  execute(): void {
    this._previousSpeed = this._ceilingFan.speed;
    this._ceilingFan.high();
  }

  undo(): void {
    switch (this._previousSpeed) {
      case fanSpeed.off:
        this._ceilingFan.off();
        break;
      case fanSpeed.low:
        this._ceilingFan.low();
        break;
      case fanSpeed.med:
        this._ceilingFan.medium();
        break;
    }
  }
}
