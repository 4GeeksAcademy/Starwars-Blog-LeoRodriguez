import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { StarshipCard } from "./starshipCard";
import "../../styles/scroll_bar.css"

export const StarshipsList = () => {

    const {store, actions} = useContext(Context)

    return (
        <div className="my-5">
            <h2 className="text-danger">Starships</h2>
            {store.starshipsList.length == 0 ?
                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                :
                <div className="p-2 grid gap-3 d-flex flex-row row-cols-2 scroll-bar" style={{ overflowX: "scroll" }} >
                    {store.starshipsList.map((starship, index) => (
                        <StarshipCard key={index} {...starship} />
                    ))}
                </div>
            }

        </div>
    )
}