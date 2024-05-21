import { useState } from 'react';
import styles from '../styles/Burger.module.css';

function Burger(props) {

	const [lastBurger, setLastBurger] = useState(null)

	const handleClick = () => {
		props.selectBurger(props.name);
		setLastBurger(props.name)
	}
	return (
		<div className={styles.container}>
			<h2 className={styles.name}>{props.name}</h2>
			<img className={styles.images} src={props.image} />
			<div className={styles.btnContainer}>
			<button className={"selectBtn"} onClick={() => handleClick()}>Select</button>
			<button className={"removeBtn"} onClick={() => props.removeBurger(props.name)}>Remove</button>

			</div>
		</div>
	);
}

export default Burger;
