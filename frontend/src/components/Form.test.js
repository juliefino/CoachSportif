import React from "react";
import ReactDOM from "react-dom";
import FormSignup from "./FormSignUp";
import FormSignin from "./FormSignIn";
import FormContact from "./FormContact";
import FormDonnees from "./FormDonnees";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import SignUp from "./pages/SignUp";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><FormSignup /></MemoryRouter>, div);
});

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><FormSignin /></MemoryRouter>, div);
});

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><FormContact /></MemoryRouter>, div);
});

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><FormDonnees /></MemoryRouter>, div);
});

it("renders a form", () => {
  const testRenderer = TestRenderer.create(<MemoryRouter><FormSignin /></MemoryRouter>);
  const testInstance = testRenderer.toJSON();
  expect(testInstance).toMatchSnapshot();
});