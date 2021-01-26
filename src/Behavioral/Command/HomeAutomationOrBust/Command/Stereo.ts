import Command from ".";
import { Stereo } from "../SlotItems";

export class StereoOnCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.on();
  }

  undo(): void {
    this.stereo.off();
  }
}

export class StereoOffCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
  }
}

export class StereoOnWithCDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.volume = 11;
  }

  undo(): void {
    this.stereo.volume = 0;
    this.stereo.off();
  }
}

export class StereoSetDVDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.setDVD();
  }

  undo(): void {
    // pass
  }
}

export class StereoSetRadioCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.setRadio();
  }

  undo(): void {
    // pass
  }
}
