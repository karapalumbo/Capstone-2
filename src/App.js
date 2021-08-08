import UserContext from "./UserContext";
import NavBar from "./nav/NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import PetfinderApi from "./api/api";
// import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import useLocalStorage from "./localStorage";
import { Container } from "reactstrap";
import { API_KEY, API_TOKEN, API_SECRET } from "./secret";

import "./App.css";

function App() {
  const [token, setToken] = useLocalStorage(API_TOKEN);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [favoriteID, setFavoriteID] = useState(new Set([]));

  // useEffect(() => {
  //   async function findCurrentUser() {
  //     if (token) {
  //       let { username } = jwt.decode(token);
  //       PetfinderApi.token = token;
  //       let currUser = await PetfinderApi.getUser(username);
  //       setCurrentUser(currUser);
  //       setAppliedID(new Set(currUser.applications));
  //     }
  //     setIsLoaded(true);
  //   }
  //   setIsLoaded(false);
  //   findCurrentUser();
  // }, [token]);

  async function signup(formData) {
    let token = await PetfinderApi.signup(formData);
    setToken(token);
    return { success: true };
  }

  async function login(formData) {
    let token = await PetfinderApi.login(formData);
    setToken(token);
    return { success: true };
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // function hasApplied(id) {
  //   return appliedID.has(id);
  // }

  // function applyToJob(id) {
  //   if (hasApplied(id)) return;
  //   PetfinderApi.applyToJob(currentUser.username, id);
  //   setAppliedID(new Set([...appliedID, id]));
  // }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Petfinder</h1>
      <h3>Helping you find your forever friend.</h3>

      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <NavBar logout={logout} />
          <Container>
            <Routes signup={signup} login={login} />
          </Container>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
