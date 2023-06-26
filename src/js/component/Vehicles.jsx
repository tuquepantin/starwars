import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Vehicles = () => {
	const {store, actions} = useContext(Context);

	return(
		<div className="text-center mt-5">
			<div className="vehicles-carousel d-flex" >
				{store.vehicles.map((vehicles) => {
					return(
						<div className="card" style={{minWidth: "18rem"}}>
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{vehicles.properties.name}</h5>
							<p className="card-title">Cargo capacity: {vehicles.properties.cargo_capacity}</p>
							
							<Link to ={`/vehicles/${vehicles._id}`} className="btn btn-outline-primary ">Learn more!</Link>
							<button className="btn btn-outline-warning " onClick={() => actions.addFavorite(vehicles)}><i className="far fa-heart"></i></button>
						</div>
						</div>
					)
				})}
			</div>
		</div>)
};
