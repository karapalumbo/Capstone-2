import React, { useState, useEffect } from "react";
import PetfinderApi from "../api/api";
import SearchForm from "../forms/SearchForm";
import PetCard from "./PetCard";
import { FormGroup, Label, Input } from "reactstrap";
import Loading from "../Loading";
import "./PetList.css";

function PetList() {
  const [pets, setPets] = useState(null);
  const [selectValue, setSelectValue] = useState("");
  const [petNames, setPetNames] = useState([]);
  const [petColors, setPetColors] = useState([]);
  const [petGenders, setPetGenders] = useState(new Set());
  const [petAges, setPetAges] = useState(new Set());

  const petInfo = async (name) => {
    const p = await PetfinderApi.getPets(name);
    const names = p.map((pet) => pet.name);
    const colors = p.map((pet) => pet.color);
    const genders = p.map((pet) => pet.gender);
    const ages = p.map((pet) => pet.age);

    setPets(p);
    setPetNames(names);
    setPetColors(new Set(colors));
    setPetGenders(new Set(genders));
    setPetAges(new Set(ages));

    console.log("NEW SET", new Set(genders));
    // console.log("NEW SET", new Set(ages));
    // console.log("petGenders set", petGenders);
    console.log("petGenders arr", [...petGenders]);
    // console.log("petAges arr", [...petAges]);
  };

  useEffect(() => {
    petInfo();
  }, []);

  const handleNameSelect = async (event) => {
    setSelectValue(event.target.value);
    const isAll =
      event.target.value === "All Names" ? null : event.target.value;
    const p = await PetfinderApi.getPets(isAll);
    setPets(p);
  };

  const handleColorSelect = async (event) => {
    setSelectValue(event.target.value);
    const isAll =
      event.target.value === "All Colors" ? null : event.target.value;
    const p = await PetfinderApi.getPets(isAll);
    setPets(p);
  };

  const handleGenderSelect = async (event) => {
    setSelectValue(event.target.value);
    const isAll =
      event.target.value === "All Genders" ? null : event.target.value;
    const p = await PetfinderApi.getPets(isAll);
    setPets(p);
  };

  const handleAgeSelect = async (event) => {
    setSelectValue(event.target.value);
    const isAll = event.target.value === "All Ages" ? null : event.target.value;
    const p = await PetfinderApi.getPets(isAll);
    setPets(p);
  };

  if (!pets) return <Loading />;

  return (
    <div>
      <FormGroup style={{ maxWidth: 300 }}>
        <Label for="nameSelect">Filter by Name</Label>
        <Input
          onChange={handleNameSelect}
          type="select"
          name="select"
          value={selectValue}
        >
          <option>All Names</option>
          {petNames.map((pet, index) => (
            <option value={pet} key={index}>
              {pet}
            </option>
          ))}
        </Input>

        <Label for="colorSelect">Filter by Color</Label>
        <Input
          onChange={handleColorSelect}
          type="select"
          name="select"
          value={selectValue}
        >
          <option>All Colors</option>

          {[...petColors].map((pet, index) => (
            <option value={pet} key={index}>
              {pet}
            </option>
          ))}
        </Input>

        <Label for="genderSelect">Filter by Gender</Label>
        <Input
          onChange={handleGenderSelect}
          type="select"
          name="select"
          value={selectValue}
        >
          <option>All Genders</option>

          {[...petGenders].map((pet, index) => (
            <option value={pet} key={index}>
              {pet}
            </option>
          ))}
        </Input>

        <Label for="genderSelect">Filter by Age</Label>
        <Input
          onChange={handleAgeSelect}
          type="select"
          name="select"
          value={selectValue}
        >
          <option>All Ages</option>

          {[...petAges].map((pet, index) => (
            <option value={pet} key={index}>
              {pet}
            </option>
          ))}
        </Input>
      </FormGroup>

      {pets.length ? (
        <div className="petcard-container">
          {pets.map((p) => {
            return (
              <PetCard
                key={p.pet_id}
                pet_id={p.pet_id}
                name={p.name}
                species={p.species}
                age={p.age}
                gender={p.gender}
                color={p.color}
                description={p.description}
                photos={p.photos}
              />
            );
          })}
        </div>
      ) : (
        <p>Sorry, no pets found.</p>
      )}
    </div>
  );
}

export default PetList;
