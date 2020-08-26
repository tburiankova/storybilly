import React from 'react';

import Post from '../../assets/post.png';

import { ImageWrapper, Image } from './PostImage.styles';

const PostImage = ({ src }) => {
  const imageSrc = src ? `/${src}` : Post;
  return (
    <ImageWrapper>
      <Image src={imageSrc} />
    </ImageWrapper>
  );
};

export default PostImage;
