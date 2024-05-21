import React from 'react';

import styles from '../styles/Pokemon.module.css'; 

const Pokemon = ({ pokemon }) => {
  return (
    <div className={`${styles.pokemon} ${styles[pokemon.types[0].type.name]}`}>
      <div className={styles.imgContainer}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{pokemon.name}</h3>
        <span className={styles.type}>Type: <span>{pokemon.types[0].type.name}</span></span>
      </div>
    </div>
  );
};


export default Pokemon;