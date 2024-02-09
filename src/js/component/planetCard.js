import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = ({ name, population, terrain, uid }) => {
    let imageUrl = "https://starwars-visualguide.com/assets/img/planets/" + uid + ".jpg"

    const { store, actions } = useContext(Context);

    let found = store.favoritesList.filter((element) => element.type === "planet" && element.uid === uid);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                currentTarget.style.height = "286px"
            }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-3">{name}</h5>
                <p className="card-text my-0">Population: {population} </p>
                <p className="card-text my-0">Terrain: {terrain} </p>
                <div className="d-flex">
                    <Link to={"/planetDetails/" + uid}>
                        <button type="button" className="btn btn-outline mt-3 me-2 learnMoreBtn">Learn more!</button>
                    </Link>
                    {found.length === 0 ?
                        <button type="button" className="btn btn-outline-warning mt-3 ms-auto" onClick={() => actions.addToFavorites({ type: "planet", uid: uid, name: name })}>
                            <i class="fa-sharp fa-regular fa-heart"></i>
                        </button>
                        :
                        <button type="button" className="btn btn-outline-warning mt-3 ms-auto" onClick={() => actions.removeFromFavorites({ type: "planet", uid: uid, name: name })}>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}