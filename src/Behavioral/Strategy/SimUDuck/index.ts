import { MallardDuck, ModelDuck } from "./Duck";
import { FlyRocketPowered } from "./FlyBehavior";

function miniDuckSimulator() {
  const mallard = new MallardDuck();
  mallard.performQuack();
  mallard.performFly();

  const model = new ModelDuck();
  model.flyBehavior = new FlyRocketPowered();
  model.performFly();
}

miniDuckSimulator();
