import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Characters = () => {
    const {store, actions} = useContext(Context);

	return(
		<div className="text-center mt-5">
			<div className="d-flex" >
				{store.people.map((character) => {
					return(
						<div style={{minWidth: "18rem"}}>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
						<div>
							<h5>{character.properties.name}</h5>
							<p>Gender: {character.properties.gender}</p>
							<p>Hair-color: {character.properties.hair_color}</p>
							<p>Eye-color: {character.properties.eye_color}</p>
							<Link to ={`/people/${character._id}`} className="btn btn-outline-primary ">Learn more!</Link>
							<button className="btn btn-outline-warning " onClick={() => actions.addFavorite(character)}><i className="far fa-heart"></i></button>
						</div>
						</div>
					)
				})}
			</div>
			
		</div>)
};
