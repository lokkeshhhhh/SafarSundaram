import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maincontent from "./Components/Main_Frontent/Maincontent";
import Header from "./Components/Main_Frontent/Header";
import Footer from "./Components/Main_Frontent/Footer";
import Admin from "./Components/Admin_Panel/Admin";
function App() {
    return (
        <Router basename="/safar-sundaram/">
            <Routes>
                {/* Main Website Routes */}
                <Route path="/" element={
                    <>
                        <Header />
                        <Maincontent />
                        <Footer />
                    </>
                } />
                <Route path="/admin" element={<><Admin /></>} />
                {/* <Route path="/about" element={<MainLayout><About /></MainLayout>} /> */}
                {/* <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} /> */}
            </Routes>
        </Router>
    )
}

export default App


