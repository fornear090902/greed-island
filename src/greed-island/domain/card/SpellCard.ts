import { SpellCardGrade } from "./CardGrade";
import { FreeCardSpec } from "./FreeCardSpec";

export class SpellCardSpec extends FreeCardSpec {
  constructor(
    private type: "atack" | "guard",
    private grade: SpellCardGrade,
  ) {
    super();
  }
}
