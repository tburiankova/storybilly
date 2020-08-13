import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UsersList from '../components/users/UsersList';

const Users = ({ users }) => {
  return (
    <div>
      <Link to="/user/Test">Test user posts</Link>
      <UsersList users={users} />
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.data.users,
});

export default connect(mapStateToProps)(Users);
