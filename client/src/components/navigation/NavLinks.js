import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Stories</NavLink>
      </li>
      <li>
        <NavLink to="/posts/new">Add a story</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Account</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
