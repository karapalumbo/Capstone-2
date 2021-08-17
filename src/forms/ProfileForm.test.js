import React from "react";
import { render } from "@testing-library/react";
import UserTestProvider from "../testHelper";
import ProfileForm from "./ProfileForm";

it("matches snapshot", function () {
  const { asFragment } = render(
    <UserTestProvider>
      <ProfileForm />
    </UserTestProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
