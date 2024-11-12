import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';

const Error = () => {
  return (
    <div className="not-found-container">
    <h1>404</h1>
    <p>Page Not Found</p>
    <Link to="/">Go Back to Home</Link>
  </div>
  )
}

export default Error