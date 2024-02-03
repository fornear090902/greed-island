import { SpecifiedCardGrade } from "./CardGrade";
import { CardSpec } from "./CardSpec";

export class SpecifiedCardSpec extends CardSpec {
  constructor(
    private id: number,
    private grade: SpecifiedCardGrade,
  ) {
    super();
  }
}
