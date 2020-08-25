import React from 'react';

import UserAvatar from '../../assets/user.png';

import { AvatarWrapper, AvatarImage } from './Avatar.styles';

const Avatar = ({ src, tiny }) => {
  return (
    <AvatarWrapper tiny={tiny}>
      <AvatarImage src={src ? src : UserAvatar} />
    </AvatarWrapper>
  );
};

export default Avatar;
