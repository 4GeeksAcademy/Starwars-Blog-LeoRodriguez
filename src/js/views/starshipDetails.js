import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StarshipDetails = () => {
    const params = useParams()
    const [starshipInformation, setStarshipInformation] = useState([])
    const [starshipDescription, setStarshipDescription] = useState("")

    let url = "https://www.swapi.tech/api/starships/" + params.uid
    let imageUrl = "https://starwars-visualguide.com/assets/img/starships/" + params.uid + ".jpg"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setStarshipInformation(data.result.properties))
            .catch(err => err)
    }, []);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setStarshipDescription(data.result.description))
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
                                    {starshipInformation.length == 0 ?
                                        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                        : starshipInformation.model}
                                </h5>
                                <p className="card-text">
                                    {starshipDescription == "" ?
                                        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                        : starshipDescription}
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
                        <th scope="col">Model</th>
                        <th scope="col">Length</th>
                        <th scope="col">Crew</th>
                        <th scope="col">Passengers</th>
                        <th scope="col">Max Atmosphering Speed</th>
                        <th scope="col">Cargo Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {starshipInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : starshipInformation.model}
                        </td>
                        <td>
                            {starshipInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : starshipInformation.length}
                        </td>
                        <td>
                            {starshipInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : starshipInformation.crew}
                        </td>
                        <td>
                            {starshipInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : starshipInformation.passengers} </td>
                        <td>
                            {starshipInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : starshipInformation.max_atmosphering_speed}
                        </td>
                        <td>
                            {starshipInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : starshipInformation.cargo_capacity}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}