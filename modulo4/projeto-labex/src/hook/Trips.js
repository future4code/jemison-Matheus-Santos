import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import trash from "../img/trash.svg";
import { Viagens } from "../StyledApp";

export default function Trips() {
    const navigate = useNavigate();

    const goToTrip = () => {
        navigate("/admin/trips/:id");
    };

    const [trips, setTrips] = useState([]);

    const Trips = trips.map((trip, index) => {
        return (
            <Viagens key={index}>
                <div onClick={goToTrip}>
                    <p>{trip.name}</p>
                    <img src={trash} alt="lixeira" />
                </div>
            </Viagens>
        );
    });

    const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-queiroz-jemison/trips";

    const getTrips = () => {
        axios
            .get(url)
            .then((response) => setTrips(response.data.trips))
            .catch((error) => console.log(error.response.data));
    };

    useEffect(() => {
        getTrips();
    }, []);

    return <div>{Trips}</div>;
}
