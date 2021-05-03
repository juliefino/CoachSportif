import React from "react";
import ReactDOM from "react-dom";
import Error404 from "./Error404.js";
import { MemoryRouter } from "react-router-dom";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Error404 /></MemoryRouter>, div);
});