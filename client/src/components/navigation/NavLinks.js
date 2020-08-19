import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';

const NavLinks = ({ isLoggedIn, logout }) => {
  return (
    <ul>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Stories</NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink to="/posts/new">Add a story</NavLink>
          </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </>
      )}
      {!isLoggedIn && (
        <li>
          <NavLink to="/account">Account</NavLink>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
