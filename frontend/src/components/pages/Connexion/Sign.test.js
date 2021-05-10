import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import React from "react";
import TestRenderer from "react-test-renderer";

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><SignUp /></MemoryRouter>, div);
});

test("render sans que ça plante", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MemoryRouter><SignIn /></MemoryRouter>, div);
});

it("renders a form", () => {
  const testRenderer = TestRenderer.create(<MemoryRouter><SignUp /></MemoryRouter>);
  const testInstance = testRenderer.toJSON();
  expect(testInstance).toMatchSnapshot();
});


