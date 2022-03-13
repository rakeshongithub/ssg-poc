import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  console.log(router.query.id);

  useEffect(() => {
    const getPosts = async () => {
      const postsRes = await fetch(`http://localhost:5002/posts/${router.query.id}`);
      const postData = await postsRes.json();
      setPost(postData);
    };
    getPosts();
  }, [router.query.id]);

  return (
    <>
      <div>Post id - {router.query.id}</div>
      <h1>{post?.title}</h1>
      <article>{post?.body}</article>
    </>
  );
}
