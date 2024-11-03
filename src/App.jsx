import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from 'react-icons/fa'; // Import trash icon

function App() {
	const [receipts, setReceipts] = useState([]);
	const [files, setFiles] = useState([]);
	const [sessionId] = useState(uuidv4());
	const [uploading, setUploading] = useState(false);
	const [allCompleted, setAllCompleted] = useState(false);
	const [warningMessage, setWarningMessage] = useState('');
	const [uploadFinalized, setUploadFinalized] = useState(false); // Track if uploads have been finalized

	// Ref for the file input element
	const fileInputRef = useRef(null);

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
				checkAllCompleted(updatedReceipts);
				return updatedReceipts;
			});
		});

		return () => {
			socket.disconnect();
		};
	}, [sessionId]);

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
		// Implement logic to generate insights
		alert('Generating insights...');
	};

	// Function to handle the "Select Receipts" button click
	const handleSelectReceiptsClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

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
								<div className="flex items-center space-x-2 mb-2">
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
								{/* Progress Bar */}
								<div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
									<div
										className={`h-4 rounded-full transition-all duration-1000 ease-in-out ${
											receipt.status === 'COMPLETED'
												? 'bg-green-500'
												: 'bg-blue-500'
										}`}
										style={{
											width: `${getProgressPercentage(receipt.status)}%`,
										}}
									></div>
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

			{/* Features Section */}
			<section id="features" className="bg-gray-50 py-16">
				<div className="container mx-auto px-4">
					<h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
						Why Choose Our Solution?
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
							<svg
								className="w-14 h-14 text-blue-500 mb-5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
							</svg>
							<h4 className="text-2xl font-semibold mb-4">Easy Upload</h4>
							<p className="text-gray-600">
								Quickly upload multiple receipts with just a few clicks.
							</p>
						</div>
						<div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
							<svg
								className="w-14 h-14 text-blue-500 mb-5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
							</svg>
							<h4 className="text-2xl font-semibold mb-4">
								Real-Time Processing
							</h4>
							<p className="text-gray-600">
								Watch as your receipts are processed in real-time.
							</p>
						</div>
						<div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
							<svg
								className="w-14 h-14 text-blue-500 mb-5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
							</svg>
							<h4 className="text-2xl font-semibold mb-4">Valuable Insights</h4>
							<p className="text-gray-600">
								Gain actionable insights from your spending habits.
							</p>
						</div>
					</div>
				</div>
			</section>

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
