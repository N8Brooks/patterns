import Command from "./Command";
import { NoCommand } from "./Command/NoCommand";

export default class RemoteControl {
  private onCommands: Array<Command>;
  private offCommands: Array<Command>;
  private noCommand = new NoCommand();
  private undoCommand = new NoCommand();
  private slots = 8;

  constructor() {
    this.onCommands = new Array(this.slots).fill(this.noCommand);
    this.offCommands = new Array(this.slots).fill(this.noCommand);
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    if (slot < 0 || this.slots <= slot) {
      throw new Error(`${slot} is an invalid slot for remote of length ${this.slots}.`);
    }

    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot] != this.noCommand && this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot: number): void {
    this.onCommands[slot] != this.noCommand && this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }

  toString(): string {
    return `Remote control:
            ${this.onCommands.map((command) => command.constructor.name).join("\t")}
            ${this.offCommands.map((command) => command.constructor.name).join("\t")}`;
  }
}
