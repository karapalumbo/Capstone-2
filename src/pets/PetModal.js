import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./PetModal.css";

const PetModal = (props) => {
  const { modalOpen, toggleModal, name, gender, description, org } = props;

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {name} | {gender}
        </ModalHeader>
        <ModalBody>
          <span>{description}</span>

          <div className="org-info">
            <span>
              <h4>Contact the shelter to meet {name}!</h4>
            </span>
            <h5>{org.name}</h5>
            <h6>{org.address}</h6>
            {org.email !== undefined && (
              <div>
                <small>Email: {org.email}</small>
              </div>
            )}
            {org.phone !== undefined && (
              <div>
                <small>Phone: {org.phone}</small>
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PetModal;
