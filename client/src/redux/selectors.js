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

export const selectFollowed = (following) =>
  createSelector([selectPosts], (posts) => {
    return posts
      ? posts
          .filter((post, i) => following.indexOf(post.author._id) >= 0 && i < 4)
          .slice(0, 3)
      : null;
  });
