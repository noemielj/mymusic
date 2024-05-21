import React from 'react';
import styles from '../styles/Movie.module.css';

import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
import { faStar } from '../node_modules/@fortawesome/free-solid-svg-icons';


function Movie() {
   
    const stars = [];
  
    for (let i = 0; i < 9; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }

    return (
        <div className={styles.card}>
           <img src="poster.jpg" alt="Poster" className={styles.imgPoster} />
           <h3> Nom du film</h3>
           <p> description</p> 
           <p>  <FontAwesomeIcon icon={faStar} /> {stars} (vote count) </p>
           
           
        </div>
    )
}

export default Movie;

