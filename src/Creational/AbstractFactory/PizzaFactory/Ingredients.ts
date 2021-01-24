export class Dough {
  toString(): string {
    return "No dough";
  }
}

export class ThinCrustDough extends Dough {
  toString(): string {
    return "Thin crust dough";
  }
}

export class ThickCrustDough extends Dough {
  toString(): string {
    return "Thick crust dough";
  }
}

export class Sauce {
  toString(): string {
    return "No sauce";
  }
}

export class MarinaraSauce extends Sauce {
  toString(): string {
    return "Marinara sauce";
  }
}

export class PizzaSauce extends Sauce {
  toString(): string {
    return "Pizza sauce";
  }
}

export class Cheese {
  toString(): string {
    return "No cheese";
  }
}

export class MozzarellaCheese extends Cheese {
  toString(): string {
    return "Mozzarella cheese";
  }
}

export class ParmesanCheese extends Cheese {
  toString(): string {
    return "Parmesan cheese";
  }
}

export class ReggianoCheese extends Cheese {
  toString(): string {
    return "Reggiano cheese";
  }
}

export abstract class Veggies {
  toString(): string {
    return "No veggies";
  }
}

export class Eggplant extends Veggies {
  toString(): string {
    return "Eggplant";
  }
}

export class BlackOlives extends Veggies {
  toString(): string {
    return "Black olives";
  }
}

export class Mushroom extends Veggies {
  toString(): string {
    return "Mushrooms";
  }
}

export class Garlic extends Veggies {
  toString(): string {
    return "Garlic";
  }
}

export class Onion extends Veggies {
  toString(): string {
    return "Onion";
  }
}

export class RedPepper extends Veggies {
  toString(): string {
    return "Red pepper";
  }
}

export class Pepperoni {
  toString(): string {
    return "No Pepperoni";
  }
}

export class SlicedPepperoni extends Pepperoni {
  toString(): string {
    return "Sliced pepperoni";
  }
}

export class Clams {
  toString(): string {
    return "No clams .. don't blame ya";
  }
}

export class FreshClams extends Clams {
  toString(): string {
    return "Fresh clams";
  }
}

export class FrozenClams extends Clams {
  toString(): string {
    return "Frozen clams";
  }
}
