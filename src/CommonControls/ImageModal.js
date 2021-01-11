import {useEffect} from 'react';

const ImageModal = ({isVisible, url, setVisibility}) => {

	const modalStyle = {
		display: isVisible ? "block": "none",
		width:"100%",
		height:"100%",
  	position: "fixed",
  	zIndex: 1,
  	paddingTop: "100px",
  	left: "0",
		top: "0",
		overflow: "auto",
		backgroundColor: "rgb(0,0,0)",
		backgroundColor: "rgba(0,0,0,0.9)",
		cursor: "pointer"
	}
	const imageStyle = {
		cursor: "initial"
	}
	const hideModal = () => {
		setVisibility(false);
	}
	useEffect(() => {
		document.getElementById('imageModal').addEventListener('click', hideModal);
		document.getElementById('modalImage').addEventListener('click', e => e.stopPropagation());
	}, [])
	return (
	<div id="imageModal" className="modal" style={modalStyle}>
		<img style={imageStyle} id="modalImage" src={url} alt="loading...."/>
	</div>
	)}

	export default ImageModal;