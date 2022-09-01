import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Alert from "../Alert";
import { useHistory } from "react-router-dom";

const LoginForm = ({ login }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login(formData);
      if (res.success) {
        history.push("/pets");
      }
    } catch (error) {
      setFormErrors(error);
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
      <h2>Welcome back!</h2>
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
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormGroup>

      {formErrors.length ? (
        <Alert color="danger" isAlertOpen={true} msg={formErrors[0]} />
      ) : null}

      <Button className="profile-btn" onSubmit={handleSubmit}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
