import {useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

import Pokemon from './Pokemon';

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [startIndex, setStartIndex] = useState(1);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = [];
      for (let i = startIndex; i < startIndex + 15; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonList.push(data);
      }
      setPokemonData(prevPokemonData => [...prevPokemonData, ...pokemonList]);
    };

    fetchPokemon();
  }, [startIndex]);

  const pokedex = pokemonData.map((pokemon, i) => (
    <Pokemon key={i} name={pokemon.name} type={pokemon.types[0].type.name} id={pokemon.id} />
  ));

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.pokemonContainer}>
        {pokedex}
      </div>
      <button className={styles.next} onClick={() => setStartIndex(prevStartIndex => prevStartIndex + 15)}> Next </button>
    </div>
  );
}

export default Home;
