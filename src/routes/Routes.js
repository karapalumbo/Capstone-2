import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PetList from "../pets/PetList";
import PetDetails from "../pets/PetDetails";
// import FavoritesList from "../users/Favorites"
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

      <Route exact path="/pets/:pet_id">
        <PetDetails />
      </Route>

      <Route exact path="/pets">
        <PetList />
      </Route>

      <Route exact path="/user/profile">
        <ProfileForm />
      </Route>

      {/* <PrivateRoute exact path="/pets">
        <PetList />
      </PrivateRoute> */}

      {/* <PrivateRoute exact path="/favorites">
        <FavoritesList />
      </PrivateRoute>  */}

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
