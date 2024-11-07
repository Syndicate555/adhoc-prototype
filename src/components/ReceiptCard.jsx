import React from 'react';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const ReceiptCard = ({
	receipt,
	index,
	handleRemoveReceipt,
	uploadFinalized,
	getProgressPercentage,
}) => {
	return (
		<div className="bg-white p-5 rounded-2xl shadow-lg relative transform hover:scale-105 transition-transform">
			{!uploadFinalized && (
				<button
					onClick={() => handleRemoveReceipt(index)}
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
			<div className="flex items-center space-x-2 mb-4"></div>
			<div className="w-20 h-20 mx-auto">
				{receipt.status === 'COMPLETED' ? (
					<FaCheckCircle className="text-green-500 w-full h-full" />
				) : (
					<CircularProgressbar
						value={getProgressPercentage(receipt.status)}
						text={`${getProgressPercentage(receipt.status)}%`}
						styles={buildStyles({
							pathColor: receipt.status === 'COMPLETED' ? '#22c55e' : '#3b82f6',
							textColor: '#000',
							trailColor: '#d1d5db',
							textSize: '16px',
						})}
					/>
				)}
			</div>
		</div>
	);
};

export default ReceiptCard;
