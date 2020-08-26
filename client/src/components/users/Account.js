import React from 'react';
import { connect } from 'react-redux';

import Avatar from './Avatar';
import MyPosts from '../posts/MyPosts';

import { UserContainer } from './Account.styles';
import { StyledLink } from '../../styles/sharedStyles';

const Account = ({ user }) => {
  return (
    <>
      <UserContainer>
        <h1>Hello, {user.name}!</h1>
        <Avatar src={user.image} />
        <StyledLink to="/posts/new">Share a Story?</StyledLink>
      </UserContainer>
      <MyPosts />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Account);
