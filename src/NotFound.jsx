import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="headline">404 Error</h2>
      <p>This Page does not exist</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  )
}

export default NotFound;