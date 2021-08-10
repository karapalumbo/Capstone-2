import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

const SignupForm = ({ signup }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await signup(formData);
    if (res.success) {
      history.push("/pets");
    } else {
      throw new Error("Error signing up.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((info) => ({
      ...info,
      [name]: value,
    }));
  }

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button>Signup</Button>
    </Form>
  );
};

export default SignupForm;
