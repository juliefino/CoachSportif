import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import Conditions from "./Conditions";

import React from "react";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Conditions /></MemoryRouter>, div);
});