import React from "react";
import ReactDOM from "react-dom";
import ButtonSort from "./ButtonSort";
import { MemoryRouter } from "react-router-dom";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><ButtonSort /></MemoryRouter>, div);
});