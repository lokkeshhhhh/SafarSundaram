import React, { useEffect, useState } from "react";
import axios from "./axios";
import Maincontent from "./components/Maincontent";
import Header from "./Body/Header";
function App() {
    return (
        <>
            <Header />
            <Maincontent />
        </>
    )
}

export default App


