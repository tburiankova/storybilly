import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './App.css';

import Index from './pages/Index';
import Posts from './pages/Posts';
import UserPosts from './pages/UserPosts';
import Post from './pages/Post';
import UpdatePost from './pages/UpdatePost';
import NewPost from './pages/NewPost';
import Users from './pages/Users';
import Account from './pages/Account';
import Navigation from './components/navigation/Navigation';
import FlashMessage from './components/ui/FlashMessage';
import { connect } from 'react-redux';

function App({ isLoggedIn, showMessage }) {
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
      <CSSTransition
        in={showMessage}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <FlashMessage />
      </CSSTransition>
      {routes}
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  showMessage: state.message.showMessage,
});

export default connect(mapStateToProps)(App);
