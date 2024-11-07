import { useEffect, useState, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import gsap from 'gsap';
import ReceiptHierarchyTree from './components/ReceiptTree';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import ReceiptCard from './components/ReceiptCard';
import InsightsSummary from './components/InsightsSummary';
import { uploadReceipts, fetchInsights } from './services/api';
import { getProgressPercentage } from './utilities/utils';

function App() {
	const [receipts, setReceipts] = useState([]);
	const [files, setFiles] = useState([]);
	const [sessionId] = useState(uuidv4());
	const [uploading, setUploading] = useState(false);
	const [allCompleted, setAllCompleted] = useState(false);
	const [warningMessage, setWarningMessage] = useState('');
	const [uploadFinalized, setUploadFinalized] = useState(false);
	const [insights, setInsights] = useState(null);
	const fileInputRef = useRef(null);
	const globalProgressRef = useRef(null);

	const animateProgress = useCallback(
		(updatedReceipts) => {
			const totalProgress = updatedReceipts.reduce((acc, receipt) => {
				return acc + getProgressPercentage(receipt.status);
			}, 0);

			const overallProgress = receipts.length
				? (totalProgress / (receipts.length * 100)) * 100
				: 0;

			if (globalProgressRef.current) {
				gsap.to(globalProgressRef.current, {
					width: `${overallProgress}%`,
					duration: 1.5,
					ease: 'power3.out',
				});
			}

			if (globalProgressRef.current) {
				globalProgressRef.current.textContent =
					overallProgress > 0 ? `${Math.round(overallProgress)}%` : '';
			}
		},
		[receipts.length]
	);

	useEffect(() => {
		const socket = io('https://www.receipt-ms.online', {
			transports: ['websocket', 'polling'],
			reconnection: true, // This is enough for automatic reconnection
			reconnectionAttempts: 5,
			reconnectionDelay: 5000,
		});

		socket.on('connect', () => {
			console.log('Connected to WebSocket server.');
			socket.emit('join', sessionId);
		});

		socket.on('receipt:update', (data) => {
			setReceipts((prevReceipts) => {
				const updatedReceipts = prevReceipts.map((receipt) =>
					receipt.receiptId === data.receiptId
						? { ...receipt, status: data.status }
						: receipt
				);
				animateProgress(updatedReceipts);
				checkAllCompleted(updatedReceipts);
				return updatedReceipts;
			});
		});

		socket.on('receipt:completed', (data) => {
			setReceipts((prevReceipts) => {
				const updatedReceipts = prevReceipts.map((receipt) =>
					receipt.receiptId === data.receiptId
						? { ...receipt, status: 'COMPLETED' }
						: receipt
				);
				animateProgress(updatedReceipts);
				checkAllCompleted(updatedReceipts);
				return updatedReceipts;
			});
		});

		socket.on('connect_error', (error) => {
			console.error('Connection error:', error);
		});

		return () => {
			console.log('Disconnecting socket...');
			socket.disconnect();
		};
	}, [sessionId, animateProgress]);

	const handleFileChange = (e) => {
		const selectedFiles = Array.from(e.target.files);
		let isDuplicate = false;

		const uniqueFiles = selectedFiles.filter((file) => {
			const isFileAlreadySelected = files.some(
				(existingFile) =>
					existingFile.name === file.name && existingFile.size === file.size
			);
			if (isFileAlreadySelected) {
				isDuplicate = true;
				return false;
			}
			return true;
		});

		if (isDuplicate) {
			setWarningMessage('Some files were not added as they are duplicates.');
		} else {
			setWarningMessage('');
		}

		const newReceipts = uniqueFiles.map((file) => ({
			receiptId: null,
			file,
			status: 'PENDING',
		}));

		setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
		setReceipts((prevReceipts) => [...prevReceipts, ...newReceipts]);
		setAllCompleted(false);
	};

	const handleGenerateInsights = async () => {
		if (!receipts.length) return;

		try {
			const job_id = receipts[0].job_id; // Assuming all receipts have the same job_id
			const insightsData = await fetchInsights(job_id);
			setInsights(insightsData);
		} catch (error) {
			console.error('Failed to fetch insights:', error);
		}
	};

	const handleUpload = async () => {
		if (!files || files.length === 0) {
			alert('Please select at least one file');
			return;
		}

		setUploading(true);

		try {
			const createdReceipts = await uploadReceipts(files, sessionId);
			const uploadedReceipts = createdReceipts.map((receipt, index) => ({
				receiptId: receipt._id,
				file: files[index],
				status: 'UPLOADED',
				job_id: receipt.job_id,
			}));

			setReceipts(uploadedReceipts);
			setUploadFinalized(true);
			animateProgress(uploadedReceipts);
		} catch (error) {
			console.error('Upload failed:', error);
		} finally {
			setUploading(false);
		}
	};

	const handleRemoveReceipt = (index) => {
		setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
		setReceipts((prevReceipts) => prevReceipts.filter((_, i) => i !== index));
		setWarningMessage('');
	};

	const checkAllCompleted = (receiptsList) => {
		const allDone = receiptsList.every(
			(receipt) => receipt.status === 'COMPLETED'
		);
		setAllCompleted(allDone);
	};

	const handleSelectReceiptsClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const treeData = {
		name: 'Safeway',
		children: [
			{
				name: 'Food & Beverages',
				children: [
					{
						name: 'Sauces & Condiments',
						children: [
							{ name: 'Chunky Salsa' },
							{ name: 'Herdez Taqueria Sauce' },
						],
					},
					{
						name: 'Canned Goods',
						children: [{ name: 'Nacho Sliced Jalapenos' }],
					},
					{ name: 'Non-Alcoholic Drinks', children: [{ name: 'Coke Zero' }] },
					{ name: 'Snacks & Sweets', children: [{ name: 'Soft Snql Tak' }] },
					{ name: 'Cheese', children: [{ name: 'Daisy Sour Cream' }] },
					{
						name: 'Fresh Vegetables',
						children: [{ name: 'Italian Red Onions' }],
					},
				],
			},
			{
				name: 'Miscellaneous & Other',
				children: [
					{
						name: 'Reusable Bag Fees',
						children: [{ name: 'Recycle Bag Charge' }],
					},
				],
			},
		],
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col">
			<Header />

			<HeroSection
				handleSelectReceiptsClick={handleSelectReceiptsClick}
				handleUpload={handleUpload}
				uploading={uploading}
				files={files}
				warningMessage={warningMessage}
				fileInputRef={fileInputRef}
				handleFileChange={handleFileChange}
			/>

			{/* Receipt Item Hierarchy */}
			<ReceiptHierarchyTree data={treeData} />

			{/* Global Progress Bar */}
			<ProgressBar globalProgressRef={globalProgressRef} receipts={receipts} />

			{/* Receipt Upload & Tracking Section */}
			{receipts.length > 0 && (
				<section className="container mx-auto px-4 my-10">
					<h3 className="text-3xl font-semibold text-gray-800 mb-6">
						You are uploading {receipts.length} receipt
						{receipts.length > 1 ? 's' : ''}
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
				</section>
			)}

			{/* Generate Insights Button */}
			{receipts.length > 0 && (
				<div className="flex justify-center mt-10">
					<button
						onClick={handleGenerateInsights}
						className={`bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-md shadow-lg transform hover:scale-105 transition-transform ${
							!allCompleted ? 'opacity-50 cursor-not-allowed' : ''
						}`}
						disabled={!allCompleted}
					>
						Generate Insights
					</button>
				</div>
			)}

			{/* Insights Summary Section */}
			<InsightsSummary insights={insights} />

			{/* Footer */}
			<footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 mt-16">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-6 md:mb-0">
							<h5 className="text-2xl font-bold">Platen</h5>
							<p>© {new Date().getFullYear()} Platen. All rights reserved.</p>
						</div>
						<div className="flex space-x-6 text-lg">
							<a href="#privacy" className="hover:underline">
								Privacy Policy
							</a>
							<a href="#terms" className="hover:underline">
								Terms of Service
							</a>
							<a href="#contact" className="hover:underline">
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
