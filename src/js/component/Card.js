import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://th.bing.com/th/id/Ra16d96e871ffd7289c879d9224943aa7?rik=fJKEWwyg5WEPpg&pid=ImgRaw"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.text}</p>
				<div className="d-flex justify-content-center">
					<button className="btn btn-danger">{props.botton}</button>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	botton: PropTypes.string
	//image: PropTypes.string
};

export default Card;
