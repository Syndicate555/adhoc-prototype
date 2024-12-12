import React, { useState, useRef, useEffect } from 'react';
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
	allArePresetReceipts,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [zoomLevel, setZoomLevel] = useState(1);
	const [isImageLoading, setIsImageLoading] = useState(true);
	const modalContentRef = useRef(null);

	const handleCardClick = () => {
		setIsModalOpen(true);
		setIsImageLoading(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setZoomLevel(1); // Reset zoom level
	};

	const handleImageClick = (e) => {
		setZoomLevel((prevZoom) => (prevZoom === 1 ? 2 : 1));

		if (zoomLevel === 1 && modalContentRef.current) {
			const rect = modalContentRef.current.getBoundingClientRect();
			const scrollX =
				e.clientX - rect.left + modalContentRef.current.scrollLeft;
			const scrollY = e.clientY - rect.top + modalContentRef.current.scrollTop;

			modalContentRef.current.scrollTo({
				left: scrollX - rect.width / 2,
				top: scrollY - rect.height / 2,
				behavior: 'smooth',
			});
		}
	};

	const handleImageLoad = () => {
		setIsImageLoading(false);
	};

	useEffect(() => {
		if (isModalOpen && modalContentRef.current) {
			modalContentRef.current.scrollTop = 0;
		}
	}, [isModalOpen]);
	const imageSource = receipt.file
		? URL.createObjectURL(receipt.file)
		: receipt.presetData?.imageUrl;
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
						src={imageSource}
						alt={`Receipt ${index + 1}`}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="text-center text-xs text-neutral-300 mb-4 truncate px-2">
					{receipt.file?.name || receipt.presetData?.id}
				</div>
				<div className="w-16 h-16 mx-auto">
					{receipt.status === 'COMPLETED' || allArePresetReceipts() ? (
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
				className="receipt-modal max-w-2xl mx-auto bg-neutral-800 rounded-xl shadow-2xl outline-none overflow-hidden"
				overlayClassName="receipt-overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
				contentLabel={`Receipt ${index + 1}`}
			>
				{/* Modal Content */}
				<div
					ref={modalContentRef}
					className="relative flex flex-col items-center w-full overflow-auto"
					style={{
						maxHeight: '90vh',
					}}
				>
					{/* Close Button */}
					<button
						className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors z-50"
						onClick={closeModal}
					>
						<FaTimes size={20} />
					</button>

					{/* Loader */}
					{isImageLoading && (
						<div className="flex justify-center items-center h-16 w-16 mb-4">
							<div className="loader"></div>
						</div>
					)}

					{/* Image */}
					<div
						className={`flex justify-center items-center ${
							isImageLoading ? 'hidden' : ''
						}`}
						style={{
							width: '100%',
						}}
					>
						<img
							src={URL.createObjectURL(receipt.file)}
							alt={`Receipt ${index + 1}`}
							className="rounded-lg shadow-md transition-transform duration-300"
							style={{
								transform: `scale(${zoomLevel})`,
								objectFit: 'contain',
								cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in',
								maxWidth: '100%',
								maxHeight: '100%',
							}}
							onClick={handleImageClick}
							onLoad={handleImageLoad}
						/>
					</div>
				</div>

				{/* Fixed Filename */}
				{!isImageLoading && (
					<div className="text-center text-sm text-neutral-300 truncate px-4 mt-2 mb-4">
						File: {receipt.file.name}
					</div>
				)}
			</Modal>
		</>
	);
};

export default ReceiptCard;
