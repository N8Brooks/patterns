import { DinerMenuIterator, LunchMenuIterator, MenuItem, Waitress } from "./Restaurant";

function main() {
  const lunch = new LunchMenuIterator(
    new Set([new MenuItem("Burger", 10), new MenuItem("Salad", 8), new MenuItem("Sandwich", 6)])
  );

  const dinner = new DinerMenuIterator([new MenuItem("Pizza", 10), new MenuItem("Alfredo", 11), new MenuItem("Tacos", 9)]);

  const waitress = new Waitress([lunch, dinner]);

  waitress.displayMenus();
}

main();
