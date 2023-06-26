import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";

export const Home = () => {
	


	return(

	<div>
		<h2>Characters</h2>
		<div className="scroll">
			<Characters />
		</div>

		<h2>Planets</h2>
		<div className="scroll">
			<Planets/>
		</div>
		
		<h2>Vehicles</h2>
		<div className="scroll">
			<Vehicles/>
		</div>

	</div>
	)

	};


