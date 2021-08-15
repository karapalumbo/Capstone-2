import React, { useState, useEffect } from "react";
import PetfinderApi from "../api/api";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const PetModal = (props) => {
  const { modalOpen, toggleModal, pet_id } = props;

  const [pet, setPet] = useState(null);

  const petInfo = async () => {
    const p = await PetfinderApi.getPet(pet_id);
    setPet(p);
  };

  useEffect(() => {
    petInfo();
  });

  if (!pet) return <div>Loading...</div>;

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {pet.name} | {pet.gender}
        </ModalHeader>
        <ModalBody>
          <span>{pet.description}</span>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PetModal;
