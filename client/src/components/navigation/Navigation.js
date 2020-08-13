import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';

const Navigation = () => {
  return (
    <div>
      <h1>
        <Link to="/">Storybilly</Link>
      </h1>
      <NavLinks />
    </div>
  );
};

export default Navigation;
