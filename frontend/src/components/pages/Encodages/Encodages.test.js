import React from 'react';
import ReactDOM from 'react-dom';

import Distance from "./Encodage_distance";
import Score from "./Encodage_score";
import Aquatique from "./Encodage_aquatique";

import TestRenderer from "react-test-renderer";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Distance /></MemoryRouter>, div);
});

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Score /></MemoryRouter>, div);
});

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><Aquatique /></MemoryRouter>, div);
});

it("renders a form", () => {
  const testRenderer = TestRenderer.create(<MemoryRouter><Distance /></MemoryRouter>);
  const testInstance = testRenderer.toJSON();
  expect(testInstance).toMatchSnapshot();
});

it("renders a form", () => {
  const testRenderer = TestRenderer.create(<MemoryRouter><Score /></MemoryRouter>);
  const testInstance = testRenderer.toJSON();
  expect(testInstance).toMatchSnapshot();
});

it("renders a form", () => {
  const testRenderer = TestRenderer.create(<MemoryRouter><Aquatique /></MemoryRouter>);
  const testInstance = testRenderer.toJSON();
  expect(testInstance).toMatchSnapshot();
});
