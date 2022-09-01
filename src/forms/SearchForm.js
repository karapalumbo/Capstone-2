import React, { useState } from "react";
import { Button, InputGroup, Input } from "reactstrap";
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
          placeholder="Search by name"
          value={formData}
          onChange={handleChange}
        />
        <Button className="search-btn">Search</Button>
      </InputGroup>
    </form>
  );
};

export default SearchForm;
