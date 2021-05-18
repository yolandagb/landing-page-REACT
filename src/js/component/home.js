import React from "react";
import { Navbar } from "../component/Navbar.js";
import { Jumbotron } from "../component/Jumbotron.js";
import { Card } from "../component/Card.js";
import { Footer } from "../component/Footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />

			<div className="jumbotron-container">
				<Jumbotron
					title="Welcome to our Reading Blog!"
					text="Here you will be find a selection of books, written by female authors such as Leigh Bardugo or Ursala K. Le Guin. Our main goal is to provide you with a diverse range of female authors and themes. 
                    We also want to generate conversations around these books,authors and the themes that they talk about.
                    Last thing to say this is a LGBT+ friendly space, so feel free to leave a comment in our comment section!"
					botton="Press to start your experience!"
				/>

				<div className="container-card d-flex">
					<Card
						title="Ursula K. Le Guin and The Tales of Earthsea"
						text="The tales of this book explore and extend the world established by the Earthsea novels, written by Ursula K. Le Guin.
                        A world of wonder and magic; where right and wrong is not that easy to discern."
						botton="Find Out More!"
						urlImg="https://infoliteraria.com/wp-content/uploads/2020/09/ursula-795x1024.jpeg"
					/>
					<Card
						title="Leigh Bardugo and Shadow & Bone"
						text="Leigh Bardugo is the author of the Grishaverse  which spans the Shadow and Bone, the Six of Crows, The Language of Thorns, and King of Scars. Her other works include Wonder Woman: Warbringer and Ninth House."
						botton="Find Out More!"
						urlImg="https://hachette.imgix.net/books/9781510108899.jpg?auto=compress,format"
					/>
					<Card
						title="Iria G. Parente & Selene M. Pascual"
						text="Best spanish authors of YA fantasy. Their novels not only outstand for their narrative and intricatre plots, but also for their diverse and well represented LGTB+ community."
						botton="Find Out More!"
						urlImg="https://www.nocturnaediciones.com/imagenes/biblioteca/241.jpg"
					/>
				</div>
			</div>

			<Footer />
		</>
	);
}
