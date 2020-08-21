import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsers } from '../redux/actions/dataActions';
import UsersList from '../components/users/UsersList';
import Spinner from '../components/ui/Spinner';

const Users = ({ users, fetchUsers }) => {
  useEffect(() => {
    if (!users) {
      fetchUsers();
    }
  }, []);

  if (!users) {
    return <Spinner />;
  }

  if (users.length === 0) {
    return <p>There are no users yet!</p>;
  }

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  fetchUsers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  users: state.data.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
