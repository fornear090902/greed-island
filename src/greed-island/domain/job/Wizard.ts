import { Job } from "./Job";
import { JobClass } from "./JobClass";

export class Wizard extends Job {
  protected jobClass: JobClass = JobClass.wizard;
}
