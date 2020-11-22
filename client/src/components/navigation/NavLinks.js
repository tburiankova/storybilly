import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';
import { linksPublic, linksPrivate } from '../../utils/navLinks';

import Modal from '../ui/Modal';

import { Burger, Line, List, Item, StyledNavLink } from './NavLinks.styles';

const NavLinks = ({ isLoggedIn, logout, openDrawer }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    closeModal();
  }, [isLoggedIn]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        heading="Log into your account"
        login
        closeModal={closeModal}
        showModal={showModal}
      />
      <Burger onClick={openDrawer}>
        <Line />
        <Line />
      </Burger>
      <List>
        {linksPublic.map((link) => (
          <Item key={link.id}>
            <StyledNavLink to={link.path}>{link.name}</StyledNavLink>
          </Item>
        ))}
        {isLoggedIn &&
          linksPrivate.map((link) => (
            <Item key={link.id}>
              <StyledNavLink to={link.path}>{link.name}</StyledNavLink>
            </Item>
          ))}
        {isLoggedIn && (
          <Item>
            <StyledNavLink as="button" onClick={logout}>
              Log Out
            </StyledNavLink>
          </Item>
        )}
        {!isLoggedIn && (
          <Item>
            <StyledNavLink as="button" onClick={openModal}>
              Log In
            </StyledNavLink>
          </Item>
        )}
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavLinks)
);
