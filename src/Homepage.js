import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
// import "./Homepage.css";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="homepage">
      <h1>Petfinder</h1>
      <h3>Helping you find your forever friend.</h3>
      {currentUser ? (
        <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2>
      ) : (
        <>
          <div>
            <Link to="/login">Login</Link>
          </div>

          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
