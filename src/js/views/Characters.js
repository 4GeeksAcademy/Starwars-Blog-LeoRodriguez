import React from "react";
import "../../styles/home.css";
import CharacterCard from "../component/character.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Characters = () => (
	<CharacterCard/>
);

