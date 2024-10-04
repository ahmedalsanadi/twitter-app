import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNowStrict } from 'date-fns';
import Avatar from '../Avatar';

/**
 * CommentItem:
 * Displays an individual comment in a comment feed, showing the comment's content,
 * the user who posted it, and the time since creation. Users can click on the
 * commenter's name or username to visit their profile.
 *
 * Props:
 * - data: An object with the comment's body, creation date, and user info
 *   (id, name, username).
 *
 * Usage:
 * - Typically used within the ./CommentFeed.tsx component.
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

interface CommentItemProps {
	data: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
	const router = useRouter();

	const goToUser = useCallback(
		(event: React.MouseEvent<HTMLParagraphElement>) => {
			event.stopPropagation();
			router.push(`/users/${data.user.id}`);
		},
		[router, data.user.id],
	);

	const createdAt = useMemo(() => {
		if (!data?.createdAt) {
			return null;
		}
		return formatDistanceToNowStrict(new Date(data.createdAt));
	}, [data.createdAt]);

	return (
		<div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition">
			<div className="flex flex-row items-start gap-3">
				<Avatar userId={data.user.id} />
				<div>
					<div className="flex flex-row items-center gap-2">
						<p
							onClick={goToUser}
							className="text-white font-semibold cursor-pointer hover:underline">
							{data.user.name}
						</p>
						<span
							onClick={goToUser}
							className="text-neutral-500 cursor-pointer hover:underline hidden md:block">
							@{data.user.username}
						</span>
						<span className="text-neutral-500 text-sm">
							{createdAt}
						</span>
					</div>
					<div className="text-white mt-1">{data.body}</div>
				</div>
			</div>
		</div>
	);
};
export default CommentItem;