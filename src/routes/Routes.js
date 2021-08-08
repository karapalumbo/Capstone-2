import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import PetList from "../pets/PetList";
// import FavoritesList from "../users/Favorites"
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Homepage />
      </Route> */}

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>

      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      {/* 
      <PrivateRoute exact path="/pets">
        <PetList />
      </PrivateRoute>

      <PrivateRoute exact path="/favorites">
        <FavoritesList />
      </PrivateRoute> */}

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
