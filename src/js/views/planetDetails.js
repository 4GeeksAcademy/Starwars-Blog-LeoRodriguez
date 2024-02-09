import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {
    const params = useParams()
    const [planetInformation, setPlanetInformation] = useState([])
    const [planetDescription, setPlanetDescription] = useState("")

    let url = "https://www.swapi.tech/api/planets/" + params.uid
    let imageUrl = "https://starwars-visualguide.com/assets/img/planets/" + params.uid + ".jpg"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPlanetInformation(data.result.properties))
            .catch(err => err)
    }, []);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPlanetDescription(data.result.description))
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
                                    {planetInformation.length == 0 ?
                                        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                        : planetInformation.name}
                                </h5>
                                <p className="card-text">
                                    {planetDescription == "" ?
                                        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                        : planetDescription}
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
                        <th scope="col">Climate</th>
                        <th scope="col">Population</th>
                        <th scope="col">Orbital Period</th>
                        <th scope="col">Rotation Period</th>
                        <th scope="col">Diameter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {planetInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : planetInformation.name}
                        </td>
                        <td>
                            {planetInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : planetInformation.climate}
                        </td>
                        <td>
                            {planetInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : planetInformation.population}
                        </td>
                        <td>
                            {planetInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : planetInformation.orbital_period} </td>
                        <td>
                            {planetInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : planetInformation.rotation_period}
                        </td>
                        <td>
                            {planetInformation.length == 0 ?
                                <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                : planetInformation.diameter}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}