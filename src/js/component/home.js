import React from "react";
import { Navbar } from "../component/Navbar.js";
import { Jumbotron } from "../component/Jumbotron.js";
import { Card } from "../component/Card.js";
import { Footer } from "../component/Footer.js";
import "../../../src/styles/card.scss";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />

			<div className="jumbotron-container">
				<Jumbotron
					title="A Warm Welcome!"
					text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
					botton="Call to action!"
				/>

				<div className="container-card d-flex">
					<Card
						title="Ursula K. Le Guin and The Tales of Earthsea"
						text="The tales of this book explore and extend the world established by the Earthsea novels, written by Ursula K. Le Guin.
                        A world of wonder and magic; where right and wrong is not that easy to discern."
						botton="Find Out More!"
					/>
					<Card
						title="Leigh Bardugo and Shadow & Bone"
						text="Leigh Bardugo is the author of the Grishaverse  which spans the Shadow and Bone, the Six of Crows, The Language of Thorns, and King of Scars. Her other works include Wonder Woman: Warbringer and Ninth House."
						botton="Find Out More!"
					/>
					<Card
						title="Iria G. Parente & Selene M. Pascual"
						text="Best spanish authors of YA fantasy. Their novels not only outstand for their narrative and intricatre plots, but also for their diverse and well represented LGTB+ community."
						botton="Find Out More!"
					/>
				</div>
			</div>

			<Footer />
		</>
	);
}
