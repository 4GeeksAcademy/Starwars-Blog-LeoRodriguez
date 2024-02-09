import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({ name, gender, hairColor, eyeColor, uid }) => {
    let imageUrl = "https://starwars-visualguide.com/assets/img/characters/" + uid + ".jpg";

    const { store, actions } = useContext(Context);

    let found = store.favoritesList.filter((element) => element.type === "character" && element.uid === uid);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-3">{name}</h5>
                <p className="card-text my-0">Gender: {gender} </p>
                <p className="card-text my-0">Hair color: {hairColor} </p>
                <p className="card-text my-0">Eye-color: {eyeColor} </p>
                <div className="d-flex">
                    <Link to={"/characterDetails/" + uid}>
                        <button type="button" className="btn btn-outline-primary mt-3 me-2">Learn more!</button>
                    </Link>
                    {found.length === 0 ?
                        <button type="button" className="btn btn-outline-warning mt-3 ms-auto" onClick={() => actions.addToFavorites({ type: "character", uid: uid, name: name })}>
                            <i class="fa-sharp fa-regular fa-heart"></i>
                        </button>
                        :
                        <button type="button" className="btn btn-outline-warning mt-3 ms-auto" onClick={() => actions.removeFromFavorites({ type: "character", uid: uid, name: name })}>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    }
                </div>


                {console.log(store.favoritesList)}
                {console.log(found)}
            </div>
        </div>
    )
}