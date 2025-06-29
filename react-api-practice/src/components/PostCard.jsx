import React from "react";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
    </div>
  );
};

export default PostCard;
