import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import StarWarsImage from "../../img/starwarsLogo.png"

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">
					<img src={StarWarsImage} alt="Star Wars Logo" style={{ maxHeight: "50px" }} />
				</span>
			</Link>
			<div className="btn-group me-5">
				<button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites ({store.favoritesList.length})
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favoritesList.length == 0 ?
						<li className="d-flex justify-content-center">(empty)</li>
						:
						store.favoritesList.map((favorite, index) => (
							<li key={index} className="d-flex">
								<Link to={"/" + favorite.type + "Details/" + favorite.uid}>
									<a className="dropdown-item text-primary" href="#">{favorite.name}</a>
								</Link>
								<button type="button" className="btn ms-auto" onClick={() => actions.removeFromFavorites({ type: favorite.type, uid: favorite.uid, name: favorite.name })}>
									<i className="fa-solid fa-trash-can"></i>
								</button>
							</li>
						))
					}
				</ul>
			</div>
		</nav>
	);
};
