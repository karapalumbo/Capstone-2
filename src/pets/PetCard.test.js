import React from "react";
import { render } from "@testing-library/react";
import PetCard from "./PetCard";
import { MemoryRouter } from "react-router";
import UserTestProvider from "../testHelper";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <UserTestProvider>
        <PetCard
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
      </UserTestProvider>
    </MemoryRouter>
  );
});

it("renders a pet being favorited", function () {
  const component = render(
    <MemoryRouter>
      <UserTestProvider hasFavorited={() => true}>
        <PetCard
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
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});

it("renders a pet being unfavorited", function () {
  const component = render(
    <MemoryRouter>
      <UserTestProvider unfavoritePet={() => true}>
        <PetCard
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
      </UserTestProvider>
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
