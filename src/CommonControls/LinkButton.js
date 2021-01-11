import React from 'react';

const LinkButton = ({onClickMethod, btntext}) => {

	const styles = {
	background: "none!important",
  border: "none",
  padding: "0!important",
  fontFamily: "arial, sans-serif",
  color: "#069",
  textDecoration: "underline",
	cursor: "pointer",
	outline: "none"
	}
	return <button style={styles} onClick={() => onClickMethod()}>{btntext}</button>;
}
export default LinkButton;