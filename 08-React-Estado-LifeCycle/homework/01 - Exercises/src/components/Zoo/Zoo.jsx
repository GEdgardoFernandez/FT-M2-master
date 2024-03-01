import React, { useEffect, useState, useRef } from "react";
import Animals from "../Animals/Animals";
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  const [zoo, setZoo] = useState({
    zooName: "",
    animals: [],
    species: [],
  });

  const allAnimalsRef = useRef([]);

  useEffect(() => {
    // Utilizando fetch para obtener datos del servidor
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) => {
        setZoo((prevZoo) => ({
          ...prevZoo,
          animals: data.animals,
          species: data.species,
        }));
        allAnimalsRef.current = data.animals;
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSpecies = (selectedSpecie) => {
    const filteredAnimals = allAnimalsRef.current.filter(
      (animal) => animal.species === selectedSpecie
    );

    setZoo((prevZoo) => ({
      ...prevZoo,
      animals: filteredAnimals,
    }));
  };

  const handleAllSpecies = () => {
    // Verificar si ya estamos mostrando todos los animales
    if (zoo.animals !== allAnimalsRef.current) {
      // Mostrar todos los animales solo si aún no lo estamos haciendo
      setZoo((prevZoo) => ({
        ...prevZoo,
        animals: allAnimalsRef.current,
      }));
    }
  };

  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value,
    });
  };

  return (
    <div className={styledZoo.divContent}>
      <div className={styledZoo.divContentTitle}>
        <label>Zoo Name:</label>
        <input
          type="text"
          value={zoo.zooName}
          onChange={handleInputChange}
        />
        <h1 className={styledZoo.title}>{zoo.zooName}</h1>
      </div>
      {/* Renderizar el componente Species */}
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />

      {/* Renderizar el componente Animals */}
      <Animals animals={zoo.animals} />
    </div>
  );
}