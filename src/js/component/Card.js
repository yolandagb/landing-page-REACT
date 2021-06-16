import React from "react";
import PropTypes from "prop-types";
import "../../../src/styles/card.scss";

export function Card(props) {
	return (
		<div className="card">
			<img className="card-img-fluid" src={props.urlImg} alt="..." />
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.text}</p>
				<div className="d-flex justify-content-center">
					<button className="btn btn-dark">{props.botton}</button>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	botton: PropTypes.string,
	urlImg: PropTypes.string
};

export default Card;
