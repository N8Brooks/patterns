// en.wikipedia.org/wiki/Proxy_pattern#Protection_proxy

class Driver {
  _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }
}

class Car {
  drive() {
    console.log("Car has been driven!");
  }
}

class ProxyCar {
  _car: Car;
  _driver: Driver;

  constructor(driver: Driver) {
    this._car = new Car();
    this._driver = driver;
  }

  drive() {
    if (this._driver.age <= 16) {
      console.log("Sorry, the driver is too young to drive.");
    } else {
      this._car.drive();
    }
  }
}

function main(): void {
  const driver = new Driver(16);
  const car = new ProxyCar(driver);
  car.drive();

  const driver2 = new Driver(25);
  const car2 = new ProxyCar(driver2);
  car2.drive();
}

main();
