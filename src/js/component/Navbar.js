import React from "react";
import PropTypes from "prop-types";

export function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			<a className="navbar-brand" href="#">
				Reading Blog
			</a>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a className="nav-link" href="#about">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#services">
						About our project
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#portfolio">
						Share your perspective
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#contact">
						Contact us
					</a>
				</li>
			</ul>
		</nav>
	);
}
Navbar.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
export default Navbar;
