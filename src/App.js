import UserContext from "./UserContext";
import NavBar from "./nav/NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import PetfinderApi from "./api/api";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import useLocalStorage from "./localStorage";
import { Container } from "reactstrap";

import "./App.css";

export const TOKEN_ID = "token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [favoriteID, setFavoriteID] = useState(new Set([]));

  useEffect(() => {
    async function findCurrentUser() {
      if (token) {
        let { username } = jwt.decode(token);
        PetfinderApi.token = token;
        let currUser = await PetfinderApi.getUser(username);
        setCurrentUser(currUser);
        setFavoriteID(new Set(currUser.favoriteID));
      }
      setIsLoaded(true);
    }
    setIsLoaded(false);
    findCurrentUser();
  }, [token]);

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

  // function hasFavorited(pet_id) {
  //   return favoriteID.has(pet_id);
  // }

  // function favoritedPet(pet_id) {
  //   if (hasFavorited(pet_id)) return;
  //   PetfinderApi.favoritePet(currentUser.username, pet_id);
  //   setFavoriteID(new Set([...favoriteID, pet_id]));
  // }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          {/* hasFavorited, favoritedPet */}
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
