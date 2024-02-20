import Card from './Card';
import characters from '../data.js';
export default function Cards(props) {
   return <div>
      {
         characters.map((character) => {
            return <Card
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         })
      }
   </div>;
}
