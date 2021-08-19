import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import PetList from "./pets/PetList";
import PetfinderApi from "./api/api";
import Loading from "./Loading";
import "./Homepage.css";

function Homepage() {
  const { currentUser } = useContext(UserContext);
  const [pet, setPet] = useState(null);

  let petIdArr = [
    51012551, 51012574, 51012833, 51012838, 51012585, 51012482, 51012857,
    51012858, 51012855, 51012856, 52673930, 52673927, 52673928, 52673929,
    52673922, 52673923, 52674068, 52674066, 52674065, 52674233,
  ];

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let randomId = getRandom(petIdArr);

  const petInfo = async () => {
    const p = await PetfinderApi.getPet(randomId);
    setPet(p);
  };

  useEffect(() => {
    petInfo();
  }, []);

  if (!pet) return <Loading />;

  return (
    <div className="homepage">
      {currentUser ? (
        <PetList />
      ) : (
        <>
          <h1>Welcome to Furriends!</h1>

          <p>
            An easy way to find your furrrever friend! We have plenty of friends
            waiting to meet you!
          </p>

          <h4>Meet {pet.name}!</h4>
          <h6>
            <a href="/login">Login</a> or <a href="/signup">signup</a> to meet
            the others!
          </h6>
          <img className="homepage-img" src={pet.photos}></img>
          <div></div>
        </>
      )}
    </div>
  );
}

export default Homepage;
