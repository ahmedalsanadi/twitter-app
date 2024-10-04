import React from 'react';
import CommentItem from './CommentItem';

/**
 * CommentFeed component
 *
 * This component renders a list of comments associated with a specific post.
 * It receives an array of comments and maps over it to render a CommentItem
 * for each individual comment. Each CommentItem displays the comment text,
 * the user who made the comment, and the date it was created.
 *
 * Props:
 * - comments (Optional): An array of comments, where each comment includes
 *   details like the comment text, user information, and creation date.
 *
 * Usage:
 * This component is typically used in the post detail page (e.g., pages/post/[postId].tsx)
 * to display user interactions and feedback on a given post.
 */

interface User {
	id: string;
	name: string;
	username: string;
}

interface Comment {
	id: string;
	body: string;
	createdAt: string;
	user: User;
}

interface CommentFeedProps {
	comments?: Comment[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
	return (
		<div className="border-b-[1px] border-neutral-800 px-5 py-2">
			{comments.map((comment) => (
				<CommentItem key={comment.id} data={comment} />
			))}
		</div>
	);
};

export default CommentFeed;
