import React, { useState } from "react";
import { Button, InputGroup, Input, FormGroup, Col } from "reactstrap";
import "./SearchForm.css";

const SearchForm = ({ search }) => {
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    search(formData);
    setFormData(formData);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <InputGroup className="search-form">
        <Input
          id="search"
          name="search"
          placeholder="Enter search term"
          value={formData}
          onChange={handleChange}
        />
        <Button>Search</Button>
      </InputGroup>
    </form>
  );
};

export default SearchForm;
