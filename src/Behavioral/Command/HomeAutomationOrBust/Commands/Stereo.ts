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
}

export class StereoOffCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.off();
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
}

export class StereoSetDVDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.setDVD();
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
}
