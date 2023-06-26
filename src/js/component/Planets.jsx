import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets = () => {
	const {store, actions} = useContext(Context);

	return(
		<div className="text-center mt-5">
			
			<div className="planet-carousel d-flex">
				{store.planets.map((planet) => {
					return(
						<div className="card" style={{minWidth: "18rem"}}>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.properties.name}</h5>
							<p className="card-title">Population: {planet.properties.population}</p>
							<p className="card-text">Terrain: {planet.properties.terrain}</p>
							<Link to ={`/planet/${planet._id}`} className="btn btn-outline-primary">Learn more!</Link>
							<button className="btn btn-outline-warning " onClick={() => actions.addFavorite(planet)}><i className="far fa-heart"></i></button>
						</div>
						</div>
					)
				})}
			</div>
		</div>)
};
