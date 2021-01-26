import { Duck } from "./Duck";

interface Turkey {
  gobble(): void;
  fly(): void;
}

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log("gobble gobble");
  }

  fly(): void {
    console.log("flap flap flap");
  }
}

export class TurkeyAdapter implements Duck {
  private _turkey: Turkey;

  constructor(turkey: Turkey) {
    this._turkey = turkey;
  }

  quack(): void {
    this._turkey.gobble();
  }

  fly(): void {
    for (let i = 0; i < 3; i++) {
      this._turkey.fly();
    }
  }
}
