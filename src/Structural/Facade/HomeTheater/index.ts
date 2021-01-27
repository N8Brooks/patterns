import { Amplifier, PopcornPopper, Projector, Screen, StreamPlayer, TheaterLights, Tuner } from "./Components";
import HomeTheaterFacade from "./HomeTheaterFacade";

function homeTheaterTestDrive(): void {
  const amp = new Amplifier();
  const tuner = new Tuner();
  const player = new StreamPlayer();
  const projector = new Projector();
  const lights = new TheaterLights();
  const screen = new Screen();
  const popper = new PopcornPopper();

  const homeTheaterFacade = new HomeTheaterFacade(amp, tuner, player, projector, lights, screen, popper);

  homeTheaterFacade.watchMovie("Raiders of the Lost Ark");
  homeTheaterFacade.endMove();
}

homeTheaterTestDrive();
