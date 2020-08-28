import React from 'react';

import { Container, Name, DateCreated, Divider } from './PostInfo.styles';
import Avatar from '../users/Avatar';
import Follow from '../users/Follow';

const PostInfo = ({ post }) => {
  const datePosted = new Date(post.createdAt).toDateString();
  return (
    <Container>
      <Name to={`/user/${post.author._id}`}>{post.author.name}</Name>
      <Divider />
      <Avatar src={post.author.image} size="tiny" />
      <Divider />
      <DateCreated>{datePosted}</DateCreated>
      <Divider />
      <Follow userId={post.author._id} />
    </Container>
  );
};

export default PostInfo;
