import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  const { _id, name, image, posts } = user;
  return (
    <li>
      <Link to={`user/${_id}`}>
        <div>
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
        <p>Stories shared: {posts.length}</p>
      </Link>
    </li>
  );
};

export default UserCard;
