import React from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
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
);
