export class PopcornPopper {
  on(): void {
    console.log("doing something");
  }

  pop(): void {
    console.log("doing something");
  }

  off(): void {
    console.log("doing something");
  }
}
export class Amplifier {
  _player: StreamPlayer | undefined;

  on(): void {
    console.log("doing something");
  }

  setStreamingPlayer(player: StreamPlayer): void {
    this._player = player;
    console.log("doing something");
  }

  setSurroundSound(): void {
    console.log("doing something");
  }

  setVolume(volume: number): void {
    console.log(`Setting volume to ${volume}`);
  }

  off(): void {
    console.log("doing something");
  }
}

export class Tuner {}

export class StreamPlayer {
  on(): void {
    console.log("doing something");
  }

  play(movie: string): void {
    console.log(`Playing ${movie}`);
  }

  stop(): void {
    console.log("doing something");
  }

  off(): void {
    console.log("doing something");
  }
}

export class Projector {
  on(): void {
    console.log("doing something");
  }

  wideScreenMode(): void {
    console.log("doing something");
  }

  off(): void {
    console.log("doing something");
  }
}

export class TheaterLights {
  dim(level: number): void {
    console.log(`Dimming lights to ${level}`);
  }

  on(): void {
    console.log("doing something");
  }
}

export class Screen {
  down(): void {
    console.log("doing something");
  }

  up(): void {
    console.log("doing something");
  }
}
