import React from 'react';

import UserCard from './UserCard';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return <div>No users found</div>;
  }
  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
