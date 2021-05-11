import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<div className="jumbotron text-justify bg-cover">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.text}</p>
			<a
				href="buttonCard"
				className="btn btn-primary"
				rel="noopener noreferrer">
				{props.botton}
			</a>
		</div>
	);
}
Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	botton: PropTypes.string
};
export default Jumbotron;
