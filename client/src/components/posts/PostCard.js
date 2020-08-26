import React from 'react';

import PostImage from './PostImage';

import Avatar from '../users/Avatar';

import { CardWrapper, Card, Title, Author, Name } from './PostCard.styles';

const PostCard = ({ post }) => {
  const randomNumber = Math.floor(Math.random() * 8);

  return (
    <CardWrapper to={`post/${post._id}`}>
      <Card number={randomNumber}>
        <Title>{post.title}</Title>
        <PostImage src={post.image} />
        <Author>
          <p>A story written by </p>
          <Name>{post.author.name}</Name>
          <Avatar src={post.author.image} size="small" />
        </Author>
      </Card>
    </CardWrapper>
  );
};

export default PostCard;
