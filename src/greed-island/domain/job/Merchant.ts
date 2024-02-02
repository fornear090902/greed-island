import { Job } from "./Job";
import { JobClass } from "./JobClass";

export class Merchant extends Job {
    protected jobClass: JobClass = JobClass.merchant
}