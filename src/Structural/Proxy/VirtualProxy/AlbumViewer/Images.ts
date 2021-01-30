abstract class Icon {
  protected _x: number;
  protected _y: number;
  protected _image: string | undefined;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  abstract get image(): string;
}

export class ImageProxy extends Icon {
  get image(): string {
    if (this._image !== undefined) {
      return this._image;
    }

    return (this._image = new paintIcon(this._x, this._y).image || "");
  }
}

class paintIcon extends Icon {
  get image(): string {
    return new Array(this._y).fill("X".repeat(this._x)).join("\n");
  }
}
