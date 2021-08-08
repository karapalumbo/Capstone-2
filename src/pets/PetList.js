import React, { useState, useEffect } from "react";
import PetfinderApi from "../api/api";
import SearchForm from "../forms/SearchForm";
import PetDetails from "./PetDetails";

function PetList() {
  const [pets, setPets] = useState(null);

  const petInfo = async () => {
    const p = await PetfinderApi.getPets();
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
        <PetDetails pets={pets} />
      ) : (
        <p>Sorry, no results found.</p>
      )}
    </div>
  );
}

export default PetList;
