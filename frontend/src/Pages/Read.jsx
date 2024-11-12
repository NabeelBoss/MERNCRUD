import React from 'react'
import { useEffect, useState } from 'react';

const Read = () => {

    const [users, setUsers] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await fetch("http://localhost:5000/userregistration");
            const data = await response.json();

            if (response.ok) {
                setUsers(data.users);
                alert("Data Coming Successfully");
            } else {
                alert("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="container">
            <table class="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                {users && users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Pass}</td>
                                <td>
                                    <button className="btn btn-primary" >Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Read