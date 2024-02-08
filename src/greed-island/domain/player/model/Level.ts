export class Level {
  constructor(private _value: number) {}

  get value() {
    return this._value;
  }

  format() {
    return "Lv." + this._value;
  }
}
