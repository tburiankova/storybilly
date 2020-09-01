import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/logo-black-2x.png';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../ui/Backdrop';

import { Bar, Container, LogoImg } from './Navigation.styles';

const Navigation = ({ history }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  history.listen(() => closeDrawer());

  return (
    <Bar>
      <Container>
        <SideDrawer drawerIsOpen={drawerIsOpen} />
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        <Link to="/">
          <LogoImg src={Logo} alt="Storybilly" />
        </Link>
        <NavLinks openDrawer={openDrawer} />
      </Container>
    </Bar>
  );
};

export default withRouter(Navigation);
