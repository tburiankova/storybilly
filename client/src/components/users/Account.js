import React from 'react';
import { connect } from 'react-redux';

import Avatar from './Avatar';

const Account = ({ user }) => {
  return (
    <div>
      Hello, {user.name}
      <div>
        <Avatar src={user.image} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Account);
