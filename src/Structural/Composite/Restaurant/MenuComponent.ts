export default abstract class MenuComponent {
  protected _name: string;
  protected _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get price(): number {
    throw new Error("Unsupported operation.");
  }

  get vegetarian(): boolean {
    throw new Error("Unsupported operation.");
  }

  abstract print(): void;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extend(...menuComponents: MenuComponent[]): void {
    throw new Error("Unsupported operation.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(menuComponent: MenuComponent): void {
    throw new Error("Unsupported operation.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChild(i: number): MenuComponent {
    throw new Error("Unsupported operation.");
  }
}
