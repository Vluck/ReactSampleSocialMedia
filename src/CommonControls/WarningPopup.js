
const WarningMesgPopup = ({callbackMethod, warningMesg, headerText, destroyPopup}) => {
	const popStyle = {
		width:"100%",
		height:"100%",
  	position: "fixed",
  	zIndex: 1,
  	paddingTop: "100px",
  	left: "0",
		top: "0",
		overflow: "auto",
		backgroundColor: "rgb(0,0,0)",
		backgroundColor: "rgba(0,0,0,0.9)"
	}
	const popupContentStyle = {
		margin: "auto",
		border: "1px solid #888",
		borderRadius:"5px",
		width: "40%",
		display: "flex",
		flexDirection: "column",
		position:"relative",
		boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
		animationName: "animatetop",
		animationDuration: "0.4s"
	}
	const popupHeaderStyle = {
		padding: "10px 30px",
  	backgroundColor: "rgb(211 200 230)",
		color: "#545050",
		fontSize:"22px"
	}
	const popupMesgStyle = {
		minHeight:"100px",
		padding:"5px",
		backgroundColor: "#a5acd0",
	}
	const footerStyle = {
		padding: "10px 30px ",
  	backgroundColor: "rgb(211 200 230)",
		color: "white",
		textAlign:"right"
	}
	const yesButtonStyle = {
		padding:"5px 10px",
		borderRadius:"5px",
		backgroundColor:"rgb(220 155 155 / 95%)",
		color:"white",
		margin:"3px",
		cursor:"pointer",
	}

	const noButtonStyle = {
		padding:"5px 10px",
		borderRadius:"5px",
		backgroundColor:"rgb(179 208 192)",
		color:"white",
		margin:"3px",
		cursor:"pointer",
	}

	const handleCallbackMethod = () => {
		callbackMethod();
		destroyPopup();
	}
	return (
		<div className="warningPopup" style={popStyle}>
			<div className="popupContent"style={popupContentStyle}>
				<div className="popupHeader" style={popupHeaderStyle}>
					<span>{headerText}</span>
				</div>
				<div className ="popupMesg" style={popupMesgStyle}>
					<span>{warningMesg} </span>
				</div>
				<div className="controls" style={footerStyle}>
						<button style={yesButtonStyle} onClick={() => handleCallbackMethod()}>Yes</button>
						<button style={noButtonStyle} onClick={() => destroyPopup()}>No</button>
				</div>
			</div>
		</div>
	)

}

export default WarningMesgPopup;