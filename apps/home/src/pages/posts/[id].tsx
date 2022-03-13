import React from 'react';

export async function getServerSideProps(context) {
  const postsRes = await fetch(`http://localhost:5002/posts/${context.query.id}`);
  const postData = await postsRes.json();
  return {
    props: {
      post: postData,
      postId: context.query.id
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
