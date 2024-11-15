import React, { useState } from 'react';
import { FaTrashAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Modal from 'react-modal';
import 'react-circular-progressbar/dist/styles.css';

const ReceiptCard = ({
	receipt,
	index,
	handleRemoveReceipt,
	uploadFinalized,
	getProgressPercentage,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCardClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div
				className="bg-neutral-800 p-5 rounded-xl shadow-lg relative transform hover:scale-105 transition-transform cursor-pointer mx-2 min-w-[200px] max-w-[220px] border border-neutral-700"
				onClick={handleCardClick}
			>
				{!uploadFinalized && (
					<button
						onClick={(e) => {
							e.stopPropagation();
							handleRemoveReceipt(index);
						}}
						className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform"
					>
						<FaTrashAlt />
					</button>
				)}
				<div className="w-full h-32 mb-4 overflow-hidden rounded-xl">
					<img
						src={URL.createObjectURL(receipt.file)}
						alt={`Receipt ${index + 1}`}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="text-center text-xs text-neutral-300 mb-4 truncate px-2">
					{receipt.file.name}
				</div>
				<div className="w-16 h-16 mx-auto">
					{receipt.status === 'COMPLETED' ? (
						<FaCheckCircle className="text-green-400 w-full h-full" />
					) : (
						<CircularProgressbar
							value={getProgressPercentage(receipt.status)}
							text={`${getProgressPercentage(receipt.status)}%`}
							styles={buildStyles({
								pathColor: '#00bcd4', // Bright color for better contrast
								textColor: '#ffffff', // Ensures text is easily visible
								trailColor: '#374151', // Matches dark theme without blending in
								textSize: '16px',
								strokeLinecap: 'round',
							})}
						/>
					)}
				</div>
			</div>

			{/* Modal for full-screen receipt view */}
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				className="receipt-modal max-w-2xl mx-auto my-10 p-5 bg-neutral-800 rounded-xl shadow-2xl outline-none"
				overlayClassName="receipt-overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
				contentLabel={`Receipt ${index + 1}`}
			>
				<div className="relative flex flex-col items-center">
					{/* Close Button */}
					<button
						className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors"
						onClick={closeModal}
					>
						<FaTimes size={20} />
					</button>

					{/* Image */}
					<div className="w-full max-w-md mb-6">
						<img
							src={URL.createObjectURL(receipt.file)}
							alt={`Receipt ${index + 1}`}
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>

					{/* File Name */}
					<div className="text-center text-sm text-neutral-300 truncate px-4">
						File: {receipt.file.name}
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ReceiptCard;
