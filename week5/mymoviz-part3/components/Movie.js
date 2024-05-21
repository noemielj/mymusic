import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import { useState } from 'react';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

function Movie(props) {
  const [ personalNote, setPersonalNote] = useState(0);
  const [ watchCount, setWatchCount] = useState(0);
  const [like, setLike] = useState(false); 

  const handleLikeClick = () => {
    setLike(!like);
  };

  const handleStarClick = (note) => {
    setPersonalNote(note);
  };

  // const handleWatchClick = () => {
  //   setWatchCount(watchCount +1)
  // }

  const stars = [];
  
  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { 'color': '#f1c40f' };
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }

// blue stars
  const blueStars = [];
  for (let i = 0; i < 10; i++) {
    let style = { color: i < personalNote ? '#2196f3' : '' };
    
    blueStars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} onClick={() => handleStarClick(i + 1)} className="note" />);
  }

  //  caméra
    const cameraStyle = { color: 0 < watchCount ? '#e74c3c' : 'black' };
    let iconCamera = (<FontAwesomeIcon icon={faVideo} style={cameraStyle} onClick={() => setWatch()} className="watch" />)
  
  function setWatch () {
    setWatchCount(watchCount +1)
  }
    
  // bouton like 
const likeMovie = { color : 0 < like ? 'red' : 'black'}; 
let iconLike = (<FontAwesomeIcon icon={faHeart} style={likeMovie} onClick={() => handleLikeClick()} className="like" />)



  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.poster} alt={props.title} />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.overview}</p>
        <span className={styles.vote}>{stars} ({props.voteCount})</span>
        <span className={styles.myvote}>{blueStars} ({personalNote}) </span>
        <span className={styles.camera}> {iconCamera} ({watchCount})</span>
        <span className={styles.like}> {iconLike} ({like})</span>
      </div>
    </div>
  );
}

export default Movie;
