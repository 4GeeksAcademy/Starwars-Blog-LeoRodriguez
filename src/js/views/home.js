import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {CharacterList} from "../component/characterList"
import {PlanetList} from "../component/planetList"
import {StarshipsList} from "../component/starshipsList"
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";

export const Home = () => (

	<div className="container mt-5">
		<CharacterList />
		<PlanetList />
		<StarshipsList />
		<Footer />
	</div>
);
