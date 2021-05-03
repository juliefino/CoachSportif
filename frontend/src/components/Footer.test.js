import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer.js";
import { MemoryRouter } from "react-router-dom";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Footer /></MemoryRouter>, div);
});