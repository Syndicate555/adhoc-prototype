import React, { useState } from 'react';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
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
				className="bg-white p-5 rounded-2xl shadow-lg relative transform hover:scale-105 transition-transform cursor-pointer"
				onClick={handleCardClick}
			>
				{!uploadFinalized && (
					<button
						onClick={(e) => {
							e.stopPropagation(); // Prevent modal opening when deleting
							handleRemoveReceipt(index);
						}}
						className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform"
					>
						<FaTrashAlt />
					</button>
				)}
				<div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
					<img
						src={URL.createObjectURL(receipt.file)}
						alt={`Receipt ${index + 1}`}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="w-20 h-20 mx-auto">
					{receipt.status === 'COMPLETED' ? (
						<FaCheckCircle className="text-green-500 w-full h-full" />
					) : (
						<CircularProgressbar
							value={getProgressPercentage(receipt.status)}
							text={`${getProgressPercentage(receipt.status)}%`}
							styles={buildStyles({
								pathColor:
									receipt.status === 'COMPLETED' ? '#22c55e' : '#3b82f6',
								textColor: '#000',
								trailColor: '#d1d5db',
								textSize: '16px',
							})}
						/>
					)}
				</div>
			</div>

			{/* Modal for full-screen receipt view */}
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				className="receipt-modal"
				overlayClassName="receipt-overlay"
				contentLabel={`Receipt ${index + 1}`}
			>
				<div className="modal-content">
					<button className="close-button" onClick={closeModal}>
						Close
					</button>
					<img
						src={URL.createObjectURL(receipt.file)}
						alt={`Receipt ${index + 1}`}
						className="modal-image"
					/>
				</div>
			</Modal>
		</>
	);
};

export default ReceiptCard;
