import React, { useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';
interface ModalProp {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
}

const Modal: React.FC<ModalProp> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
}) => {
	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		onClose();
	}, [onClose, disabled]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}
		onSubmit();
	}, [onSubmit, disabled]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div
				className="
                    justify-center
                    items-center
                    flex
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    bg-neutral-800
                    bg-opacity-70
                ">
				<div
					className="
                        relative
                        w-full
                        lg:w-3/6
                        my-6
                        mx-auto
                       lg:max-w-3xl
                       h-full
                       lg:h-auto
              
                    ">
					{/* CONTENT */}

					<div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
						{/* HEADER */}
						<div className=" flex item-center justify-between p-10 rounded-t ">
							<h3 className="text-3xl font-semibold text-white">
								{title}
							</h3>
							<button
								onClick={handleClose}
								className="
                                    p-1
                                    ml-auto
                                    border-0
                                    text-white
                                    hover:opacity-70
                                    transition
                                ">
								<AiOutlineClose size={18} />
							</button>
						</div>
						{/* BODY */}
						<div className="relative p-10 flex-auto">{body}</div>
						{/* FOOTER */}
						<div className="flex flex-col gap-2 p-10">
							<Button
								disabled={disabled}
								label={actionLabel}
								secondary
								fullWidth
								large
								onClick={handleSubmit}
							/>
							<div
								className="
                                    flex
                                    flex-row
                                    items-center
                                    gap-4
                                    w-full
                                ">
								{footer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
