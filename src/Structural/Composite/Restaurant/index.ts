import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Waitress from "./Waitress";

function main(): void {
  const pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
  const cafeMenu = new Menu("LUNCH MENU", "Lunch");
  const dinerMenu = new Menu("DINER MENU", "Diner");
  const dessertMenu = new Menu("DESSERT MENU", "Desert");

  pancakeHouseMenu.extend(
    new MenuItem("Pancake", "One fluffy pancake topped with butter and syrup", true, 2.49),
    new MenuItem("Waffle", "A crispy delicacy found in our waffle maker after we cook it for 3 minutes", true, 2.56),
    new MenuItem("Cereal", "Probably frosted flakes, but you might end up with raisin bran", true, 1)
  );

  cafeMenu.extend(
    new MenuItem("Sandwich", "Two loaves of whole wheat stuffed with mayo", false, 0.15),
    new MenuItem("Octopus", "Eight legged creature that is normally found in the depths of the Pacific", false, 15),
    new MenuItem("Salad", "Lettuce, Spinach, whatever else we can find in the kitchen, and your choice of dressing", true, 2)
  );

  dinerMenu.extend(
    new MenuItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89),
    new MenuItem("Chicken", "Deep fried chicken complete with 11 herbs and spices", false, 4.01),
    new MenuItem("Burger", "Fine angus beef topped with ketchup and a side of fries", false, 3.68),
    dessertMenu
  );

  dessertMenu.extend(
    new MenuItem("Apple Pie", "Apple pie with a flakey crust, topped with vanilla ice cream", true, 1.59),
    new MenuItem("Ice Cream", "Vanilla ice cream topped with chocolate", true, 3.5),
    new MenuItem("Tiramisu", "Infinity layer coffee cake with a dash of cinnamon", true, 4.02)
  );

  const allMenus = new Menu("ALL MENUS", "All menus combined");

  allMenus.extend(pancakeHouseMenu, cafeMenu, dinerMenu);

  const waitress = new Waitress(allMenus);

  waitress.print();
}

main();
