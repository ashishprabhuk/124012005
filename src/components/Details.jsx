// TrainDetails.js (or any relevant component file)
import React, { useEffect, useState } from "react";

const Details = ({ authorizationToken }) => {
    const [trainDetails, setTrainDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = "http://20.244.56.144:80/train/trains";

        fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authorizationToken}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch train details");
                }
            })
            .then((data) => {
                console.log("Train details fetched successfully:", data);
                setTrainDetails(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, [authorizationToken]);

    return (
        <div>
            <h2>Train Details</h2>
            {loading ? (
                <p>Loading train details...</p>
            ) : (
                <ul>
                    {trainDetails.map((train, index) => (
                        <li key={index}>
                            <p>Train Name: {train.trainName}</p>
                            <p>Train Number: {train.trainNumber}</p>
                            <p>
                                Departure Time: {train.departureTime.Hours}{" "}
                                Hours {train.departureTime.Minutes} Minutes{" "}
                                {train.departureTime.Seconds} Seconds
                            </p>
                            <p>
                                Seats Available (Sleeper):{" "}
                                {train.seatsAvailable.sleeper}
                            </p>
                            <p>Price (Sleeper): {train.price.sleeper}</p>
                            <p>Delayed By: {train.delayedBy} minutes</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Details;
