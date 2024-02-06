import React from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";



export const Home = () => (

	<div className="text-center mt-5">
		
			<Link to="/characters">
			<button>Clik Me</button>
			</Link>
			
			
	</div>
	
);
