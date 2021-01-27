export interface MenuItemIterator {
  menuItemIterator(): Iterator<MenuItem>;
}

export class MenuItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  toString(): string {
    return `${this._name.padEnd(10, " ")}$${this._price.toFixed(2).padStart(5, " ")}`;
  }
}

export class DinerMenuIterator implements MenuItemIterator {
  _items: Array<MenuItem>;

  constructor(items: Array<MenuItem>) {
    this._items = items;
  }

  menuItemIterator(i = -1): Iterator<MenuItem> {
    return { next: () => (++i < this._items.length ? { value: this._items[i] } : { value: undefined, done: true }) };
  }
}

export class LunchMenuIterator implements MenuItemIterator {
  _items: Set<MenuItem>;

  constructor(items: Set<MenuItem>) {
    this._items = items;
  }

  menuItemIterator(): Iterator<MenuItem> {
    return this._items.values();
  }
}
