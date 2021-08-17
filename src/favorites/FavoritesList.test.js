import React from "react";
import { render } from "@testing-library/react";
import UserTestProvider from "../testHelper";
import FavoritesList from "./FavoritesList";

it("matches snapshot", function () {
  const { asFragment } = render(
    <UserTestProvider>
      <FavoritesList />
    </UserTestProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
