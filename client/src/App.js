import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Index from './pages/Index';
import Posts from './pages/Posts';
import UserPosts from './pages/UserPosts';
import Post from './pages/Post';
import UpdatePost from './pages/UpdatePost';
import NewPost from './pages/NewPost';
import Users from './pages/Users';
import Navigation from './components/navigation/Navigation';
import Account from './pages/Account';
import { connect } from 'react-redux';

function App({ isLoggedIn }) {
  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/new" component={NewPost} exact />
        <Route path="/user/:userId" component={UserPosts} exact />
        <Route path="/user/post/:postId" component={Post} exact />
        <Route path="/user/post/update/:postId" component={UpdatePost} exact />
        <Route path="/post/:postId" component={Post} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/account" component={Account} exact />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/user/:userId" component={UserPosts} exact />
        <Route path="/user/post/:postId" component={Post} exact />
        <Route path="/post/:postId" component={Post} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/account" component={Account} exact />
        <Redirect to="/account" />
      </Switch>
    );
  }

  return (
    <Router>
      <Navigation />
      {routes}
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(App);
