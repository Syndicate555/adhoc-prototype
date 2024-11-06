import { useEffect, useState, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import gsap from 'gsap';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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

	const handleGenerateInsights = async () => {
		if (!receipts.length) return;

		try {
			const job_id = receipts[0].job_id; // Assuming all receipts have the same job_id
			const response = await axios.get(
				`https://www.receipt-ms.online/analytics/summary?demo=true&job=${job_id}`
			);
			console.log('JOB', job_id);
			console.log(response.data.insights);
			setInsights(response.data.insights);
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
					job_id: receipt.job_id,
				})
			);

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

	// const handleGenerateInsights = () => {
	// 	alert('Generating insights...');
	// };

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
					<h4 className="text-xl font-semibold text-gray-800 mb-2">
						Overall Processing Progress
					</h4>
					<div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden mb-6 relative">
						<div
							ref={globalProgressRef}
							className="h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
							style={{ width: '0%' }}
						></div>
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

								<div className="flex items-center space-x-2 mb-4">
									{/* <span
										className={`text-sm font-semibold ${
											receipt.status === 'COMPLETED'
												? 'text-green-600'
												: 'text-yellow-600'
										}`}
									>
										{receipt.status}
									</span> */}
								</div>
								{/* Circular Progress Bar */}
								<div className="w-20 h-20 mx-auto">
									{receipt.status === 'COMPLETED' ? (
										<FaCheckCircle className="text-green-500 w-full h-full" />
									) : (
										<CircularProgressbar
											value={getProgressPercentage(receipt.status)}
											text={`${getProgressPercentage(receipt.status)}%`}
											styles={buildStyles({
												pathColor:
													receipt.status === 'COMPLETED'
														? '#22c55e'
														: '#3b82f6',
												textColor: '#000',
												trailColor: '#d1d5db',
												textSize: '16px',
											})}
										/>
									)}
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
			{insights && (
				<section className="container mx-auto px-4 my-10">
					<h3 className="text-3xl font-semibold text-gray-800 mb-6">
						Insights Summary
					</h3>

					{/* Spending by Category Pie Chart */}
					<div className="chart-container my-8">
						<h4 className="text-2xl font-bold text-gray-700 mb-4">
							Spending by Category
						</h4>
						<Pie
							data={{
								labels: insights.spendingByCategory.map(
									(category) => category.category
								),
								datasets: [
									{
										data: insights.spendingByCategory.map(
											(category) => category.totalSpent
										),
										backgroundColor: [
											'#FF6384',
											'#36A2EB',
											'#FFCE56',
											'#4BC0C0',
											'#9966FF',
											'#FF9F40',
										],
										hoverBackgroundColor: [
											'#FF6384',
											'#36A2EB',
											'#FFCE56',
											'#4BC0C0',
											'#9966FF',
											'#FF9F40',
										],
									},
								],
							}}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								plugins: {
									legend: {
										position: 'bottom',
										labels: {
											boxWidth: 20,
											padding: 10,
										},
									},
								},
							}}
							style={{ maxHeight: '400px' }}
						/>
					</div>

					{/* Spending by Vendor Bar Chart */}
					<div className="chart-container my-8">
						<h4 className="text-2xl font-bold text-gray-700 mb-4">
							Spending by Vendor
						</h4>
						<Bar
							data={{
								labels: insights.spendingByVendor.map(
									(vendor) => vendor.vendor
								),
								datasets: [
									{
										label: 'Total Spent',
										data: insights.spendingByVendor.map(
											(vendor) => vendor.totalSpent
										),
										backgroundColor: '#3b82f6',
									},
								],
							}}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								plugins: {
									legend: {
										display: false,
									},
								},
								scales: {
									x: {
										ticks: {
											maxRotation: 90,
											minRotation: 45,
										},
									},
									y: {
										beginAtZero: true,
									},
								},
							}}
							style={{ maxHeight: '400px' }}
						/>
					</div>

					{/* Top Line Items */}
					<div className="chart-container my-8">
						<h4 className="text-2xl font-bold text-gray-700 mb-4">
							Top Line Items
						</h4>
						<ul className="list-disc list-inside">
							{insights.topLineItems.map((item, index) => (
								<li key={index} className="text-lg text-gray-700">
									{item.title} - Quantity: {item.quantity}, Total Spent: $
									{item.totalSpent.toFixed(2)}
								</li>
							))}
						</ul>
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
