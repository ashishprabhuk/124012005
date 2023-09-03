// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alltrains from "./pages/Alltrains.jsx";
import Trains from "./pages/Trains.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Alltrains} />
                <Route path="/train/:trainNumber" component={Trains} />
            </Routes>
        </Router>
    );
}

export default App;
