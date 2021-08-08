import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

const LoginForm = ({ login }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await login(formData);
    if (res.success) {
      history.push("/company");
    } else {
      throw new Error("Error logging in.");
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
          placeholder="Enter your username"
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
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
