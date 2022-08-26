import React, {useState} from 'react';

const Post = () => {
  const [] = useState(false);

  return (
    <div className="post">
      <div className="post__header">
        Post Header
      </div>
      <div className="post__body">
        Post Body
      </div>
    </div>
  );
};

export default Post;
