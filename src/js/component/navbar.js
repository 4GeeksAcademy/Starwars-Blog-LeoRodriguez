import React from "react";
import starwarsLogo from "../../img/starwarsLogo.png";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={starwarsLogo} className="logo"/>
			</Link>
			<div className="ml-auto favorites">				
		 	 <btn className="nav-item btn dropdown">
           		 <a className="nav-link dropdown-toggle favorites-list" href="#" data-bs-toggle="dropdown" aria-expanded="false">Favorites (0)</a>
            	<ul className="dropdown-menu">
             	 <li><a className="dropdown-item" href="#">Action</a></li>
           	     <li><a className="dropdown-item" href="#">Another action</a></li>
            	 <li><a className="dropdown-item" href="#">Something else here</a></li>
        		</ul>
          	 </btn>
			</div>
		</nav>
	);
};
