import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetfinderApi from "../api/api";
import PetCard from "./PetCard";

function PetDetail({ pets }) {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  const petInfo = async (id) => {
    const p = await PetfinderApi.getPet(id);
    setPet(p);
  };

  useEffect(() => {
    petInfo();
  }, [id]);

  if (!pet) return <div>Loading...</div>;

  return (
    <div>
      <h3>{pet.name}</h3>
    </div>
  );
}

export default PetDetail;
