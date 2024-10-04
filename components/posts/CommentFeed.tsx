import CommentItem from "./CommentItem";
import React from "react";

interface CommentFeedProps {
  comments?: Record<string,any>[];
}
const CommentFeed: React.FC<CommentFeedProps> = ({ comments = []}) => {
  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
    {comments.map((comment: Record<string,any>)=> (
        <CommentItem key={comment.id} data={comment} />
    ))}
    </div>
  );
};

export default CommentFeed;