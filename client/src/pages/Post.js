import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import { fetchPosts } from '../redux/actions/dataActions';
import { selectPost } from '../redux/selectors';

import Spinner from '../components/ui/Spinner';
import PostInfo from '../components/posts/PostInfo';

import { NotFound, StyledLink, Container } from '../styles/sharedStyles';
import { Heading, ImageWrapper, Image } from './Post.styles';

const Post = ({ posts, post, loading, fetchPosts, isLoggedIn, user }) => {
  useEffect(() => {
    if (!posts) {
      fetchPosts();
    }
  }, []);

  if (loading || !posts) {
    return <Spinner center />;
  }

  if (!post) {
    return (
      <NotFound>
        <p>No post found...</p>
      </NotFound>
    );
  }

  return (
    <Container>
      <Heading>{post.title}</Heading>
      <PostInfo post={post} />
      {post.image && (
        <ImageWrapper>
          <Image
            src={`${process.env.REACT_APP_BASE_BACKEND_URL}/${post.image}`}
            alt={post.title}
          />
        </ImageWrapper>
      )}
      <ReactMarkdown source={post.content}></ReactMarkdown>
      {isLoggedIn && user._id === post.author._id && (
        <StyledLink to={`update/${post._id}`}>Manage Post</StyledLink>
      )}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  post: selectPost(ownProps.match.params.postId)(state),
  loading: state.data.loading,
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
