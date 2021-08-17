import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavBar from "./NavBar";
import UserTestProvider from "../testHelper";

it("matches snapshot when logged in", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserTestProvider>
        <NavBar />
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserTestProvider currentUser={null}>
        <NavBar />
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
