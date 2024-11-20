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
	{ name: 'All Receipts', icon: <FaThLarge />, value: 'All' },
	{ name: 'Grocery', icon: <FaShoppingCart />, value: 'Grocery' },
	{ name: 'Gas', icon: <FaGasPump />, value: 'Gas' },
	{ name: 'Restaurant', icon: <FaUtensils />, value: 'Restaurant' },
	{ name: 'Shopping', icon: <FaShoppingBag />, value: 'Shopping' },
];

const PresetReceiptsModal = ({ isOpen, onClose, handlePresetSelection }) => {
	const [selectedReceipts, setSelectedReceipts] = useState([]);
	const [activeCategory, setActiveCategory] = useState('All');

	if (!isOpen) return null;

	const toggleReceiptSelection = (receipt) => {
		if (selectedReceipts.includes(receipt)) {
			setSelectedReceipts(selectedReceipts.filter((r) => r !== receipt));
		} else {
			setSelectedReceipts([...selectedReceipts, receipt]);
		}
	};

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
	};

	const filteredReceipts = presetReceipts.filter((receipt) => {
		if (activeCategory === 'All') return true;
		return receipt.categories.includes(activeCategory);
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
				className="relative bg-gray-900 w-full max-w-4xl p-6 rounded-lg text-white mx-4"
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
				<div className="mb-6 text-center">
					<h2 className="text-3xl font-bold mb-2">Select Preset Receipts</h2>
					<p className="text-lg text-gray-300">
						Don't have your own receipts to upload? No worries! Try out Platen
						by selecting receipts from our library that contains a vast array of
						receipts from real-world transactions.
					</p>
				</div>

				{/* Category Tabs */}
				<div className="mb-6">
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
				<div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
					{/* Receipt Thumbnails */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						<AnimatePresence>
							{filteredReceipts.map((receipt) => (
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
							))}
						</AnimatePresence>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="mt-6 flex justify-end space-x-4">
					<button
						onClick={onClose}
						className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
					>
						Cancel
					</button>
					<button
						onClick={handleAddReceipts}
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
