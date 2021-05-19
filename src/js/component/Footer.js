import React from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<div className="page-footer font-small special-color-dark pt-4">
		<footer className="text-center py-3">
			<p>
				<strong>Reading Blog</strong>{" "}
				<img
					src="https://cdn1.iconfinder.com/data/icons/international-circular-flags/512/lgbt-gay-bisexual-transgender-lesbian-rainbow-pride-512.png"
					className="footer-image"
				/>{" "}
				by{" "}
				<a href="https://www.linkedin.com/in/yolanda-garcia-barranco-2b4448117/">
					Yolanda García Barranco
				</a>
			</p>
		</footer>
	</div>
);

export default Footer;
