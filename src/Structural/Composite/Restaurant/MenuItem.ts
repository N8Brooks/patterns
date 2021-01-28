import MenuComponent from "./MenuComponent";

export default class MenuItem extends MenuComponent {
  private _vegetarian: boolean;
  private _price: number;

  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    super(name, description);
    this._vegetarian = vegetarian;
    this._price = price;
  }

  print(): void {
    console.log(
      `\t${this._name}${this._vegetarian ? " (v)" : ""}, $${this._price.toFixed(2).padStart(2, " ")} -- ${this._description}`
    );
  }

  get vegetarian(): boolean {
    return this._vegetarian;
  }

  get price(): number {
    return this._price;
  }
}
