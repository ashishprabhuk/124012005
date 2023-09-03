import React from "react";
import { useParams } from "react-router-dom";
import Id from "../components/Id";

const Trains = () => {
    const { trainNumber } = useParams();

    return (
        <div>
            <h1>Single Train Details</h1>
            <Id trainNumber={trainNumber} />
        </div>
    );
};

export default Trains;
