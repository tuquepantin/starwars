import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";

export const Home = () => {



	return (
		<div className="container">
			<div>
				<h1>Characters</h1>
				<div className="scroll">
					<Characters />
				</div>

				<h1 className="margen">Planets</h1>
				<div className="scroll">
					<Planets />
				</div>

				<h1 className="margen">Vehicles</h1>
				<div className="scroll">
					<Vehicles />
				</div>
			</div>
		</div>
	)

};


