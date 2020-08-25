import React from 'react';

import Post from '../../assets/post.png';

import { ImageWrapper, Image } from './PostImage.styles';

const PostImage = ({ src }) => {
  return (
    <ImageWrapper>
      <Image src={src ? src : Post} />
    </ImageWrapper>
  );
};

export default PostImage;
