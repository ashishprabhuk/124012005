import React from "react";

const ListTrains = ({ trains }) => {
    return (
        <div>
            <h2>Train List</h2>
            <ul>
                {trains.map((train) => (
                    <li key={train.id}>
                        <card train={train} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListTrains;
