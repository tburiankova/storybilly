import React, { memo } from 'react';

import PostImage from './PostImage';

import Avatar from '../users/Avatar';

import { CardWrapper, Card, Title, Author, Name } from './PostCard.styles';

const PostCard = ({ post }) => {
  const randomNumber = Math.floor(Math.random() * 9);

  return (
    <CardWrapper to={`post/${post._id}`}>
      <Card number={randomNumber}>
        <Title>{post.title}</Title>
        <PostImage src={post.image} />
        <Author>
          A story written by
          <Name>{post.author.name}</Name>
          <Avatar src={post.author.image} size="small" />
        </Author>
      </Card>
    </CardWrapper>
  );
};

export default memo(PostCard);
