import Command from ".";

export class NoCommand implements Command {
  execute(): void {
    throw new Error("No command is not meant to be executed.");
  }
}
