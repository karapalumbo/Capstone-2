import React, { useContext, useState } from "react";
import { Card, Button, CardBody } from "reactstrap";
import UserContext from "../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import "./PetCard.css";

function PetCard({ pet_id, name, species, age, color, photos }) {
  const { hasFavorited, favoritePet, unfavoritePet } = useContext(UserContext);
  const [favorited, setFavorited] = useState(false);

  React.useEffect(
    function updateFavorited() {
      setFavorited(hasFavorited(pet_id));
    },
    [pet_id, hasFavorited]
  );

  const handleFavorited = async () => {
    if (favorited) {
      unfavoritePet(pet_id);
      setFavorited(false);
    } else {
      setFavorited(true);
      favoritePet(pet_id);
    }
  };

  return (
    <Card className="petcard">
      <CardBody className="petcard-body">
        <img src={photos} alt={species} />

        <div className="petcard-info">
          <h4>{name}</h4>
          <div>
            {color} {species}
          </div>
          <div>{age}</div>
        </div>

        <span>
          <Button
            color="white"
            className="favorite-btn"
            onClick={handleFavorited}
          >
            <FontAwesomeIcon icon={favorited ? solidHeart : faHeart} />
          </Button>
        </span>

        <a href={`/pets/${pet_id}`}>Learn about {name}</a>
      </CardBody>
    </Card>
  );
}

export default PetCard;
