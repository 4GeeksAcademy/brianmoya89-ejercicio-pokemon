import React, { useState, useEffect } from 'react';

function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon', Option)
      .then(response => {
        return response.json();
      })
      .then(data => {setPokemon(data.results);
        console.log(data);
      })
      .catch(error => error)
  }, [])

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
