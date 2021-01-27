import { Coffee, Tea } from "./Beverages";

function main(): void {
  new Coffee().prepareRecipe();
  console.log();
  new Tea().prepareRecipe();
}

main();
