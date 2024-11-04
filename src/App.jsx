import { useEffect, useState, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import gsap from 'gsap';

function App() {
	const [receipts, setReceipts] = useState([]);
	const [files, setFiles] = useState([]);
	const [sessionId] = useState(uuidv4());
	const [uploading, setUploading] = useState(false);
	const [allCompleted, setAllCompleted] = useState(false);
	const [warningMessage, setWarningMessage] = useState('');
	const [uploadFinalized, setUploadFinalized] = useState(false);
	const fileInputRef = useRef(null);
	const globalProgressRef = useRef(null);

	const getProgressPercentage = (status) => {
		switch (status) {
			case 'PENDING':
				return 0;
			case 'PROCESSING':
				return 33;
			case 'ANALYZED':
				return 67;
			case 'COMPLETED':
				return 100;
			default:
				return 0;
		}
	};

	const animateProgress = useCallback(
		(updatedReceipts) => {
			// Calculate the global progress
			const totalProgress = updatedReceipts.reduce((acc, receipt) => {
				return acc + getProgressPercentage(receipt.status);
			}, 0);

			const overallProgress = receipts.length
				? (totalProgress / (receipts.length * 100)) * 100
				: 0;

			// Animate the global progress bar
			if (globalProgressRef.current) {
				gsap.to(globalProgressRef.current, {
					width: `${overallProgress}%`,
					duration: 1.5,
					ease: 'power3.out',
				});
			}

			// Update the percentage text
			if (globalProgressRef.current) {
				globalProgressRef.current.textContent = `${Math.round(
					overallProgress
				)}%`;
			}
		},
		[receipts.length]
	);

	useEffect(() => {
		// Initialize Socket.IO connection
		const socket = io('https://www.receipt-ms.online', {
			transports: ['websocket', 'polling'],
		});

		socket.emit('join', sessionId);

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

		return () => {
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

	const handleUpload = async () => {
		if (!files || files.length === 0) {
			alert('Please select at least one file');
			return;
		}

		setUploading(true);

		const formData = new FormData();
		files.forEach((file) => {
			formData.append('images', file);
		});
		formData.append('session', sessionId);

		try {
			const response = await axios.post(
				'https://www.receipt-ms.online/receipts/upload-multiple',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);

			const uploadedReceipts = response.data.createdReceipts.map(
				(receipt, index) => ({
					receiptId: receipt._id,
					file: files[index],
					status: 'UPLOADED',
				})
			);

			setReceipts(uploadedReceipts);
			setUploadFinalized(true); // Finalize uploads once successful
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

	const handleGenerateInsights = () => {
		alert('Generating insights...');
	};

	const handleSelectReceiptsClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col">
			{/* Header */}
			<header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-lg">
				<div className="container mx-auto flex justify-between items-center px-4">
					<h1 className="text-2xl font-bold">
						Platen Receipt Insight Generator
					</h1>
					<nav>
						<ul className="flex space-x-6 text-lg">
							<li>
								<a href="#home" className="hover:underline">
									Home
								</a>
							</li>
							<li>
								<a href="#features" className="hover:underline">
									Features
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			{/* Hero Section */}
			<section className="flex-1 flex items-center justify-center text-center py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-5xl font-extrabold text-gray-800 mb-6">
						Unlock Insights from Your Receipts
					</h2>
					<p className="text-xl text-gray-600 mb-8">
						Upload your receipts and let our AI generate valuable spending
						insights for you.
					</p>
					<div className="flex justify-center space-x-6">
						{/* Select Receipts Button */}
						<button
							onClick={handleSelectReceiptsClick}
							className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transform hover:scale-105 transition-transform"
						>
							Select Receipts
						</button>

						{/* Hidden File Input */}
						<input
							type="file"
							ref={fileInputRef}
							style={{ display: 'none' }}
							accept="image/*"
							multiple
							onChange={handleFileChange}
						/>

						{/* Upload Receipts Button */}
						<button
							onClick={handleUpload}
							className={`bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transform hover:scale-105 transition-transform ${
								uploading ? 'opacity-50 cursor-not-allowed' : ''
							}`}
							disabled={files.length === 0 || uploading}
						>
							{uploading ? 'Uploading...' : 'Upload Receipts'}
						</button>
					</div>
					{/* Warning Message */}
					{warningMessage && (
						<p className="mt-4 text-red-500 font-bold">{warningMessage}</p>
					)}
				</div>
			</section>

			{/* Global Progress Bar */}
			{receipts.length > 0 && (
				<div className="container mx-auto px-4 my-10">
					<div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden mb-6 relative">
						<div
							ref={globalProgressRef}
							className="h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
							style={{ width: '0%' }}
						>
							0%
						</div>
					</div>
				</div>
			)}

			{/* Receipt Upload & Tracking Section */}
			{receipts.length > 0 && (
				<section className="container mx-auto px-4 my-10">
					<h3 className="text-3xl font-semibold text-gray-800 mb-6">
						You are uploading {receipts.length} receipt
						{receipts.length > 1 ? 's' : ''}
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{receipts.map((receipt, index) => (
							<div
								key={index}
								className="bg-white p-5 rounded-2xl shadow-lg relative transform hover:scale-105 transition-transform"
							>
								{/* Remove Button - Only show if upload not finalized */}
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
								<h4 className="text-lg font-semibold mb-2 text-gray-800">
									{receipt.receiptId || 'Pending...'}
								</h4>
								<div className="flex items-center space-x-2 mb-4">
									<span
										className={`text-sm font-semibold ${
											receipt.status === 'COMPLETED'
												? 'text-green-600'
												: 'text-yellow-600'
										}`}
									>
										{receipt.status}
									</span>
								</div>
								{/* Circular Progress Bar */}
								<div className="w-20 h-20 mx-auto">
									<CircularProgressbar
										value={getProgressPercentage(receipt.status)}
										text={`${getProgressPercentage(receipt.status)}%`}
										styles={buildStyles({
											pathColor:
												receipt.status === 'COMPLETED' ? '#22c55e' : '#3b82f6',
											textColor: '#000',
											trailColor: '#d1d5db',
											textSize: '16px',
										})}
									/>
								</div>
							</div>
						))}
					</div>

					{/* Generate Insights Button */}
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
				</section>
			)}

			{/* The rest of the sections remain the same... */}
		</div>
	);
}

export default App;
