import React from "react";

import ShowComment from "./ShowComment";

const CommentsList = (props) => {
  console.log("[CommentsLists]" + props.data);
  const lists = props.data.map((comment) => (
    <ShowComment
      key={comment.id}
      text={comment.comment}
      user={comment.username}
      score={comment.score}
    />
  ));

  return { lists };
};

export default CommentsList;
