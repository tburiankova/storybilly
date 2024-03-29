import React from 'react';

import UserAvatar from '../../assets/user.png';

import { AvatarWrapper, AvatarImage } from './Avatar.styles';

const Avatar = ({ src, size }) => {
   const imageSrc = src
      ? `${process.env.REACT_APP_BASE_BACKEND_URL}/${src}`
      : UserAvatar;
   return (
      <AvatarWrapper size={size}>
         <AvatarImage src={imageSrc} />
      </AvatarWrapper>
   );
};

export default Avatar;
