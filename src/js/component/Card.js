import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "35rem", height: "35rem" }}>
			<img
				className="card-img-top"
				src=""
			/>
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.text}</p>
				<div className="d-flex justify-content-center">
					<button className="btn btn-primary">{props.botton}</button>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	botton: PropTypes.string
};

export default Card;