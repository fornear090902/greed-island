import { Level } from "./Level";

export class Player {
  constructor(
    private _id: string | undefined,
    private _name: string,
    private _level: Level,
    private _user_id: string,
  ) {}

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get userId() {
    return this._user_id;
  }
}
