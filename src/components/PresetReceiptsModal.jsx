import React, { useState } from 'react';
import receipt1Image from '../assets/preset-receipts/1.jpeg';
import receipt2Image from '../assets/preset-receipts/2.jpeg';
import receipt3Image from '../assets/preset-receipts/3.jpeg';
import {
	FaShoppingCart,
	FaGasPump,
	FaUtensils,
	FaShoppingBag,
	FaThLarge,
	FaCheckCircle,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const presetReceipts = [
	{
		id: 'receipt1',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt2',
		imageUrl: receipt2Image,
		categories: ['Gas'],
	},
	{
		id: 'receipt3',
		imageUrl: receipt3Image,
		categories: ['Restaurant'],
	},
	{
		id: 'receipt4',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt5',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt6',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt7',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt8',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt9',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt10',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt11',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt12',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt13',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},

	{
		id: 'receipt14',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt15',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},

	{
		id: 'receipt16',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt17',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt18',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt19',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt20',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt21',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt22',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt23',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt24',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
	{
		id: 'receipt25',
		imageUrl: receipt1Image,
		categories: ['Grocery'],
	},
];

const categories = [
	{ name: 'All Receipts', icon: <FaThLarge />, value: 'all' },
	{ name: 'Grocery', icon: <FaShoppingCart />, value: 'grocery' },
	{ name: 'Gas', icon: <FaGasPump />, value: 'gas' },
	{ name: 'Restaurant', icon: <FaUtensils />, value: 'restaurant' },
	{ name: 'Shopping', icon: <FaShoppingBag />, value: 'shopping' },
];

const PresetReceiptsModal = ({ isOpen, onClose, handlePresetSelection }) => {
	const [selectedReceipts, setSelectedReceipts] = useState([]);
	const [activeCategory, setActiveCategory] = useState('all');

	if (!isOpen) return null;

	const toggleReceiptSelection = (receipt) => {
		if (selectedReceipts.includes(receipt)) {
			setSelectedReceipts(selectedReceipts.filter((r) => r !== receipt));
		} else {
			setSelectedReceipts([...selectedReceipts, receipt]);
		}
	};

	const handleCategoryChange = (categoryValue) => {
		setActiveCategory(categoryValue);
	};

	const filteredReceipts = presetReceipts.filter((receipt) => {
		if (activeCategory === 'all') return true;
		return receipt.categories.some(
			(category) => category.toLowerCase() === activeCategory.toLowerCase()
		);
	});

	const handleAddReceipts = async () => {
		try {
			const updatedReceipts = await Promise.all(
				selectedReceipts.map(async (receipt) => {
					const response = await fetch(receipt.imageUrl);
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					const blob = await response.blob();
					const file = new File([blob], `${receipt.id}.jpg`, {
						type: blob.type,
					});
					return {
						...receipt,
						imageFile: file,
					};
				})
			);

			handlePresetSelection(updatedReceipts);
			onClose();
		} catch (error) {
			console.error('Error in handleAddReceipts:', error);
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div
				className="relative bg-gray-900 w-full max-w-4xl rounded-lg text-white mx-4 flex flex-col"
				style={{ maxHeight: '90vh' }}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-6 text-gray-400 hover:text-gray-200 font-bold text-3xl focus:outline-none"
				>
					&times;
				</button>
				<br />
				<br />
				{/* Header */}
				<div className="mb-4 px-6 pt-6 flex-shrink-0 text-center">
					<h2 className="text-3xl font-bold mb-2">Select Preset Receipts</h2>
					<p className="text-lg text-gray-300">
						Don't have your own receipts to upload? No worries! Try out Platen
						by selecting receipts from our library that contains a vast array of
						receipts from real-world transactions.
					</p>
				</div>

				{/* Category Tabs */}
				<div className="mb-4 px-6 flex-shrink-0">
					<div className="flex flex-wrap justify-center space-x-2">
						{categories.map((category) => (
							<button
								key={category.value}
								onClick={() => handleCategoryChange(category.value)}
								className={`flex items-center px-4 py-2 m-1 rounded-lg focus:outline-none ${
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
					className="overflow-y-auto px-6"
					style={{ maxHeight: 'calc(90vh - 250px)' }}
				>
					{/* Receipt Thumbnails */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						<AnimatePresence>
							{filteredReceipts.length > 0 ? (
								filteredReceipts.map((receipt) => (
									<motion.div
										key={receipt.id}
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.3 }}
										className={`relative border rounded-lg overflow-hidden cursor-pointer ${
											selectedReceipts.includes(receipt)
												? 'border-blue-500'
												: 'border-gray-700'
										}`}
										onClick={() => toggleReceiptSelection(receipt)}
									>
										{/* Receipt Image */}
										<img
											src={receipt.imageUrl}
											alt={`Receipt ${receipt.id}`}
											className="w-full h-40 object-cover"
										/>
										{/* Selection Overlay */}
										{selectedReceipts.includes(receipt) && (
											<div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center">
												<FaCheckCircle className="text-white text-4xl" />
											</div>
										)}
										<div className="p-2">
											<p className="text-sm text-gray-300">
												Categories: {receipt.categories.join(', ')}
											</p>
										</div>
									</motion.div>
								))
							) : (
								<div className="col-span-full text-center text-gray-400 py-10">
									No receipts found for this category.
								</div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="mt-4 px-6 py-4 flex justify-end space-x-4 flex-shrink-0">
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
