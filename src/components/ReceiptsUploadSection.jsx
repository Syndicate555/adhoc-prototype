import React, { useState } from 'react';
import ReceiptCard from './ReceiptCard';
import { FaChevronDown, FaChevronUp, FaTrashAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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

	return (
		<div className="my-8">
			<div className="flex flex-wrap items-center gap-4 mb-4">
				<h2 className="text-white text-2xl sm:text-3xl font-semibold whitespace-nowrap">
					You are uploading {receipts.length} receipts
				</h2>
				<div className="flex items-center gap-4">
					{!uploadFinalized && (
						<button
							onClick={clearSelection}
							className="text-white bg-red-600 hover:bg-red-700 p-2 rounded-full focus:outline-none transition-colors duration-200"
							aria-label="Clear all receipts"
							title="Clear all receipts"
						>
							<FaTrashAlt />
						</button>
					)}

					<button
						onClick={toggleExpand}
						className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors duration-200 focus:outline-none"
						aria-label={isExpanded ? 'Collapse receipts' : 'Expand receipts'}
						title={isExpanded ? 'Collapse' : 'Expand'}
					>
						{isExpanded ? <FaChevronUp /> : <FaChevronDown />}
					</button>
				</div>
			</div>

			<AnimatePresence
				onExitComplete={() => {
					if (isClearing) {
						clearSelection();
						setIsClearing(false);
					}
				}}
			>
				{isExpanded && (
					<motion.div
						key="drawer"
						className="rounded-xl shadow-lg overflow-hidden"
						style={{ backgroundColor: '#2a3f58', originY: 0 }}
						initial={{ scaleY: 0, opacity: 0 }}
						animate={{
							scaleY: isClearing ? 0 : 1,
							opacity: isClearing ? 0 : 1,
							transition: { duration: 0.3, ease: 'easeOut' },
						}}
						exit={{
							scaleY: 0,
							opacity: 0,
							transition: { duration: 0.3, ease: 'easeIn' },
						}}
					>
						{/* The container of receipts has layout for smooth position changes */}
						<motion.div className="flex overflow-x-auto space-x-4 p-4" layout>
							<AnimatePresence>
								{receipts.map((receipt, index) => (
									<motion.div
										key={
											receipt.receiptId ||
											receipt.file?.name ||
											`receipt-${index}`
										}
										layout
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{
											opacity: 1,
											scale: 1,
											transition: { duration: 0.2 },
										}}
										exit={{
											opacity: 0,
											scale: 0.5,
											rotate: -10,
											transition: { duration: 0.3, ease: 'easeInOut' },
										}}
									>
										<ReceiptCard
											receipt={receipt}
											index={index}
											handleRemoveReceipt={handleRemoveReceipt}
											uploadFinalized={uploadFinalized}
											getProgressPercentage={getProgressPercentage}
										/>
									</motion.div>
								))}
							</AnimatePresence>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ReceiptsUploadSection;
