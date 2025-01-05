import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maincontent from "./Body/Main_Frontent/Maincontent";
import Header from "./Body/Main_Frontent/Header";
import Footer from "./Body/Main_Frontent/Footer";
function App() {
    return (
        // <>
        //     <Header />
        //     <Maincontent />
        //     <Footer />
        // </>

        <Router basename="/SafarSundaram">
            <Routes>
                {/* Main Website Routes */}
                <Route path="/" element={
                    <>
                        <Header />
                        <Maincontent />
                        <Footer />
                    </>
                } />
                {/* <Route path="/services" element={<MainLayout><Services /></MainLayout>} /> */}
                {/* <Route path="/about" element={<MainLayout><About /></MainLayout>} /> */}
                {/* <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} /> */}
            </Routes>
        </Router>
    )
}

export default App


