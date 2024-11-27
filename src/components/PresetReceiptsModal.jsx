import React, { useState, useCallback, useMemo } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { presetReceipts, categories } from '../constants';
import LazyLoad from 'react-lazyload';

const ReceiptItem = React.memo(({ receipt, isSelected, onToggle }) => {
	const optimizedImageUrl = useMemo(
		() =>
			receipt.imageUrl.replace(
				'/upload/',
				'/upload/w_200,h_300,c_fill,q_auto,f_auto/'
			),
		[receipt.imageUrl]
	);

	return (
		<div
			className={`relative border rounded-lg overflow-hidden cursor-pointer ${
				isSelected ? 'border-blue-500' : 'border-gray-700'
			}`}
			onClick={() => onToggle(receipt)}
		>
			<LazyLoad height={200} offset={100}>
				<img
					src={optimizedImageUrl}
					alt={`Receipt ${receipt.id}`}
					className="w-full h-40 object-cover"
				/>
			</LazyLoad>
			{isSelected && (
				<div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center">
					<FaCheckCircle className="text-white text-4xl" />
				</div>
			)}
			<div className="p-2">
				<p className="text-sm text-gray-300">
					Categories: {receipt.categories.join(', ')}
				</p>
			</div>
		</div>
	);
});

const PresetReceiptsModal = ({ isOpen, onClose, handlePresetSelection }) => {
	// Hook calls must be at the top level
	const [selectedReceipts, setSelectedReceipts] = useState([]);
	const [activeCategory, setActiveCategory] = useState('all');

	const toggleReceiptSelection = useCallback(
		(receipt) => {
			setSelectedReceipts((prevSelected) =>
				prevSelected.includes(receipt)
					? prevSelected.filter((r) => r !== receipt)
					: [...prevSelected, receipt]
			);
		},
		[setSelectedReceipts]
	);

	const handleCategoryChange = useCallback((categoryValue) => {
		setActiveCategory(categoryValue);
	}, []);

	const filteredReceipts = useMemo(() => {
		if (activeCategory === 'all') return presetReceipts;
		return presetReceipts.filter((receipt) =>
			receipt.categories.some(
				(category) => category.toLowerCase() === activeCategory.toLowerCase()
			)
		);
	}, [activeCategory]);

	const handleAddReceipts = useCallback(async () => {
		try {
			const updatedReceipts = await Promise.all(
				selectedReceipts.map(async (receipt) => {
					try {
						const response = await fetch(receipt.imageUrl, { mode: 'cors' });
						if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						const blob = await response.blob();
						const mimeType = blob.type;
						const extension = mimeType.split('/')[1];

						const file = new File([blob], `${receipt.id}.${extension}`, {
							type: mimeType,
						});
						return {
							...receipt,
							imageFile: file,
						};
					} catch (error) {
						console.error(
							`Error fetching image for receipt ${receipt.id}:`,
							error
						);
						return null;
					}
				})
			);

			const validReceipts = updatedReceipts.filter(
				(receipt) => receipt !== null
			);

			if (validReceipts.length === 0) {
				alert('Failed to add any receipts. Please try again.');
				return;
			}

			handlePresetSelection(validReceipts);
			onClose();
		} catch (error) {
			console.error('Error in handleAddReceipts:', error);
		}
	}, [selectedReceipts, handlePresetSelection, onClose]);

	// Move the early return after all Hooks
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div
				className="relative bg-gray-900 w-full max-w-4xl rounded-lg text-white mx-2 sm:mx-4 flex flex-col"
				style={{ maxHeight: '90vh' }}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 sm:right-6 text-gray-400 hover:text-gray-200 font-bold text-2xl sm:text-3xl focus:outline-none"
				>
					&times;
				</button>
				<br />
				<br />
				{/* Header */}
				<div className="mb-4 px-4 sm:px-6 pt-6 flex-shrink-0 text-center">
					<h2 className="text-2xl sm:text-3xl font-bold mb-2">
						Select Preset Receipts
					</h2>
					<p className="text-base sm:text-lg text-gray-300">
						Don't have your own receipts to upload? No worries! Try out Platen
						by selecting receipts from our library that contains a vast array of
						receipts from real-world transactions.
					</p>
				</div>

				{/* Category Tabs */}
				<div className="mb-4 px-4 sm:px-6 flex-shrink-0">
					<div className="flex flex-wrap justify-center space-x-2">
						{categories.map((category) => (
							<button
								key={category.value}
								onClick={() => handleCategoryChange(category.value)}
								className={`flex items-center px-3 py-2 m-1 rounded-lg focus:outline-none ${
									activeCategory === category.value
										? 'bg-blue-600 text-white'
										: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
								}`}
							>
								{category.icon}
								<span className="ml-2">{category.name}</span>
							</button>
						))}
					</div>
				</div>

				{/* Scrollable Content */}
				<div
					className="overflow-y-auto px-4 sm:px-6"
					style={{ maxHeight: 'calc(90vh - 250px)' }}
				>
					{/* Receipt Thumbnails */}
					{filteredReceipts.length > 0 ? (
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
							{filteredReceipts.map((receipt) => (
								<ReceiptItem
									key={receipt.id}
									receipt={receipt}
									isSelected={selectedReceipts.includes(receipt)}
									onToggle={toggleReceiptSelection}
								/>
							))}
						</div>
					) : (
						<div className="col-span-full text-center text-gray-400 py-10">
							No receipts found for this category.
						</div>
					)}
				</div>

				{/* Action Buttons */}
				<div className="mt-4 px-4 sm:px-6 py-4 flex justify-end space-x-4 flex-shrink-0">
					<button
						onClick={onClose}
						className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
					>
						Cancel
					</button>
					<button
						onClick={handleAddReceipts}
						className={`px-4 py-2 rounded-md focus:outline-none ${
							selectedReceipts.length === 0
								? 'bg-blue-300 cursor-not-allowed'
								: 'bg-blue-500 hover:bg-blue-600 text-white'
						}`}
						disabled={selectedReceipts.length === 0}
					>
						Add Selected Receipts
					</button>
				</div>
			</div>
		</div>
	);
};

export default PresetReceiptsModal;
