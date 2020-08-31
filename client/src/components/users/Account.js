import React from 'react';
import { connect } from 'react-redux';

import Avatar from './Avatar';
import MyPosts from '../posts/MyPosts';

import { UserContainer, FollowersInfo } from './Account.styles';
import { StyledLink } from '../../styles/sharedStyles';

const Account = ({ user, own }) => {
  return (
    <>
      <UserContainer>
        {own ? <h2>Hello, {user.name}! </h2> : <h2>{user.name}</h2>}
        <Avatar src={user.image} />
        <FollowersInfo light>
          You have {user.followers.length}{' '}
          {user.followers.length > 1 || user.followers.length === 0
            ? 'followers'
            : 'follower'}
        </FollowersInfo>
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
