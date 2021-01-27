import { Amplifier, PopcornPopper, Projector, Screen, StreamPlayer, TheaterLights, Tuner } from "./Components";

export default class HomeTheaterFacade {
  amp: Amplifier;
  tuner: Tuner;
  player: StreamPlayer;
  projector: Projector;
  lights: TheaterLights;
  screen: Screen;
  popper: PopcornPopper;

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    player: StreamPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: Screen,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  watchMovie(movie: string): void {
    console.log(`Get ready to watch ${movie}`);
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  endMove(): void {
    console.log("Shutting the movie theater down");
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.stop();
    this.player.off();
  }
}
