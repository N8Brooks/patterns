import { CeilingFanOffCommand, CeilingFanOnCommand } from "./Commands/CeilingFan";
import { GarageDoorDownCommand, GarageDoorUpCommand } from "./Commands/GarageDoor";
import { LightOffCommand, LightOnCommand } from "./Commands/Light";
import { StereoOffCommand, StereoOnWithCDCommand } from "./Commands/Stereo";
import RemoteControl from "./RemoteControl";
import { CeilingFan, GarageDoor, Light, Stereo } from "./SlotItems";

function remoteLoader(): void {
  const remoteControl = new RemoteControl();

  const livingRoomLight = new Light("Living Room");
  const kitchenLight = new Light("Kitchen");
  const ceilingFan = new CeilingFan("Living Room");
  const garageDoor = new GarageDoor();
  const stereo = new Stereo();

  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenLightOn = new LightOnCommand(kitchenLight);
  const kitchenLighOff = new LightOffCommand(kitchenLight);

  const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
  const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

  const garageDoorUp = new GarageDoorUpCommand(garageDoor);
  const garageDoorDown = new GarageDoorDownCommand(garageDoor);

  const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
  const stereoOff = new StereoOffCommand(stereo);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchenLightOn, kitchenLighOff);
  remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
  remoteControl.setCommand(3, stereoOnWithCD, stereoOff);
  remoteControl.setCommand(4, garageDoorUp, garageDoorDown);

  console.log(remoteControl);

  remoteControl.onButtonWasPushed(0);
  remoteControl.offButtonWasPushed(0);
  remoteControl.onButtonWasPushed(1);
  remoteControl.offButtonWasPushed(1);
  remoteControl.onButtonWasPushed(2);
  remoteControl.offButtonWasPushed(2);
  remoteControl.onButtonWasPushed(3);
  remoteControl.offButtonWasPushed(3);
  remoteControl.onButtonWasPushed(4);
  remoteControl.offButtonWasPushed(4);
}

remoteLoader();
