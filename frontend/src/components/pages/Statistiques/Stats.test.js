import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import BarChart from "./Statistiques";
import React from "react";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><BarChart /></MemoryRouter>, div);
});