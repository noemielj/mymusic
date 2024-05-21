import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/bookmarks';
import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Article(props) {
	const dispatch = useDispatch();
	const userToken = useSelector(state => state.user.value.token);
	 const [canBookmark, setCanBookmark] = useState(false);
	const user = useSelector(state => state.user.value.user);


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
		<div className={styles.articles}>
			<div className={styles.articleHeader}>
				<h3>{props.title}</h3>
				<FontAwesomeIcon icon={faBookmark} onClick={() => handleBookmarkClick()} style={iconStyle} className={styles.bookmarkIcon} />
			</div>
			<h4 style={{ textAlign: "right" }}>- {props.author}</h4>
			<div className={styles.divider}></div>
			<Image src={props.urlToImage} alt={props.title} width={600} height={314} />
			<p>{props.description}</p>
		</div>
	);
}

export default Article;
