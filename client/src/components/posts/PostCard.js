import React from 'react';

const PostCard = ({ post }) => {
  if (!post) {
    return <p>Getting posts</p>;
  }
  return <div>{post.title}</div>;
};

export default PostCard;
