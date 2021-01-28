import MenuComponent from "./MenuComponent";

export default class Menu extends MenuComponent {
  private _menuComponents: Array<MenuComponent> = [];

  print(): void {
    console.log(`\n${this._name}, ${this._description}:`);
    this._menuComponents.forEach((item) => item.print());
  }

  extend(...menuComponents: MenuComponent[]): void {
    this._menuComponents.push(...menuComponents);
  }

  remove(menuComponent: MenuComponent): void {
    const index = this._menuComponents.indexOf(menuComponent);
    0 <= index && this._menuComponents.splice(index, 1);
  }

  getChild(i: number): MenuComponent {
    return this._menuComponents[i];
  }
}
