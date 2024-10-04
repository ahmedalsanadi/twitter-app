//components/Form.tsx
import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import usePosts from '@/hooks/usePosts';
import usePost from '@/hooks/usePost';
import useRegisterModal from '@/hooks/useRegisterModal';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from './Button';
import Avatar from './Avatar';

interface FormProps {
	placeholder: string;
	isComment?: boolean;
	postId?: string;
}
const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
	// Hook to open the register modal
	const registerModal = useRegisterModal();

	const loginModal = useLoginModal();
	const { data: currentUser } = useCurrentUser();
	
	const { mutate: mutatePosts } = usePosts(); // Fetch all posts
	const { mutate: mutatePost } = usePost(postId as string); // Fetch the specific post

	const [body, setBody] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			// URL for the comment or post to be created
			const url = isComment
				? `/api/comments?postId=${postId}`
				: '/api/posts';

			const currentId = currentUser.id;

			// Post the ( post or comment )
			await axios.post(url, { body, userId: currentId });
			toast.success('Tweet created');
			setBody(''); // Reset the comment body

			mutatePosts(); // Refetch the post
			mutatePost(); //refresh single post

		} catch (error) {
			console.log(' hahaha', error);
			toast.error(`Something went wrong`);
		} finally {
			setIsLoading(false);
		}
	}, [body, mutatePost, mutatePosts, isComment, postId, currentUser?.id]);

	return (
		<div className="border-b-[1px] border-neutral-800 px-5 py-2">
			{/* If the user is logged in, show the form */}
			{currentUser ? (
				<div className="flex flex-row gap-4">
					<div className="">
						<Avatar userId={currentUser?.id} />
					</div>
					<div className="w-full">
						{/* Text area for the comment */}
						<textarea
							// Disable the textarea if the form is loading
							disabled={isLoading}
							value={body}
							placeholder={placeholder}
							onChange={(e) => setBody(e.target.value)}
							className="disabled:opacity-80 peer resize-none mt-3 w-full bg-black ring-0 outline-none text-[20px] placeholder-neutral-500 text-white"></textarea>
						<hr className="opacity-0 peer-focus:opacity-100 h-[1px] border-neutral-800 transition"></hr>

						{/* Button to submit the comment */}
						<div className="mt-4 flex flex-row justify-end">
							<Button
								disabled={isLoading || !body} // Disable the button if the form is loading or the body is empty
								onClick={onSubmit}
								label="Tweet"
							/>
						</div>
					</div>
				</div>
			) : (
				// If the user is not logged in, show a login / register message
				<div className="py-8">
					<h1 className="text-white text-2xl text-center mb-4 font-bold">
						Welcome to Twitter
					</h1>
					<div className="flex flex-row items-center justify-center gap-4">
						<Button label="Login" onClick={loginModal.onOpen} />
						<Button
							secondary
							label="Register"
							onClick={registerModal.onOpen}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Form;
