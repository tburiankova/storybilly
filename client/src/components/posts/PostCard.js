import React, { memo } from 'react';

import PostImage from './PostImage';

import Avatar from '../users/Avatar';

import { CardWrapper, Card, Title, Author, Name } from './PostCard.styles';

const PostCard = ({ post, own, main }) => {
  const randomNumber = Math.floor(Math.random() * 9);

  return (
    <Card to={`post/${post._id}`} number={randomNumber} main={main}>
      <Title>{post.title}</Title>
      <PostImage src={post.image} />
      {!own && (
        <Author>
          A story written by
          <Name>{post.author.name}</Name>
          <Avatar src={post.author.image} size="small" />
        </Author>
      )}
    </Card>
  );
};

export default memo(PostCard);
