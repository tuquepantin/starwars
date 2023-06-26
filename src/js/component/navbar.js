import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">My Star Wars Blog</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropstart">
					<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
						
					<ul className="dropdown-menu">
						{ store.favorites.length >= 1 ? ( store.favorites.map(favItem => <li key={favItem._id}><span>{favItem.properties.name}</span><span onClick={()=>actions.addFavorite(favItem)}>x</span></li>)) : <div>No favorites yet!</div>}
						
					</ul>	
				</div>
				
			</div>
		</nav>
	);
};

