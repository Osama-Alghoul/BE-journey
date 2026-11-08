const posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];

export const getPosts = () => posts;

export const getPostsById = (id) => posts.find((post) => post.id === id).title;

export const getPostsLength = () => posts.length;
