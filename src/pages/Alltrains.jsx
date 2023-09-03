// AllTrainsPage.js
import React from "react";
import Details from "../components/Details";
import ListTrains from "../components/ListTrains.jsx";

const Alltrains = () => {
    return (
        <div>
            <h1>All Trains</h1>
            <ListTrains />
            <Details />
        </div>
    );
};

export default Alltrains;
