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

	const [localImageURL, setLocalImageURL] = useState('');

	// Create the object URL once the receipt is mounted
	useEffect(() => {
		let objectURL;
		if (receipt.isPreset && receipt.presetData?.imageUrl) {
			// Preset receipt: just use the given URL
			setLocalImageURL(receipt.presetData.imageUrl);
			setIsImageLoading(false);
		} else if (receipt.file) {
			// User-uploaded file: create an object URL
			objectURL = URL.createObjectURL(receipt.file);
			setLocalImageURL(objectURL);
			setIsImageLoading(false);
		} else {
			// No image case
			setLocalImageURL('');
			setIsImageLoading(false);
		}

		return () => {
			// Cleanup object URL if created
			if (objectURL) {
				URL.revokeObjectURL(objectURL);
			}
		};
	}, [receipt.isPreset, receipt.presetData, receipt.file]);

	const handleCardClick = () => {
		setIsModalOpen(true);
		setIsImageLoading(true); // For modal loading indicator
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

	const showRemoveButton = !uploadFinalized;

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
				{showRemoveButton && (
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
				<div className="w-full h-32 mb-4 overflow-hidden rounded-xl flex justify-center items-center bg-neutral-700">
					{localImageURL ? (
						<img
							src={localImageURL}
							alt={`Receipt ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					) : (
						<div className="text-gray-400 text-sm">No Image</div>
					)}
				</div>
				<div className="text-center text-xs text-neutral-300 mb-4 truncate px-2">
					{receipt.file?.name || receipt.presetData?.id || 'Unknown Receipt'}
				</div>
				<div className="w-16 h-16 mx-auto flex justify-center items-center">
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

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				className="receipt-modal max-w-2xl mx-auto bg-neutral-800 rounded-xl shadow-2xl outline-none overflow-hidden"
				overlayClassName="receipt-overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
				contentLabel={`Receipt ${index + 1}`}
			>
				<div
					ref={modalContentRef}
					className="relative flex flex-col items-center w-full overflow-auto"
					style={{
						maxHeight: '90vh',
					}}
				>
					<button
						className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors z-50"
						onClick={closeModal}
					>
						<FaTimes size={20} />
					</button>

					{isImageLoading && (
						<div className="flex justify-center items-center h-16 w-16 mb-4">
							<div className="loader"></div>
						</div>
					)}

					{localImageURL && (
						<div
							className={`flex justify-center items-center ${
								isImageLoading ? 'hidden' : ''
							}`}
							style={{
								width: '100%',
								overflow: zoomLevel > 1 ? 'scroll' : 'hidden',
							}}
						>
							<img
								src={localImageURL}
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
					)}
				</div>
				{!isImageLoading && receipt.file && (
					<div className="text-center text-sm text-neutral-300 truncate px-4 mt-2 mb-4">
						File: {receipt.file.name}
					</div>
				)}
			</Modal>
		</>
	);
};

export default React.memo(ReceiptCard);
