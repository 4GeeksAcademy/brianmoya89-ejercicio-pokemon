import React, { useState, useEffect } from 'react';

function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {setPokemon(data.result);console.log(data);})
      .catch(error => console.log(error));
  }, []);

  console.log(pokemon);

  return (
    <ul>
      {pokemon.map(element=> {
        return <li key="key">{element.name}</li>
      })}
      
    </ul>
  );

};
          
export default Home;
