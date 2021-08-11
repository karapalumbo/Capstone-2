import React, { useContext, useState } from "react";
import { Card, Button } from "reactstrap";
import UserContext from "../UserContext";

function PetCard({ pet_id, name, species, age, color, photo }) {
  const { favoritedPet, hasFavorited } = useContext(UserContext);
  const [favorited, setFavorited] = useState();

  // React.useEffect(
  //   function updateFavorited() {
  //     setFavorited(favoritedPet(id));
  //   },
  //   [id, favoritedPet]
  // );

  const handleFavorited = async () => {
    if (favoritedPet(pet_id)) return;
    hasFavorited(pet_id);
    setFavorited(true);
  };

  return (
    <Card className="pet-card">
      <a href={`/pets/${pet_id}`}>
        <div>
          <h5>{name}</h5>
          <p>
            {color} colored {species}
          </p>
          {age && (
            <div>
              <p>Age: {age}</p>
            </div>
          )}
          {/* {color && (
            <div>
              <p>Color: {color}</p>
            </div>
          )}
          {gender && (
            <div>
              <p>Gender: {gender}</p>
            </div>
          )}
          {description && (
            <div>
              <p>{description}</p>
            </div>
          )} */}
          <Button
            disabled={favorited}
            onClick={handleFavorited}
            color="primary"
            className="favorite-btn"
          >
            {favorited ? "Favorited" : "Favorite"}
          </Button>
        </div>
      </a>
    </Card>
  );
}

export default PetCard;
