import React from "react";
import ReactDOM from "react-dom";
import CardItem from "./CardItem";
import { MemoryRouter } from "react-router-dom";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><CardItem /></MemoryRouter>, div);
});