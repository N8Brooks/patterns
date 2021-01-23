import MallardDuck from "./Duck/MallardDuck";
import ModelDuck from "./Duck/ModelDuck";
import FlyRocketPowered from "./FlyBehavior/FlyRocketPowered";

function miniDuckSimulator() {
  const mallard = new MallardDuck();
  mallard.performQuack();
  mallard.performFly();

  const model = new ModelDuck();
  model.flyBehavior = new FlyRocketPowered();
  model.performFly();
}

miniDuckSimulator();
