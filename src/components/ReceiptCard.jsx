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
	const [zoomLevel, setZoomLevel] = useState(1);
	const [isImageLoading, setIsImageLoading] = useState(true);

	const handleCardClick = () => {
		setIsModalOpen(true);
		setIsImageLoading(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setZoomLevel(1);
	};

	const handleImageClick = () => {
		setZoomLevel((prevZoom) => (prevZoom === 1 ? 2 : 1));
	};

	const handleImageLoad = () => {
		setIsImageLoading(false);
	};

	return (
		<>
			<div
				className="bg-neutral-800 p-5 rounded-xl shadow-lg relative transform hover:scale-105 transition-transform cursor-pointer mx-2 min-w-[200px] max-w-[220px] border border-neutral-700"
				onClick={handleCardClick}
				style={{
					backgroundColor: '#1f2937',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
				}}
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
								pathColor: '#00bcd4',
								textColor: '#ffffff',
								trailColor: '#374151',
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
						className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors z-50"
						onClick={closeModal}
					>
						<FaTimes size={20} />
					</button>

					{/* Loader */}
					{isImageLoading && (
						<div className="w-full bg-gray-700 rounded-full h-2 mt-6 mb-6 overflow-hidden">
							<div
								className="bg-blue-500 h-full animate-loading-bar"
								style={{ width: '100%' }}
							></div>
						</div>
					)}

					{/* Image */}
					<div
						className={`w-full max-w-2xl max-h-[80vh] overflow-auto flex justify-center items-center ${
							isImageLoading ? 'hidden' : ''
						}`}
						style={{
							cursor: 'zoom-in',
						}}
						onClick={handleImageClick}
					>
						<img
							src={URL.createObjectURL(receipt.file)}
							alt={`Receipt ${index + 1}`}
							className="rounded-lg shadow-md transition-transform duration-300"
							style={{
								transform: `scale(${zoomLevel})`, // Apply zoom level
								objectFit: 'contain',
								cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in',
							}}
							onLoad={handleImageLoad}
						/>
					</div>

					{/* File Name */}
					{!isImageLoading && (
						<div className="text-center text-sm text-neutral-300 truncate px-4 mt-4">
							File: {receipt.file.name}
						</div>
					)}
				</div>
			</Modal>
		</>
	);
};

export default ReceiptCard;
