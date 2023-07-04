import React from 'react';
import Error from '../assets/error.jpg';

function ErrorMessage() {
  return <div className="error-message">
    <br></br>
    <img src={Error} />
    <h2>An error occurred while fetching data. Unable to Display</h2>
    <br></br>
    <br></br>
  </div>;
}

export default ErrorMessage