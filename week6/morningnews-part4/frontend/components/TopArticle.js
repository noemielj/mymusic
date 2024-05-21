import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/bookmarks';
import styles from '../styles/TopArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


function TopArticle(props) {

	const dispatch = useDispatch();

	const userToken = useSelector(state => state.user.value.token);
	const [canBookmark, setCanBookmark] = useState(false);

		const handleBookmarkClick = () => {
		if (canBookmark) {
			dispatch(removeBookmark(props));
			dispatch(addBookmark(props))
		
	}}

	useEffect(() => {
        if (userToken) {
            fetch(`http://localhost:3000/users/canBookmark/${userToken}`)
                .then(response => response.json())
                .then(data => {
					if (data.canBookmark)
                    setCanBookmark(true);
                });
        } else {
            setCanBookmark(false);
        }
    }, [userToken]);




	let iconStyle = {};
	if (props.isBookmarked) {
		iconStyle = { 'color': '#E9BE59' };
	}

	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon icon={faBookmark} onClick={() => handleBookmarkClick()} style={iconStyle} className={styles.bookmarkIcon} />
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default TopArticle;
