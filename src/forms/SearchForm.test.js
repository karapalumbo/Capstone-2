import React from "react";
import { render } from "@testing-library/react";
import UserTestProvider from "../testHelper";
import SearchForm from "./SearchForm";

it("matches snapshot", function () {
  const { asFragment } = render(
    <UserTestProvider>
      <SearchForm />
    </UserTestProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
