// Authorization.js (or any relevant component file)
import React, { useState } from "react";

const Authorization = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [tokenType, setTokenType] = useState(null);
    const [expiresIn, setExpiresIn] = useState(null);

    const handleAuthorization = () => {
        const apiUrl = "http://20.244.56.144/train/auth";

        const requestData = {
            companyName: "Train Central",
            clientID: "b46128ae-fbde-4c16-a4b1-6ae6ad718e27",
            ownerName: "Ram",
            ownerEmail: "ram@abc.edu",
            rollNo: "1",
            clientSecret: "XOy010RPayKBOdAN",
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
                    throw new Error("Failed to obtain authorization token");
                }
            })
            .then((data) => {
                console.log("Authorization successful:", data);
                setAccessToken(data["access token"]);
                setTokenType(data["token_type"]);
                setExpiresIn(data["expires in"]);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <h2>Authorization</h2>
            <button onClick={handleAuthorization}>
                Obtain Authorization Token
            </button>
            {accessToken && (
                <div>
                    <p>Token Type: {tokenType}</p>
                    <p>Access Token: {accessToken}</p>
                    <p>Expires In: {expiresIn}</p>
                </div>
            )}
        </div>
    );
};

export default Authorization;
