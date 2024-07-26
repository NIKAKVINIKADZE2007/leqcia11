import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to='/'>Go back to home page</Link>
    </div>
  );
};

export default NotfoundPage;
