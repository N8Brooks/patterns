import { DinerMenuIterator, LunchMenuIterator, MenuItem, MenuItemIterator } from "./Restaurant";

function main() {
  const lunch = new LunchMenuIterator(
    new Set([new MenuItem("Burger", 10), new MenuItem("Salad", 8), new MenuItem("Sandwich", 6)])
  );

  const dinner = new DinerMenuIterator([new MenuItem("Pizza", 10), new MenuItem("Alfredo", 11), new MenuItem("Tacos", 9)]);

  console.log("Lunch:");
  displayMenu(lunch);

  console.log();
  console.log("Dinner:");
  displayMenu(dinner);
}

function displayMenu(menuItemIterator: MenuItemIterator) {
  const it = menuItemIterator.menuItemIterator();
  let result = it.next();
  while (!result.done) {
    console.log(result.value.toString());
    result = it.next();
  }
}

main();
