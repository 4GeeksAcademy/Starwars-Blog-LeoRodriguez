import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipCard = ({ model, crew, passengers, maxAtmospheringSpeed, uid }) => {
    let imageUrl = "https://starwars-visualguide.com/assets/img/starships/" + uid + ".jpg"

    const { store, actions } = useContext(Context);

    let found = store.favoritesList.filter((element) => element.type === "starship" && element.uid === uid);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                currentTarget.style.height = "191px"
            }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-3">{model}</h5>
                <p className="card-text my-0">Crew: {crew} </p>
                <p className="card-text my-0">Passengers: {passengers} </p>
                <p className="card-text my-0">Max Atmosphering Speed: {maxAtmospheringSpeed} </p>
                <div className="d-flex">
                    <Link to={"/starshipDetails/" + uid}>
                        <button type="button" className="btn btn-outline-primary mt-3 me-2">Learn more!</button>
                    </Link>
                    {found.length === 0 ?
                        <button type="button" className="btn btn-outline-warning mt-3 ms-auto" onClick={() => actions.addToFavorites({ type: "starship", uid: uid, name: model })}>
                            <i class="fa-sharp fa-regular fa-heart"></i>
                        </button>
                        :
                        <button type="button" className="btn btn-outline-warning mt-3 ms-auto" onClick={() => actions.removeFromFavorites({ type: "starship", uid: uid, name: model })}>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}