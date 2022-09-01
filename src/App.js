import UserContext from "./UserContext";
import NavBar from "./nav/NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import PetfinderApi from "./api/api";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import useLocalStorage from "./localStorage";
import { Container } from "reactstrap";
import Loading from "./Loading";

import "./App.css";

export const TOKEN_ID = "token";

const App = () => {
  const [token, setToken] = useLocalStorage(TOKEN_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [favoriteID, setFavoriteID] = useState(new Set([]));

  useEffect(() => {
    const findCurrentUser = async () => {
      if (token) {
        let { username } = jwt.decode(token);
        PetfinderApi.token = token;
        let currentUser = await PetfinderApi.getUser(username);
        setCurrentUser(currentUser);
        setFavoriteID(new Set(currentUser.favorites));
      }
      setIsLoaded(true);
    };
    setIsLoaded(false);
    findCurrentUser();
  }, [token]);

  const signUp = async (formData) => {
    let token = await PetfinderApi.signUp(formData);
    setToken(token);
    return { success: true };
  };

  const login = async (formData) => {
    let token = await PetfinderApi.login(formData);
    setToken(token);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  const hasFavorited = (pet_id) => {
    return favoriteID.has(pet_id);
  };

  const favoritePet = (pet_id) => {
    PetfinderApi.favoriteAPet(currentUser.username, pet_id);
    setFavoriteID(new Set([...favoriteID, pet_id]));
  };

  const unfavoritePet = (pet_id) => {
    favoriteID.delete(pet_id);
    return PetfinderApi.unfavoriteAPet(currentUser.username, pet_id);
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            hasFavorited,
            favoritePet,
            unfavoritePet,
          }}
        >
          <NavBar logout={logout} />
          <Container>
            <Routes signUp={signUp} login={login} />
          </Container>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
