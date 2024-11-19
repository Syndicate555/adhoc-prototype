import React, { useState } from 'react';
import ReceiptCard from './ReceiptCard';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ReceiptsUploadSection = ({
	receipts,
	handleRemoveReceipt,
	uploadFinalized,
	getProgressPercentage,
}) => {
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="w-full my-8 px-4">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-semibold text-white">
					{isExpanded
						? `You are uploading ${receipts.length} receipts`
						: `Uploaded Receipts (${receipts.length})`}
				</h2>
				<button
					onClick={toggleExpand}
					className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
				>
					{isExpanded ? <FaChevronUp /> : <FaChevronDown />}
				</button>
			</div>
			{isExpanded && (
				<div
					className="flex overflow-x-auto space-x-4 p-4 bg-neutral-800 rounded-xl shadow-lg"
					style={{ backgroundColor: '#2a3f58' }}
				>
					{receipts.map((receipt, index) => (
						<ReceiptCard
							key={index}
							receipt={receipt}
							index={index}
							handleRemoveReceipt={handleRemoveReceipt}
							uploadFinalized={uploadFinalized}
							getProgressPercentage={getProgressPercentage}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ReceiptsUploadSection;
