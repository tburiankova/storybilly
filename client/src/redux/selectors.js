import { createSelector } from 'reselect';

const selectPosts = (state) => state.data.posts;

export const selectUserPosts = (userId) =>
  createSelector([selectPosts], (posts) =>
    posts ? posts.filter((post) => post.author._id === userId) : null
  );

export const selectPost = (postId) =>
  createSelector([selectPosts], (posts) =>
    posts ? posts.find((post) => post._id === postId) : null
  );
