import React, { memo } from 'react';

import { useFetch } from '../../hooks/useFetch';

import {
  Container,
  Label,
  NotFound,
  StyledLink,
} from '../../styles/sharedStyles';

import PostCard from './PostCard';
import Spinner from '../ui/Spinner';

const LastPost = () => {
  const [response, error, loading] = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/posts/last`
  );

  if (loading) {
    return <Spinner center />;
  }

  if (error) {
    return (
      <NotFound>
        <p>Something went wrong, please try again later...</p>
      </NotFound>
    );
  }

  return (
    <Container centerCol trans>
      <Label>Last story posted</Label>
      {response && <PostCard post={response.post} />}
      <StyledLink to="/posts">All Posts</StyledLink>
    </Container>
  );
};

export default memo(LastPost);
