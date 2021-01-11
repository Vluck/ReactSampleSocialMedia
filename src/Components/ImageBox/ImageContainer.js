import React, { useEffect, useState } from 'react';
import './ImageContainer.css';
import LinkButton from '../../CommonControls/LinkButton';
import ImageModal from '../../CommonControls/ImageModal';
import WarningMesgPopup from '../../CommonControls/WarningPopup';


const ImageContainer = ({id, url, likes, category, comments, handleLikes, addComment, deleteComment}) => {
	const [isLiked, setIsLiked] = useState(false)
	const [comment, setComment] = useState('');
	const [isEnlarge, setIsEnlarge] = useState(false);
	const [commentIndex, setCommentIndex] = useState(null);

	const handleImageLikes = () => {
		const incrementBy = isLiked ? -1 : +1;
		handleLikes(id, likes + incrementBy);
		setIsLiked(!isLiked);
	}
	const handleImageComment = () => {
		if(!comment) return;
		addComment(id, comment);
		setComment('');
	}
	return (
		<div className="wrapper">
			<div className="imagecontainer">
				<img src={url} alt="loading..." onClick = {() => {setIsEnlarge(true)}} />
			</div>
			<div className="likecontainer">
				<div className="likes">
					<span>{likes}</span> 
					<LinkButton onClickMethod= {() => handleImageLikes()} btntext={isLiked ? "Unlike" : "Like"}/>
				</div>
				<div className="category">
					<span>{category}</span>
				</div>
			</div>
		<div className="postcontainer">
			<input type="text" placeholder="Type your comment here..." value={comment} onChange={(e) => setComment(e.target.value)}/>
			<button onClick = {() => handleImageComment()}>POST</button>
		</div>
		<div className="commentscontainer">
			{
				comments.map((x,i) =>{ 
				return (
					<div className='commentBlock'>
						<span className="comment" key={i}>{x}</span>
						<span className="commentDelete" onClick={() => setCommentIndex(i)}>
							<i class="mdi mdi-delete"></i>
						</span>
					</div>
				);
			})
			}
		</div>
		{isEnlarge && <ImageModal isVisible={isEnlarge} url={url} setVisibility={setIsEnlarge}/>}
		{commentIndex != null && (<WarningMesgPopup 
												callbackMethod = {() => deleteComment(id,commentIndex)} 
												warningMesg="Are you sure you want to delete this comment?"
												headerText="Delete Comment"
												destroyPopup = {() => setCommentIndex(null)}
												/>
												)
		}
		</div>
	)

}

export default ImageContainer;