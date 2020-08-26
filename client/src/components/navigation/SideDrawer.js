import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';

import { logout } from '../../redux/actions/authActions';
import { linksPublic, linksPrivate } from '../../utils/navLinks';

import { Drawer, List, ListItem, Divider, SignUp } from './SideDrawer.styles';

import Login from './Login';

const SideDrawer = ({ drawerIsOpen, isLoggedIn, logout }) => {
  const content = (
    <Transition in={drawerIsOpen} timeout={500}>
      {(state) => (
        <Drawer state={state}>
          <List>
            {linksPublic.map((link) => (
              <Fragment key={link.id}>
                <ListItem>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
            {isLoggedIn &&
              linksPrivate.map((link) => (
                <Fragment key={link.id}>
                  <ListItem>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </ListItem>
                  <Divider />
                </Fragment>
              ))}
            {isLoggedIn && (
              <>
                <ListItem>
                  <button onClick={logout}>Log Out</button>
                </ListItem>
                <Divider />
              </>
            )}
            {!isLoggedIn && (
              <>
                <Login />
                <SignUp>
                  Don't have an account?<Link to="/"> Sign Up</Link>
                </SignUp>
              </>
            )}
          </List>
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
