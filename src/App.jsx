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
import { motion } from 'framer-motion';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Import ScrollToPlugin

gsap.registerPlugin(ScrollToPlugin);

function App() {
	const [receipts, setReceipts] = useState([]);
	const [files, setFiles] = useState([]);
	const [sessionId] = useState(uuidv4());
	const [uploading, setUploading] = useState(false);
	const [allCompleted, setAllCompleted] = useState(false);
	const [warningMessage, setWarningMessage] = useState('');
	const [uploadFinalized, setUploadFinalized] = useState(false);
	const [insights, setInsights] = useState(null);
	const [insightsGenerated, setInsightsGenerated] = useState(false);
	const [allReceiptsProcessed, setAllReceiptsProcessed] = useState(false);
	const [loadingInsights, setLoadingInsights] = useState(false);
	const fileInputRef = useRef(null);
	const globalProgressRef = useRef(null);
	const [insightsReadyNotification, setInsightsReadyNotification] =
		useState(false);
	const insightsRef = useRef(null);

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
		let duplicateFiles = [];

		const uniqueFiles = selectedFiles.filter((file) => {
			const isFileAlreadySelected = files.some(
				(existingFile) =>
					existingFile.name === file.name && existingFile.size === file.size
			);
			if (isFileAlreadySelected) {
				duplicateFiles.push(file.name);
				return false;
			}
			return true;
		});

		if (duplicateFiles.length > 0) {
			setWarningMessage(
				`The following files are duplicates and were not added: ${duplicateFiles.join(
					', '
				)}`
			);
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
		if (!receipts.length || insightsGenerated || loadingInsights) return;

		setLoadingInsights(true); // Start loading

		try {
			const job_id = receipts[0].job_id; // Assuming all receipts have the same job_id
			const insightsData = await fetchInsights(job_id);
			setInsights(insightsData);
			setInsightsGenerated(true); // Prevent further clicking
			setInsightsReadyNotification(true); // Show notification once insights are ready
		} catch (error) {
			console.error('Failed to fetch insights:', error);
		} finally {
			setLoadingInsights(false); // Stop loading
		}
	};

	const handleUpload = async () => {
		if (!files || files.length === 0) {
			setWarningMessage(
				'No files selected. Please add receipts before uploading.'
			);
			return;
		}

		if (uploading) {
			return; // Prevent redundant uploads if the button is clicked multiple times.
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

	const handleSelectReceiptsClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const checkAllCompleted = (receiptsList) => {
		const allDone = receiptsList.every(
			(receipt) => receipt.status === 'COMPLETED'
		);
		setAllCompleted(allDone);
		if (allDone) {
			setAllReceiptsProcessed(true); // Trigger the notification when all receipts are processed.
		}
	};

	const scrollToInsights = async () => {
		// Close the modal by setting `allReceiptsProcessed` to `false`
		setAllReceiptsProcessed(false);

		// Generate insights before scrolling to them
		await handleGenerateInsights();

		// Scroll to the insights section using the ScrollToPlugin
		if (insightsRef.current) {
			gsap.to(window, {
				scrollTo: {
					y: insightsRef.current,
					offsetY: 50,
				},
				duration: 1,
				ease: 'power3.out',
			});
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
				allCompleted={allCompleted}
			/>

			{/* Receipt Item Hierarchy */}
			{/* <ReceiptHierarchyTree data={treeData} /> */}

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
			{/* {receipts.length > 0 && (
				<div className="flex justify-center mt-10">
					<button
						onClick={handleGenerateInsights}
						className={`bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-md shadow-lg transform hover:scale-105 transition-transform ${
							!allCompleted || insightsGenerated
								? 'opacity-50 cursor-not-allowed'
								: ''
						}`}
						disabled={!allCompleted || insightsGenerated}
					>
						Generate Insights
					</button>
				</div>
			)} */}
			{/* Notification when all receipts are processed */}
			{allReceiptsProcessed && (
				<motion.div
					className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="bg-white p-8 rounded-lg shadow-lg text-center">
						<h2 className="text-3xl font-bold text-green-600 mb-4">
							🎉 Your insights are ready to be viewed!
						</h2>
						<p className="text-lg text-gray-700 mb-6">
							Click the button below to view your insights.
						</p>
						<button
							className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
							onClick={scrollToInsights}
						>
							View My Insights
						</button>
					</div>
				</motion.div>
			)}

			{/* Insights Summary Section */}
			<div ref={insightsRef}>
				<InsightsSummary insights={insights} />
			</div>

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
