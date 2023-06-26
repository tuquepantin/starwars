import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<div className="container">
		<nav className="navbar navbar-light  mb-3">
			<Link to="/">
			<img
                src={`https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png`}
                className="card-img-top"
				width="70" height="70"
                alt="..."
            />
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropstart">
					<button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
						
					<ul className="dropdown-menu">
						{ store.favorites.length >= 1 ? ( store.favorites.map(favItem => <li key={favItem._id}><span>{favItem.properties.name}</span><span onClick={()=>actions.addFavorite(favItem)}></span></li>)) : <div></div>}
						
					</ul>	
				</div>
				
			</div>
		</nav>
		</div>
	);
};

