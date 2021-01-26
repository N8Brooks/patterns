import Command from ".";

export class MacroComand implements Command {
  _commands: Array<Command>;

  constructor(commands: Array<Command>) {
    this._commands = [...commands];
  }

  execute(): void {
    this._commands.forEach((command) => command.execute());
  }

  undo(): void {
    this._commands.forEach((command) => command.undo());
  }
}
