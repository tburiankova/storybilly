import React from 'react';

import Post from '../../assets/post.png';

import { ImageWrapper, Image } from './PostImage.styles';

const PostImage = ({ src }) => {
   const imageSrc = src
      ? `${process.env.REACT_APP_BASE_BACKEND_URL}/${src}`
      : Post;
   return (
      <ImageWrapper>
         <Image src={imageSrc} />
      </ImageWrapper>
   );
};

export default PostImage;
