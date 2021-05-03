import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import Navbar from "./Navbar";
it("render sans que ça plante", () => {
  const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><Navbar/></MemoryRouter>, div);
});

