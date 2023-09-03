import React, { useState } from "react";

const Register = () => {
    const [registrationStatus, setRegistrationStatus] = useState(null);
    const [clientID, setClientID] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    const handleRegistration = () => {
        const apiUrl = "http://20.244.56.144/train/register";

        const requestData = {
            companyName: "Train Central",
            ownerName: "Ram",
            rollNo: "1",
            ownerEmail: "ram@abc.edu",
            accessCode: "FKDLjg",
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to register the company");
                }
            })
            .then((data) => {
                console.log("Company registration successful:", data);
                setClientID(data.clientID);
                setClientSecret(data.clientSecret);
                setRegistrationStatus("Company registration successful");
                // Handle the API response data here
            })
            .catch((error) => {
                console.error("Error:", error);
                setRegistrationStatus("Error: Company registration failed");
            });
    };

    return (
        <div>
            <h2>Company Registration</h2>
            <button onClick={handleRegistration}>Register Company</button>
            {registrationStatus && <p>{registrationStatus}</p>}
            {clientID && clientSecret && (
                <div>
                    <p>Client ID: {clientID}</p>
                    <p>Client Secret: {clientSecret}</p>
                </div>
            )}
        </div>
    );
};

export default Register;
