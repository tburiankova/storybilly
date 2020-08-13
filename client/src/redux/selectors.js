import { createSelector } from 'reselect';

const selectPosts = (state) => state.data.posts;

export const selectUserPosts = (userId) =>
  createSelector([selectPosts], (posts) =>
    posts.filter((post) => post.author === userId)
  );

export const selectPost = (postId) =>
  createSelector([selectPosts], (posts) =>
    posts.find((post) => post._id === postId)
  );
