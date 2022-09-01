import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PetList from "../pets/PetList";
import FavoritesList from "../favorites/FavoritesList";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignupForm";
import ProfileForm from "../forms/ProfileForm";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../Homepage";

const Routes = ({ login, signUp }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/signup">
        <SignUpForm signUp={signUp} />
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
};

export default Routes;
