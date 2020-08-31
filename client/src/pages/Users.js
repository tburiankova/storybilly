import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsers } from '../redux/actions/dataActions';
import UsersList from '../components/users/UsersList';
import Spinner from '../components/ui/Spinner';

import { Container, NotFound } from '../styles/sharedStyles';

const Users = ({ users, error, fetchUsers }) => {
  useEffect(() => {
    if (!users) {
      fetchUsers();
    }
  }, []);

  if (!users) {
    return <Spinner center />;
  }

  if (users.length === 0) {
    return (
      <NotFound>
        <p>There are no users yet!</p>
      </NotFound>
    );
  }

  if (error) {
    return (
      <NotFound>
        <p>Something went wrong, please try again later...</p>
      </NotFound>
    );
  }

  return (
    <Container>
      <UsersList users={users} />
    </Container>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  fetchUsers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  users: state.data.users,
  error: state.data.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
