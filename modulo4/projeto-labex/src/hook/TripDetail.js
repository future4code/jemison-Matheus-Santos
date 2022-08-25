import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TripDetail() {
    const [tripsDetails, setTripsDetails] = useState([]);

    const TripsDetails = tripsDetails.map((tripDetail, index) => {
        return (
            <div key={index}>
                <h1>{tripDetail.name}</h1>
                <ul>
                    <li>{tripDetail.name}</li>
                    <li>{tripDetail.description}</li>
                    <li>{tripDetail.planet}</li>
                    <li>{tripDetail.durationInDays}</li>
                    <li>{tripDetail.date}</li>
                </ul>
            </div>
        );
    });

    const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-queiroz-jemison/trip/AgVMg0zcjbIUH9KGpiz7";

    const serviceHeaders = {
        headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IllmYkVvWTJCaTNwaVhNZEIwUU1TIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NjEzNzgzODl9.4FqqiHGvJVpA4AqXPtXJ2zGWkKMCx99p7ZuWPOyvIbc",
        },
    };

    const getTripDetail = () => {
        axios
            .get(url, serviceHeaders)
            .then((response) => setTripsDetails(response.data.trip))
            .catch((error) => console.log(error.response.data));
    };

    useEffect(() => {
        getTripDetail();
    }, []);

    return <div>{TripsDetails}</div>;
}
