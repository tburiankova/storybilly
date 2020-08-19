import React from 'react';
import { connect } from 'react-redux';

import UserCard from './UserCard';
import Spinner from '../ui/Spinner';

const UsersList = ({ users, loading, error }) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>There has been an error, please try again later...</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(UsersList);
