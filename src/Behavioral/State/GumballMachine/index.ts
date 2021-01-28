import GumballMachine from "./GumballMachine";

function main(): void {
  const gumballMachine = new GumballMachine(2);

  gumballMachine.insertQuarter();

  gumballMachine.insertQuarter();

  gumballMachine.turnCrank();

  gumballMachine.turnCrank();

  gumballMachine.insertQuarter();

  gumballMachine.turnCrank();

  gumballMachine.insertQuarter();
}

main();
