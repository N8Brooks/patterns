import Command from ".";
import { GarageDoor } from "../SlotItems";

export class GarageDoorUpCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.up();
  }

  undo(): void {
    this.garageDoor.down();
  }
}

export class GarageDoorDownCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.down();
  }

  undo(): void {
    this.garageDoor.up();
  }
}

export class GarageDoorStopCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.stop();
  }

  undo(): void {
    // pass
  }
}

export class GarageDoorLightOnCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.lightOn();
  }

  undo(): void {
    this.garageDoor.lightOff();
  }
}

export class GarageDoorLightOffCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.lightOff();
  }

  undo(): void {
    this.garageDoor.lightOn();
  }
}
