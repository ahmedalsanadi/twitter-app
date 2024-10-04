//components/NotificationsFeed.tsx
import React, { useEffect } from 'react';

// React Icons
import { BsTwitter } from 'react-icons/bs';

// Hooks
import useCurrentUser from '../hooks/useCurrentUser';
import useNotifications from '../hooks/useNotifications';
type Notification = {
	id: string;
	body: string;
	userId: string;
	createdAt: string;
};

const NotificationsFeed = () => {
	
	// get the current user from the session
	const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

	// fetch the notifications for the current user
	const { data: fetchedNotifications = [] } = useNotifications(
		currentUser?.id,
	);

	// if the user is not logged in, fetchedNotifications will be an empty array.
	useEffect(() => {
		mutateCurrentUser();
	}, [mutateCurrentUser]);

	//if the data array (fetchedNotifications) is empty, return a message "No notifications"
	if (fetchedNotifications.length === 0) {
		return (
			<div className="text-neutral-600 text-center p-6 text-xl">
				No notifications
			</div>
		);
	}
	return (
		<div className="flex flex-col">
			{fetchedNotifications.map((notification: Notification) => (
				<div
					key={notification.id}
					className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800">
					<BsTwitter color="white" size={32} />
					<p className="text-white">{notification.body}</p>
				</div>
			))}
		</div>
	);
};

export default NotificationsFeed;
