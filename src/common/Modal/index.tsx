import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames } from "../../utils";

const Modal = ({
	children,
	show,
	setShow,
}: {
	children: ReactNode;
	show: boolean;
	setShow: () => void;
}) => {
	return (
		<Transition appear show={show} as={Fragment}>
			<div
				className={classNames(
					"fixed inset-0 flex justify-center items-center z-50 px-4 py-4 overflow-auto max-w-[100vw]"
				)}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div
						onClick={setShow}
						className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
					/>
				</Transition.Child>

				<div className="flex min-h-full items-center justify-center text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						{children}
					</Transition.Child>
				</div>
			</div>
		</Transition>
	);
};

export default Modal;
