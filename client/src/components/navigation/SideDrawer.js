import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';

import { logout } from '../../redux/actions/authActions';
import { linksPublic, linksPrivate } from '../../utils/navLinks';

import { Drawer } from './SideDrawer.styles';

const SideDrawer = ({ drawerIsOpen, isLoggedIn, logout }) => {
  const content = (
    <Transition in={drawerIsOpen} timeout={500}>
      {(state) => (
        <Drawer state={state}>
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
        </Drawer>
      )}
    </Transition>
  );
  return ReactDOM.createPortal(content, document.getElementById('drawer'));
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
