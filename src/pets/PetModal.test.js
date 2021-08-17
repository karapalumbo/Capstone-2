import React from "react";
import PetModal from "./PetModal";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import UserTestProvider from "../testHelper";

it("opens modal when button is clicked", () => {
  const component = render(
    <MemoryRouter>
      <UserTestProvider>
        <PetModal isOpen="true" />
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});

it("closes modal when button is clicked", () => {
  const component = render(
    <MemoryRouter>
      <UserTestProvider>
        <PetModal isOpen="false" />
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
