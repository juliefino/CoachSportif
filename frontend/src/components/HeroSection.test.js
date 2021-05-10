import React from "react";
import ReactDOM from "react-dom";
import HeroSection from "./HeroSection";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import SignUp from "./pages/Connexion/SignUp";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><HeroSection /></MemoryRouter>, div);
});

it("renders a div", () => {
  const testRenderer = TestRenderer.create(<MemoryRouter><HeroSection /></MemoryRouter>);
  const testInstance = testRenderer.toJSON();
  expect(testInstance).toMatchSnapshot();
});