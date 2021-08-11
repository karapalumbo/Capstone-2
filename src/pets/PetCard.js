import React, { useContext, useState } from "react";
import { Card, Button } from "reactstrap";
import UserContext from "../UserContext";
import "./PetCard.css";

function PetCard({ pet_id, name, species, age, color, photo }) {
  const { hasFavorited, favoritePet } = useContext(UserContext);
  const [favorited, setFavorited] = useState();

  React.useEffect(
    function updateFavorited() {
      setFavorited(hasFavorited(pet_id));
    },
    [pet_id, hasFavorited]
  );

  const handleFavorited = async (e) => {
    if (hasFavorited(pet_id)) return;
    favoritePet(pet_id);
    setFavorited(true);
  };

  return (
    <Card className="pet-card">
      <div>
        <h5>{name}</h5>
        <p>
          {color} {species}
        </p>
        {age && (
          <div>
            <p>Age: {age}</p>
          </div>
        )}
      </div>
      <Button
        color="primary"
        className="favorite-btn"
        onClick={handleFavorited}
        disabled={favorited}
      >
        {favorited ? "Favorited" : "Favorite"}
      </Button>
      <a href={`/pets/${pet_id}`}>Learn about {name}</a>
    </Card>
  );
}

export default PetCard;
