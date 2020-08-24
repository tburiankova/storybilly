import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';
import { linksPublic, linksPrivate } from '../../utils/navLinks';

import { Burger, Line, List } from './NavLinks.styles';

const NavLinks = ({ isLoggedIn, logout, openDrawer }) => {
  return (
    <>
      <Burger onClick={openDrawer}>
        <Line />
        <Line />
      </Burger>
      <List>
        <ul>
          {linksPublic.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
          {isLoggedIn &&
            linksPrivate.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          {isLoggedIn && (
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          )}
        </ul>
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
