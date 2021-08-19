import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import PetfinderApi from "../api/api";
import PetCard from "../pets/PetCard";
import "./FavoritesList.css";
import Loading from "../Loading";

function FavoritesList() {
  const { currentUser } = useContext(UserContext);
  const [pets, setPets] = useState(null);

  const petInfo = async (name) => {
    const p = await PetfinderApi.getPets(name);

    const filterArr = p.filter((pet) => {
      return currentUser.favorites.includes(pet.pet_id);
    });
    setPets(filterArr);
  };

  useEffect(() => {
    petInfo();
  }, []);

  if (!pets) return <Loading />;

  return (
    <div>
      <h1>{currentUser.username}'s Favorites</h1>

      {currentUser.favorites.length ? (
        <div className="petcard-container">
          {pets.map((p) => {
            return (
              <PetCard
                key={p.pet_id}
                pet_id={p.pet_id}
                name={p.name}
                species={p.species}
                age={p.age}
                gender={p.gender}
                color={p.color}
                description={p.description}
                photos={p.photos}
              />
            );
          })}
        </div>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
}

export default FavoritesList;
