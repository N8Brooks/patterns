import GumballMachine from "./GumballMachine";
import GumballMonitor from "./GumballMonitor";

function main(): void {
  const locations = [new GumballMachine("Austin", 2), new GumballMachine("Dallas", 10), new GumballMachine("Houston", 51)];

  const monitors = locations.map((location) => new GumballMonitor(location));

  monitors.forEach((monitor) => monitor.report());
}

main();
