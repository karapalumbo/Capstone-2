import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PetList from "../pets/PetList";
import FavoritesList from "../favorites/FavoritesList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import ProfileForm from "../forms/ProfileForm";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../Homepage";

function Routes({ login, signup }) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>

      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <PrivateRoute exact path="/pets">
        <PetList />
      </PrivateRoute>

      <PrivateRoute exact path="/user/profile">
        <ProfileForm />
      </PrivateRoute>

      <PrivateRoute exact path="/user/favorites">
        <FavoritesList />
      </PrivateRoute>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
