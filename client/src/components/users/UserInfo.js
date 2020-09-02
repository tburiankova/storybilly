import React from 'react';

import Avatar from './Avatar';
import { UserContainer, Info } from './UserInfo.styles';
import { StyledLink } from '../../styles/sharedStyles';

const UserInfo = ({ user, own }) => {
  return (
    <UserContainer>
      {own ? <h2>Hello, {user.name}! </h2> : <h2>{user.name}</h2>}
      <Avatar src={user.image} />
      <Info light>
        {own && 'You have'} {user.followers.length}{' '}
        {user.followers.length > 1 || user.followers.length === 0
          ? 'followers'
          : 'follower'}
      </Info>
      {!own && (
        <Info light>
          {user.posts.length} {user.posts.length === 1 ? 'story' : 'stories'}{' '}
          shared
        </Info>
      )}
      {own && <StyledLink to="/posts/new">Share a Story?</StyledLink>}
    </UserContainer>
  );
};

export default UserInfo;
