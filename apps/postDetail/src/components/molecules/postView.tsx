import React from 'react';

interface PostData {
  postId?: any;
  data?: any;
}

const PostView: React.FC<PostData> = ({postId, data}): JSX.Element => {
  return (
    <div data-testid="PostView" className="micro-app">
      <div>Post id - {postId}</div>
      <h1>{data?.title || 'Anonymous heading'}</h1>
      <article>{data?.body || 'N/A'}</article>
    </div>
  )
}

export default PostView;
