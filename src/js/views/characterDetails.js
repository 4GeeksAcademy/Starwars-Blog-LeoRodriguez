import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetails = () => {
    const params = useParams()
    const [characterInformation, setCharacterInformation] = useState([])
    const [characterDescription, setCharacterDescription] = useState("")

    let url = "https://www.swapi.tech/api/people/" + params.uid
    let imageUrl = "https://starwars-visualguide.com/assets/img/characters/" + params.uid + ".jpg"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacterInformation(data.result.properties))
            .catch(err => err)
    }, []);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacterDescription(data.result.description))
            .catch(err => err)
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="card mb-3 text-center border-light" style={{ width: "850px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imageUrl} onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                            }} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {characterInformation.length == 0 ?
                                        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                        : characterInformation.name}
                                </h5>
                                <p className="card-text">
                                    {characterDescription == "" ?
                                        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                        : characterDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-danger m-2" style={{ height: "0.5px" }} ></div>
            <table className="table text-danger table-borderless text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birth Year</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Height</th>
                        <th scope="col">Skin Color</th>
                        <th scope="col">Eye Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {characterInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : characterInformation.name}
                        </td>
                        <td>
                            {characterInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : characterInformation.birth_year}
                        </td>
                        <td>
                            {characterInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : characterInformation.gender}
                        </td>
                        <td>
                            {characterInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : characterInformation.height} </td>
                        <td>
                            {characterInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : characterInformation.skin_color}
                        </td>
                        <td>
                            {characterInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : characterInformation.eye_color}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}