import { useState } from 'react';
import styles from '../styles/Home.module.css';
import UserInfos from './UserInfos';
import { addUserInfosToStore } from '../reducers/user'
import { useDispatch} from 'react-redux';

function Home() {
	const dispatch = useDispatch();
	const [usernameInput, setUsernameInput] = useState('');

	const handleClick = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: usernameInput }),
		})
			.then(response => response.json())
			.then(userData => {
				// Write your code here
				if (userData.result) {
				dispatch(addUserInfosToStore({ username: usernameInput, token: userData.newUserInfos.token }));
				setUsernameInput('');
				}
			});
	};

	return (
		<div className={styles.globalContainer}>
			<h1>Tokenify</h1>
			<div className={styles.inputCard}>
				<input
					placeholder='Username'
					onChange={e => setUsernameInput(e.target.value)}
					value={usernameInput}
					className={styles.input}
				/>
				<button
					onClick={() => handleClick()}
					className={styles.button}
				>
					Register
				</button>
			</div>
			<UserInfos />
		</div>
	);
}

export default Home;
