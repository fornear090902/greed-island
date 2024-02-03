import { Job } from "../job/Job";
import { Experience } from "./Experience";
import { Level } from "./Level";
import { Status } from "./Status";

export class Player {
  constructor(
    private id: string,
    private last_name: string,
    private first_name: string,
    private email: string,
    private _level: Level,
    private status: Status,
    private experience: Experience,
    private job: Job,
  ) {}

  get fullName() {
    return this.last_name + " " + this.first_name;
  }

  get level() {
    return this._level;
  }
}
