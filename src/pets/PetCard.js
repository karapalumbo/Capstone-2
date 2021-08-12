import React, { useContext, useState } from "react";
import { Card, Button, CardGroup } from "reactstrap";
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

  const handleFavorited = async () => {
    if (hasFavorited(pet_id)) return;
    favoritePet(pet_id);
    setFavorited(true);
  };

  return (
    <Card className="pet-card">
      {favorited}
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
      <span>
        <Button
          color="primary"
          className="favorite-btn"
          onClick={handleFavorited}
          disabled={favorited}
        >
          {favorited ? "Favorited" : "Favorite"}
        </Button>
      </span>
      <a href={`/pets/${pet_id}`}>Learn about {name}</a>
    </Card>
  );
}

export default PetCard;
