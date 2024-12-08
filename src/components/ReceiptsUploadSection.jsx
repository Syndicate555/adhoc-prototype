import React, { useState } from 'react';
import ReceiptCard from './ReceiptCard';
import { FaChevronDown, FaChevronUp, FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ReceiptsUploadSection = ({
	receipts,
	handleRemoveReceipt,
	uploadFinalized,
	getProgressPercentage,
	clearSelection,
}) => {
	const [isExpanded, setIsExpanded] = useState(true);
	const [isClearing, setIsClearing] = useState(false);

	const toggleExpand = () => setIsExpanded(!isExpanded);

	const handleClear = () => {
		// Start the clearing animation
		setIsClearing(true);
	};

	// Animation variants for the receipt container
	const containerVariants = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
		hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
	};

	return (
		<div className="my-8">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center space-x-4">
					<h2 className="text-white text-2xl sm:text-3xl font-semibold">
						You are uploading {receipts.length} receipts
					</h2>
					<button
						onClick={handleClear}
						className="text-white bg-red-600 hover:bg-red-700 p-2 rounded-full focus:outline-none transition-colors duration-200"
						aria-label="Clear all receipts"
						title="Clear all receipts"
					>
						<FaTrashAlt />
					</button>
				</div>
				<button
					onClick={toggleExpand}
					className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors duration-200 focus:outline-none"
					aria-label={isExpanded ? 'Collapse receipts' : 'Expand receipts'}
					title={isExpanded ? 'Collapse' : 'Expand'}
				>
					{isExpanded ? <FaChevronUp /> : <FaChevronDown />}
				</button>
			</div>

			{isExpanded && (
				<motion.div
					className="flex overflow-x-auto space-x-4 p-4 rounded-xl shadow-lg"
					style={{ backgroundColor: '#2a3f58' }}
					variants={containerVariants}
					initial="visible"
					animate={isClearing ? 'hidden' : 'visible'}
					onAnimationComplete={() => {
						if (isClearing) {
							clearSelection();
							setIsClearing(false);
						}
					}}
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
				</motion.div>
			)}
		</div>
	);
};

export default ReceiptsUploadSection;
