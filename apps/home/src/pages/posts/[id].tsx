import React from 'react';

export async function getStaticPaths() {
  const allPostsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const allPosts = await allPostsRes.json();
  return {
    paths: allPosts.map((item) => {
      return {
        params: {
          id: item.id.toString()
        }
      };
    }),
    fallback: false
  };
}

export async function getStaticProps(context) {
  const postsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const postData = await postsRes.json();
  return {
    props: {
      post: postData,
      postId: context.params.id
    }
  };
}

export default function PostDetail({ post, postId }) {
  return (
    <>
      <div>Post id - {postId}</div>
      <h1>{post?.title}</h1>
      <article>{post?.body}</article>
    </>
  );
}
