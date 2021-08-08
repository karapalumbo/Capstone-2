import PetCard from "./PetCard";

function PetDetail({ pets }) {
  return (
    <div>
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          species={pet.species}
          age={pet.age}
          gender={pet.gender}
          color={pet.color}
          description={pet.description}
          photo={pet.photo}
        />
      ))}
    </div>
  );
}

export default PetDetail;
