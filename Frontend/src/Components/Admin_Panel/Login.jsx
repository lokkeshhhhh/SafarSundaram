import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("login", {
                email,
                password,
            });

            console.log("log");
            navigate("/dashboard");
        
            const errorDiv = document.querySelector('.invalid');
            errorDiv.classList.remove("text-danger", "invalid");
            errorDiv.classList.add("text-success");
            errorDiv.textContent = "Logged In";
        } catch (error) {
            const errorDiv = document.querySelector('.invalid');
        
            if (error.response) {
                const data = error.response;
                errorDiv.classList.remove("text-success");
                errorDiv.classList.add("text-danger");
                errorDiv.textContent = error.response.data.message;
            } 
        }
        
    };

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed" style={{ fontSize: "13px" }}>
                <div
                    className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <div className="row justify-content-center w-100">
                            <div className="col-md-8 col-lg-6 col-xxl-3">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <a href="" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                            <img src="assets/img/logo/logo-light.png" width="180" alt="" />
                                        </a>
                                        <form method="POST" onSubmit={handleLogin}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                <span className="text-danger invalid"></span>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                <span className="text-danger invalid"></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="form-check">
                                                    <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" />
                                                    <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                                                        Remeber this Device
                                                    </label>
                                                </div>
                                                <a className="text-dark fw-bold mb-2" href="">Forgot Password ?</a>
                                            </div>
                                            <button type="submit" className="btn btn-dark w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;