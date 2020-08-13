import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  const { id, name, image, posts } = user;
  return (
    <li>
      <Link to={`users/${id}`}>
        <div>
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
        <p>{posts}</p>
      </Link>
    </li>
  );
};

export default UserCard;
