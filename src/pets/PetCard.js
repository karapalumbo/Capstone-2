import React, { useContext, useState } from "react";
import UserContext from "../UserContext";
import { Card, Button, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import "./PetCard.css";

import PetModal from "./PetModal";

function PetCard({ pet_id, name, species, age, color, photos }) {
  const { hasFavorited, favoritePet, unfavoritePet, currentUser } =
    useContext(UserContext);

  const [favorited, setFavorited] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

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

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Card className="petcard">
      <CardBody className="petcard-body">
        <img src={photos} alt={species} />

        <div className="petcard-info">
          <h4>{name}</h4>

          <span className="pet-favorite">
            <Button
              color="white"
              className="favorite-btn"
              onClick={handleFavorited}
            >
              <FontAwesomeIcon
                size="2x"
                icon={favorited ? solidHeart : faHeart}
              />
            </Button>
          </span>

          <div className="pet-details">
            {color} {species}
          </div>

          <div className="pet-details">{age}</div>

          <Button block className="pet-modal-btn" onClick={handleModal}>
            Learn More!
          </Button>

          <PetModal
            modalOpen={isModalOpen}
            toggleModal={handleModal}
            pet_id={pet_id}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default PetCard;
