import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import Distance from "./Encodage_distance";
import SignIn from "./Connexion/SignIn";
import React from "react";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Distance /></MemoryRouter>, div);
});