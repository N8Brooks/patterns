import { MallardDuck } from "./Duck";

function miniDuckSimulator() {
  const mallard = new MallardDuck();
  mallard.performQuack();
  mallard.performFly();
}

miniDuckSimulator();
