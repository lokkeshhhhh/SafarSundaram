import React, { useEffect, useState } from 'react';
import axios from './axios'; // Import the axios instance

const App = () => {
    const [posts, setPosts] = useState([]); // State to store posts

    useEffect(() => {
        axios.get('/user') // API call to fetch posts
            .then(response => {
                console.log(response.data.users); // Log the response data
                setPosts(response.data.users); // Update the state
            })
            .catch(error => console.error(error)); // Handle errors
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            <h1>Posts lokesh</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
