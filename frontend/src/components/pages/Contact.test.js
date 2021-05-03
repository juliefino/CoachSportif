import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import Contact from "./Contact";

import React from "react";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Contact /></MemoryRouter>, div);
});