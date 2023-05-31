import React from "react";
import "../../styles/home.css";

import { Card } from "../component/Card.jsx";

export const Home = () => (
<div className="container">
	<div className="row">
	    <div className="col-10">
		    <img className="logo" src="https://www.pngmart.com/files/3/Star-Wars-Logo-PNG-Photos.png" alt="StarWars"/>
		</div>
		<button type="button" class="btn btn-primary col-2">Favorites</button>
	</div>
	<div>
		<h2>Characters</h2>
		<div className="scroll">
			<Card />
		</div>
		<h2>Planets</h2>
		<div className="scroll">
			<Card />
		</div>

	</div>
</div>
);
