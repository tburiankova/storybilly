import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';

import { Card, Text } from './UserCard.styles';

const UserCard = ({ user }) => {
  const { _id, name, image, posts } = user;
  const randomNumber = Math.floor(Math.random() * 8);
  return (
    <Link to={`user/${_id}`}>
      <Card number={randomNumber}>
        <Avatar src={image} />
        <Text>{name}</Text>
        <Text light>Stories told: {posts.length}</Text>
      </Card>
    </Link>
  );
};

export default UserCard;
