import React from 'react';
import dynamic from "next/dynamic";

const Nav = dynamic(
  () => import('postDetail/nav'),
  {
    ssr: false
  }
);

const PostView = dynamic(
  () => import('postDetail/postView'),
  {
    ssr: false
  }
);

export async function getStaticPaths() {
  const allPostsRes = await fetch(`${process.env.API_URL}/posts`);
  const allPosts = await allPostsRes.json();
  return {
    paths: allPosts.map((item: any) => {
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
  const postsRes = await fetch(`${process.env.API_URL}/posts/${context.params.id}`);
  const postData = await postsRes.json();
  return {
    props: {
      post: postData,
      postId: context.params.id
    }
  };
}

export default function PostDetail(props: any) {
  return (
    <>
      <Nav />
      <PostView data={props.post} postId={props.postId} {...props} />
    </>
  );
}
