import React from "react";
import UserContext from "./UserContext";

const testUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.com",
  password: "test123",
};

const UserTestProvider = ({
  children,
  currentUser = testUser,
  hasFavorited = () => false,
  unfavoritePet = () => false,
}) => (
  <UserContext.Provider value={{ currentUser, hasFavorited, unfavoritePet }}>
    {children}
  </UserContext.Provider>
);

export default UserTestProvider;
