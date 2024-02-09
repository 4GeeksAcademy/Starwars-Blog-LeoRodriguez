import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CharacterCard } from "./characterCard"
import { Context } from "../store/appContext";
import "../../styles/scroll_bar.css"

export const CharacterList = () => {

    const { store, actions } = useContext(Context)

    return (
        <div className="my-5">
            <h2 className="text-danger">Characters</h2>
            {store.characterList.length == 0 ?
                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                :
                <div className="p-2 grid gap-3 d-flex flex-row row-cols-2 scroll-bar" style={{ overflowX: "scroll" }} >
                    {store.characterList.map((character, index) => (
                        <CharacterCard key={index} {...character} />
                    ))}
                </div>
            }

        </div>
    )
}