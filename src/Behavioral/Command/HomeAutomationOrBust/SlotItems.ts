export class Light {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  on(): void {
    console.log(`${this._name} light is now on`);
  }

  off(): void {
    console.log(`${this._name} light is now off`);
  }
}

export class GarageDoor {
  up(): void {
    console.log("Garage door opening");
  }

  down(): void {
    console.log("Garage door closing");
  }

  stop(): void {
    console.log("Garage door stopping");
  }

  lightOn(): void {
    console.log("Garage door light on");
  }

  lightOff(): void {
    console.log("Garage door light off");
  }
}

export class Stereo {
  private _volume = 0;

  on(): void {
    console.log("Stereo on");
  }

  off(): void {
    console.log("Stereo off");
  }

  setCD(): void {
    console.log("Setting cd");
  }

  setDVD(): void {
    console.log("Setting dvd");
  }

  setRadio(): void {
    console.log("Setting radio");
  }

  set volume(volume: number) {
    console.log(`Setting volume from ${this._volume} to ${volume}`);
    this._volume = volume;
  }
}

export enum fanSpeed {
  off = 0,
  low = 1,
  med = 2,
  high = 3,
}

export class CeilingFan {
  private _name: string;
  private _speed: fanSpeed = fanSpeed.off;

  constructor(name: string) {
    this._name = name;
  }

  off(): void {
    console.log(`${this._name} fan is now off`);
    this._speed = fanSpeed.off;
  }

  low(): void {
    console.log(`${this._name} fan is now on low`);
    this._speed = fanSpeed.low;
  }

  medium(): void {
    console.log(`${this._name} fan is now on medium`);
    this._speed = fanSpeed.med;
  }

  high(): void {
    console.log(`${this._name} fan is now on high`);
    this._speed = fanSpeed.high;
  }

  get speed(): fanSpeed {
    return this._speed;
  }
}
