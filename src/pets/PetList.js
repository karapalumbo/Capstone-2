import React, { useState, useEffect } from "react";
import PetfinderApi from "../api/api";
import SearchForm from "../forms/SearchForm";
import PetCard from "./PetCard";

function PetList() {
  const [pets, setPets] = useState([]);

  const petInfo = async (searchTerm) => {
    const p = await PetfinderApi.getPets(searchTerm);
    setPets(p);
  };

  useEffect(() => {
    petInfo();
  }, []);

  if (!pets) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm search={petInfo} />

      {pets.length ? (
        <div>
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
      ) : (
        <p>Sorry, no pets found.</p>
      )}
    </div>
  );
}

export default PetList;
