import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

const SignUpForm = ({ signUp }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signUp(formData);
    if (res.success) {
      history.push("/pets");
    } else {
      throw new Error("Error signing up.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((info) => ({
      ...info,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Get ready to meet your new best friend!</h2>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="username"
          name="username"
          id="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="=password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="=firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="=lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="=email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <Button className="signUp-btn">Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
