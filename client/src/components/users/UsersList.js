import React from 'react';
import { connect } from 'react-redux';

import UserCard from './UserCard';
import Spinner from '../ui/Spinner';

import { List } from './UserList.styles';
import { NotFound } from '../../styles/sharedStyles';

const UsersList = ({ users, loading, error }) => {
  if (loading) {
    return <Spinner center />;
  }

  if (error) {
    return (
      <NotFound>
        <p>There has been an error, please try again later...</p>
      </NotFound>
    );
  }

  return (
    <List>
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(UsersList);
