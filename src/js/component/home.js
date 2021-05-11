import React from "react";
import { Navbar } from "../component/Navbar.js";
import { Jumbotron } from "../component/Jumbotron.js";
import { Card } from "../component/Card.js";
import { Footer } from "../component/Footer.js"

//create your first component
export function Home() {
    return (
    <Navbar />
    <div className="jumbotron-container">
        <Jumbotron 
        title=
        text=
        botton=
        
        />

        <div className="container-card d-flex">

            <Card />
            <Card />
            <Card />
            <Card />

        </div>


    </div>

    <Footer />
    

    );
    

};
