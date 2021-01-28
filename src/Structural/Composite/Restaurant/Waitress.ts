import MenuComponent from "./MenuComponent";

export default class Waitress {
  private _allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this._allMenus = allMenus;
  }

  print(): void {
    this._allMenus.print();
  }
}
