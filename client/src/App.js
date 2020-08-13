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
import NewPost from './pages/NewPost';
import Users from './pages/Users';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:userId" component={UserPosts} exact />
        <Route path="/posts/new" component={NewPost} exact />
        <Route path="/users" component={Users} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
