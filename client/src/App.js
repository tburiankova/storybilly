import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import './App.css';
import { GlobalStyles } from './styles/globalStyles';

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

import { loadUser } from './redux/actions/authActions';

function App({ isLoggedIn, showMessage, loadUser }) {
  // check for token in localStorage - if present and valid -> auto-login
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('storybilly'));

    if (
      userData &&
      userData.token &&
      new Date(userData.expiration) > new Date()
    ) {
      loadUser(userData.token);
    }

    if (
      userData &&
      userData.token &&
      new Date(userData.expiration) < new Date()
    ) {
      localStorage.removeItem('storybilly');
    }
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/new" component={NewPost} exact />
        <Route path="/user/:userId" component={UserPosts} exact />
        <Route path="/post/:postId" component={Post} exact />
        <Route path="/user/post/:postId" component={Post} exact />
        <Route path="/user/post/update/:postId" component={UpdatePost} exact />
        <Route path="/post/update/:postId" component={UpdatePost} exact />
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
        <Route path="/post/:postId" component={Post} exact />
        <Route path="/user/post/:postId" component={Post} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/account" component={Account} exact />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Router>
      <GlobalStyles />
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

const mapDispatchToProps = (dispatch) => ({
  loadUser: (token) => dispatch(loadUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
