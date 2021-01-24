export default abstract class Beverage {
  protected _description = "Unknown Beverage";

  abstract get cost(): number;

  get description(): string {
    return this._description;
  }

  menuItem(): string {
    const cost = Math.round(100 * this.cost) / 100;
    return `${this.description}\t${cost}`;
  }
}
