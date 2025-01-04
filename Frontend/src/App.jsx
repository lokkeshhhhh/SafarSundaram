import React, { useEffect, useState } from "react";
import axios from "./axios";
import Maincontent from "./components/Maincontent";
import Header from "./Body/Header";
import Footer from "./Body/Footer";
function App() {
    return (
        <>
            <Header />
            <Maincontent />
            <Footer />
        </>
    )
}

export default App


