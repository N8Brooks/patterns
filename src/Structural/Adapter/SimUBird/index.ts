import { Duck, MallardDuck } from "./Duck";
import { TurkeyAdapter, WildTurkey } from "./Turkey";

function main() {
  const mallardDuck = new MallardDuck();
  const wildTurkey = new TurkeyAdapter(new WildTurkey());
  const ducks: Array<Duck> = [mallardDuck, wildTurkey];

  ducks.forEach((duck) => duck.quack());

  ducks.forEach((duck) => duck.fly());
}

main();
