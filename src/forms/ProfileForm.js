import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import UserContext from "../UserContext";
import PetfinderApi from "../api/api";
import Alert from "../Alert";
import "./ProfileForm.css";

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    let userInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
      email: formData.email,
    };

    let updatedInfo;

    try {
      updatedInfo = await PetfinderApi.updateProfile(
        formData.username,
        userInfo
      );
    } catch (errors) {
      setFormErrors(errors);
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      return;
    }

    setFormData((info) => ({
      ...info,
      password: "",
    }));
    setCurrentUser(updatedInfo);
    setFormErrors([]);
    setShowErrorAlert(false);
    setShowSuccessAlert(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((info) => ({
      ...info,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
    <div className="profile-form">
      <Form>
        <h2>{formData.username}'s Profile</h2>
        <p style={{ textAlign: "left" }}>Update your profile below.</p>
        <FormGroup>
          <Label className="label" for="firstName">
            First Name
          </Label>
          <Input
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder={formData.firstName}
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label" for="lastName">
            Last Name
          </Label>
          <Input
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder={formData.lastName}
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label" for="email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder={formData.email}
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label" for="password">
            Update or enter existing password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        <Alert
          color="danger"
          msg="Please enter your password or enter a new password with at least 5 characters."
          isAlertOpen={showErrorAlert}
        />

        <Alert
          color="success"
          msg="Your changes have been saved!"
          isAlertOpen={showSuccessAlert}
        />

        <Button className="profile-btn" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
