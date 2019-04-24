// Unconnected component that provides links to login and register connected components
// components that display children.
import React from 'react';
import { Link} from 'react-router-dom';

const UnauthedIndex = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UnauthedIndex;
