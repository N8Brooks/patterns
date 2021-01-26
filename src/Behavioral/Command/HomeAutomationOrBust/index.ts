import {
  CeilingFanHighCommand,
  CeilingFanLowCommand,
  CeilingFanMediumCommand,
  CeilingFanOffCommand,
} from "./Command/CeilingFan";
import { GarageDoorDownCommand, GarageDoorUpCommand } from "./Command/GarageDoor";
import { LightOffCommand, LightOnCommand } from "./Command/Light";
import { MacroComand } from "./Command/MacroCommand";
import { StereoOffCommand, StereoOnWithCDCommand } from "./Command/Stereo";
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

  const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);
  const ceilingFanLow = new CeilingFanLowCommand(ceilingFan);
  const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);
  const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);

  const garageDoorUp = new GarageDoorUpCommand(garageDoor);
  const garageDoorDown = new GarageDoorDownCommand(garageDoor);

  const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
  const stereoOff = new StereoOffCommand(stereo);

  const macroCommandOn = new MacroComand([livingRoomLightOn, ceilingFanHigh, stereoOnWithCD]);
  const macroCommandOff = new MacroComand([livingRoomLightOff, ceilingFanOff, stereoOff]);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchenLightOn, kitchenLighOff);
  remoteControl.setCommand(2, stereoOnWithCD, stereoOff);
  remoteControl.setCommand(3, garageDoorUp, garageDoorDown);

  remoteControl.setCommand(4, ceilingFanLow, ceilingFanOff);
  remoteControl.setCommand(5, ceilingFanMedium, ceilingFanOff);
  remoteControl.setCommand(6, ceilingFanHigh, ceilingFanOff);

  remoteControl.setCommand(7, macroCommandOn, macroCommandOff);

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
  console.log();

  remoteControl.onButtonWasPushed(0);
  remoteControl.undoButtonWasPushed();
  console.log();

  remoteControl.onButtonWasPushed(4);
  remoteControl.onButtonWasPushed(5);
  remoteControl.onButtonWasPushed(6);
  remoteControl.undoButtonWasPushed();
  console.log();

  remoteControl.onButtonWasPushed(7);
  remoteControl.undoButtonWasPushed();
  remoteControl.offButtonWasPushed(7);
}

remoteLoader();
