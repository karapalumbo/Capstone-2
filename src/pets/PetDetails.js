import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetfinderApi from "../api/api";

function PetDetails() {
  const { pet_id } = useParams();
  const [pet, setPet] = useState(null);

  const petInfo = async () => {
    const p = await PetfinderApi.getPet(pet_id);
    setPet(p);
  };

  useEffect(() => {
    petInfo();
  }, [pet_id]);

  if (!pet) return <div>Loading...</div>;

  return (
    <div>
      <h3>{pet.name}</h3>
    </div>
  );
}

export default PetDetails;
