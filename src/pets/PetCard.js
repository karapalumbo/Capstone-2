import React, { useContext, useState } from "react";
import { Card, Button } from "reactstrap";
import UserContext from "../UserContext";

function PetCard({
  id,
  name,
  species,
  age,
  gender,
  color,
  description,
  photo,
}) {
  const { favoritedPet, hasFavorited } = useContext(UserContext);
  const [favorited, setFavorited] = useState();

  React.useEffect(
    function updateFavorited() {
      setFavorited(favoritedPet(id));
    },
    [id, favoritedPet]
  );

  // name, species, age, gender, color, description, photo

  const handleFavorited = async () => {
    if (favoritedPet(id)) return;
    hasFavorited(id);
    setFavorited(true);
  };

  return (
    <div className="PetCard">
      <Card className="pet-card">
        <div>
          <h5>{name}</h5>
          <p>{species}</p>
          {age && (
            <div>
              <p>Age: {age}</p>
            </div>
          )}
          {color && (
            <div>
              <p>Color: {color}</p>
            </div>
          )}
          {gender !== undefined && (
            <div>
              <p>Gender: {gender}</p>
            </div>
          )}
          {description && (
            <div>
              <p>{description}</p>
            </div>
          )}
          <Button
            disabled={favorited}
            onClick={handleFavorited}
            color="primary"
            className="favorite-btn"
          >
            {favorited ? "Favorited" : "Favorite"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default PetCard;
