import Command from "./Commands";
import { NoCommand } from "./Commands/NoCommand";

export default class RemoteControl {
  private onCommands: Array<Command>;
  private offCommands: Array<Command>;
  slots = 7;

  constructor() {
    const noCommand = new NoCommand();
    this.onCommands = new Array(this.slots).fill(noCommand);
    this.offCommands = new Array(this.slots).fill(noCommand);
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    if (slot < 0 || this.slots <= slot) {
      throw new Error(`${slot} is an invalid slot for remote of length ${this.slots}.`);
    }

    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  toString(): string {
    return `Remote control:
            ${this.onCommands.map((command) => command.constructor.name).join("\t")}
            ${this.offCommands.map((command) => command.constructor.name).join("\t")}`;
  }
}
