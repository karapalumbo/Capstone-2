import React, { useContext } from "react";
import UserContext from "./UserContext";
// import "./Homepage.css";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="homepage">
      <h1>Petfinder</h1>
      {currentUser ? (
        <h2>Welcome back, {currentUser.firstName}!</h2>
      ) : (
        <>
          <h3>Helping you find your forever friend.</h3>
          <div>
            <p>Please login or signup!</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
