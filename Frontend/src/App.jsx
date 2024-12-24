import React, { useEffect, useState } from "react";
import axios from "./axios";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("/user")
            .then((response) => {
                setPosts(response.data.users);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("login", {
                email,
                password,
            });
            
            console.log("Login successful");
            document.querySelector('.logindiv').style.display = 'none';
            
        } catch (err) {
            setError(err.response.data.message || "An error occurred");
            console.error(err);
        }
    };

    return (
        <div className="container p-5">
            <h1 className="text-center mb-4">Content</h1>

            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="card mt-5 shadow-lg logindiv">
                <div className="card-body">
                    <h2 className="text-center mb-4">Login</h2>
                    <form className="form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="form-control mb-3"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-control mb-3"
                            />
                        </div>
                        <button className="btn btn-primary w-100" type="submit">
                            Login
                        </button>
                        {error && <p className="text-danger mt-3 text-center">{error}</p>}
                    </form>
                </div>
            </div>
        </div>

    );
};

export default App;
