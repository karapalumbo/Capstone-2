import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import PetfinderApi from "../api/api";
import PetCard from "../pets/PetCard";

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

  if (!pets) return <div>Loading...</div>;

  return (
    <div>
      <h1>{currentUser.username}'s Favorites</h1>
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
            photo={p.photo}
          />
        );
      })}
    </div>
  );
}

export default FavoritesList;
