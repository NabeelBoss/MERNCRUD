import React from 'react'
import { useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const Read = () => {

    const [users, setUsers] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await fetch("http://localhost:5000/userregistration");

            if (response.ok) {
                setUsers(await response.json());
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

    const deleteUser = async (id) => {
        try {
          await fetch(`http://localhost:5000/userregistration/${id}`, {
            method: "DELETE",
          });
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      };

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
                    {users && users.length > 0 ? (
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Pass}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/userregistration/${user._id}`}>Update</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</Link>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="4">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Read