import { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import { Card, Button, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import PetfinderApi from "../api/api";
import Loading from "../Loading";
import "./PetCard.css";

import PetModal from "./PetModal";

const PetCard = ({
  pet_id,
  name,
  species,
  age,
  gender,
  description,
  color,
  photos,
  organizationID,
}) => {
  const { hasFavorited, favoritePet, unfavoritePet } = useContext(UserContext);

  const [favoritedPet, setFavoritedPet] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [org, setOrg] = useState(null);

  useEffect(
    function updateFavorited() {
      setFavoritedPet(hasFavorited(pet_id));
    },
    [pet_id, hasFavorited]
  );

  const getPetOrgInfo = async () => {
    const organization = await PetfinderApi.getOrganization(organizationID);
    setOrg(organization);
  };

  useEffect(function getPetOrg() {
    getPetOrgInfo();
  }, []);

  const handleFavorited = async () => {
    if (favoritedPet) {
      unfavoritePet(pet_id);
      setFavoritedPet(false);
    } else {
      setFavoritedPet(true);
      favoritePet(pet_id);
    }
  };

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  if (!org) return <Loading />;

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
                id={favoritedPet ? "favorites" : "not-favorites"}
                size="2x"
                icon={favoritedPet ? solidHeart : faHeart}
              />
            </Button>
          </span>

          <div className="pet-details">
            {color} {species}
          </div>

          <div className="pet-details">{age}</div>

          <div className="pet-details">{gender}</div>

          <Button block className="pet-modal-btn" onClick={handleModal}>
            Adopt me!
          </Button>

          <PetModal
            modalOpen={isModalOpen}
            toggleModal={handleModal}
            pet_id={pet_id}
            name={name}
            description={description}
            org={org}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default PetCard;
