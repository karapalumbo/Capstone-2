import React from "react";
import { render } from "@testing-library/react";
import PetList from "./PetList";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(<PetList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <PetList
        key="123"
        pet_id="123"
        name="testpet"
        species="dog"
        age="young"
        gender="male"
        color="black"
        description="test description"
        photos=""
      />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
