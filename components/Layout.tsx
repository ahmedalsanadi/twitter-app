import Sidebar from './layout/Sidebar';
import FollowBar from './layout/FollowBar';
import { useState } from 'react';
interface LayoutProp {
	children: React.ReactNode;
}

const FollowBarToggle = ({ onClick }: { onClick: () => void }) => (
	<button
		onClick={onClick}
		className="fixed bottom-20 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg z-50 sm:bottom-4 lg:hidden">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	</button>
);

const Layout: React.FC<LayoutProp> = ({ children }) => {
	const [showFollowBar, setShowFollowBar] = useState(false);
	return (
		<div className="h-screen bg-black">
			<div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
				<div className="flex h-full">
					{/* Sidebar */}
					<Sidebar />
					{/* Main content : (Header , PostFeed )*/}
					<main className="flex-grow border-x border-neutral-800 min-h-0">
						{children}
					</main>

					{/* Follow bar */}
					<div
						className={`w-64 lg:w-80 fixed top-0 right-0 h-full bg-black transform transition-transform duration-300 ease-in-out ${
							showFollowBar ? 'translate-x-0' : 'translate-x-full'
						} lg:relative lg:translate-x-0`}>
						<FollowBar />
					</div>
				</div>
				<FollowBarToggle
					onClick={() => setShowFollowBar(!showFollowBar)}
				/>
			</div>
		</div>
	);
};
export default Layout;
