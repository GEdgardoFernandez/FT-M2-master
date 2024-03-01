import React from 'react';
import styledAnimals from './Animals.module.css'
export default class Animals extends React.Component {  render() {
  const { animals } = this.props;

  return (
    <div className={styledAnimals.container}>
      {animals.map((animal) => (
        <div key={animal.id} className={styledAnimals.containerAnimals}>
          <h5>{animal.name}</h5>
          <img src={animal.image} alt={animal.name} width="300px" />
          <span>{animal.species}</span>
        </div>
      ))}
    </div>
  );
}
}

