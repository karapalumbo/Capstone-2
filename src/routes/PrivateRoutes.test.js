import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import UserTestProvider from "../testHelper";

it("matches snapshot when logged in", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserTestProvider>
        <PrivateRoute />
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserTestProvider currentUser={null}>
        <PrivateRoute />
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
