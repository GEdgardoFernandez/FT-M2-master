import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value,
    });
  };

  const handleSpecies = (event) => {
    const selectedSpecies = event.target.value;
    const filteredAnimals = zoo.allAnimals.filter((animal) => animal.species === selectedSpecies);

    setZoo({
      ...zoo,
      animals: filteredAnimals,
    });
  };

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  };

  return (
    <div className={styledZoo.divContent}>
      <div className={styledZoo.divContentTitle}>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1 className={styledZoo.title}>{zoo.zooName}</h1>
      </div>

      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
      <Animals animals={zoo.animals} />
    </div>
  );
}
