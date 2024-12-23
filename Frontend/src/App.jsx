import React, { useEffect, useState } from 'react';
import axios from './axios';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/user')
            .then(response => {
                setPosts(response.data.users);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Posts lokesh</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
