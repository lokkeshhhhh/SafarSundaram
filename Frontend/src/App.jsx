import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maincontent from "./Components/Main_Frontend/Maincontent";
import Header from "./Components/Main_Frontend/Header";
import Footer from "./Components/Main_Frontend/Footer";
import Admin from "./Components/Admin_Panel/Admin";
import Login from "./Components/Admin_Panel/Login";
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
                <Route path="/login" element={<><Login /></>} />
                <Route path="/dashboard" element={<><Admin /></>} />
                {/* <Route path="/about" element={<MainLayout><About /></MainLayout>} /> */}
                {/* <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} /> */}
            </Routes>
        </Router>
    )
}

export default App


