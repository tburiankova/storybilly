import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import Follow from './Follow';

import { Card, Text } from './UserCard.styles';
import { Flexbox } from '../../styles/sharedStyles';

const UserCard = ({ user }) => {
  const { _id, name, image, posts, followers } = user;

  const randomNumber = Math.floor(Math.random() * 9);
  return (
    <Card number={randomNumber}>
      <Link to={`user/${_id}`}>
        <Flexbox center column>
          <Avatar src={image} />
          <Text>{name}</Text>
          <Text light>Stories told: {posts.length}</Text>
          <Text light>Followers: {followers.length}</Text>
        </Flexbox>
      </Link>
      <Follow userId={_id} />
    </Card>
  );
};

export default UserCard;
