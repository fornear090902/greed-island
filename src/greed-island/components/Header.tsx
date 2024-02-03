import type { Player } from "@/domain/player/Player";
import { library } from "@/lib/japanese";
import type { Dispatch } from "react";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  return (
    <div className="header">
      <h1 className="product-title">{library.title}</h1>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}
