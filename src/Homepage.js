import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import PetList from "./pets/PetList";
import PetfinderApi from "./api/api";
import Loading from "./Loading";
import { Button } from "reactstrap";
import "./Homepage.css";

const Homepage = () => {
  const { currentUser } = useContext(UserContext);
  const [pet, setPet] = useState(null);

  let petIdArr = [
    51012551, 51012574, 51012833, 51012838, 51012585, 51012482, 51012857,
    51012858, 51012855, 51012856, 52673930, 52673927, 52673928, 52673929,
    52673922, 52673923, 52674068, 52674066, 52674065, 52674233,
  ];

  const getRandomPet = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  let randomId = getRandomPet(petIdArr);

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
          <div className="homepage-container">
            <div className="text-container">
              <h1 className="header-text">
                An easy way to find your furrrever friend!
              </h1>
              <p className="sub-text">
                We have plenty of friends waiting to meet you! Sign up to
                favorite, browse, and adopt your new best friend!
              </p>
              <h6>
                <Button className="home-btn">
                  <a href="/signup">Sign up to meet the others!</a>
                </Button>
              </h6>
            </div>
            <div>
              <img className="homepage-img" src={pet.photos} alt={"pet"}></img>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
