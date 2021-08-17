import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const PetModal = (props) => {
  const { modalOpen, toggleModal, name, gender, description } = props;

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {name} | {gender}
        </ModalHeader>
        <ModalBody>
          <span>{description}</span>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PetModal;
