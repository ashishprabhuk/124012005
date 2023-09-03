// TrainDetailsById.js (or any relevant component file)
import React, { useEffect, useState } from "react";

const Id = ({ authorizationToken, trainNumber }) => {
    const [trainDetails, setTrainDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = `http://20.244.56.144/trains/${trainNumber}`;

        fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authorizationToken}`,
                // Add any other required headers here
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
                // Handle the API response data here
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
                // Handle the error here
            });
    }, [authorizationToken, trainNumber]);

    return (
        <div>
            <h2>Train Details for Train Number {trainNumber}</h2>
            {loading ? (
                <p>Loading train details...</p>
            ) : (
                <div>
                    <p>Train Name: {trainDetails.trainName}</p>
                    <p>Train Number: {trainDetails.trainNumber}</p>
                    <p>
                        Departure Time: {trainDetails.departureTime.Hours} Hours{" "}
                        {trainDetails.departureTime.Minutes} Minutes{" "}
                        {trainDetails.departureTime.Seconds} Seconds
                    </p>
                    <p>
                        Seats Available (Sleeper):{" "}
                        {trainDetails.seatsAvailable.sleeper}
                    </p>
                    <p>Price (Sleeper): {trainDetails.price.sleeper}</p>
                    <p>AC Seats: {trainDetails.AC}</p>
                    <p>Delayed By: {trainDetails.delayedBy} minutes</p>
                </div>
            )}
        </div>
    );
};

export default Id;
