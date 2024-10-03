
import React from "react";
import usePosts from "../../hooks/usePosts";
import PostItem from "./PostItem";

// Reuse the Post type from the PostItem file
interface User {
  id: string;
  name: string;
  username: string;
}

interface Post {
  id: string;
  body: string;
  createdAt: string;
  user: User;
  comments?: Array<any>;
  likedIds?: Array<any>;
}

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  // Explicitly type posts as an array of Post objects, or an empty array by default
  const { data: posts = [] } = usePosts(userId);

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      {posts.map((post: Post) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PostFeed;
