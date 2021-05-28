import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import Nutrition from "./nutrition";
import Calcul from "./calcul";
import Cuisson from "./cuisson";
import React from "react";
import FruitsLegumes from "./fruitLegumes";
import Hydratation from "./hydratation";
import Laitier from "./Laitier";
import Malbouffe from "./malbouffe";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Nutrition /></MemoryRouter>, div);
});

test("render article sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Calcul /></MemoryRouter>, div);
});

test("render article sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Cuisson /></MemoryRouter>, div);
});

test("render article sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><FruitsLegumes /></MemoryRouter>, div);
});

test("render article sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Hydratation /></MemoryRouter>, div);
});

test("render article sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Laitier /></MemoryRouter>, div);
});

test("render article sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Malbouffe /></MemoryRouter>, div);
});