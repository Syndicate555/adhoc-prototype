import { useEffect, useState, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';
import Navbar from './components/Navbar';
import HeroSectionProd from './components/HeroSectionProd';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import gsap from 'gsap';
import ReceiptHierarchyTree from './components/ReceiptTree';
import HeroSection from './components/HeroSection';
import ProgressBar from './components/ProgressBar';
import ReceiptsUploadSection from './components/ReceiptsUploadSection';
import InsightsSummary from './components/InsightsSummary/InsightsSummary';
import { uploadReceipts, fetchInsights } from './services/api';
import { getProgressPercentage } from './utilities/utils';
import { motion } from 'framer-motion';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import PresetReceiptsModal from './components/PresetReceiptsModal';
import WaitlistModal from './components/WaitlistModal';
import MobileAppFeatureSection from './components/MobileAppFeatureSection';

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
	const [isPresetModalOpen, setIsPresetModalOpen] = useState(false);
	const [fakeProgress, setFakeProgress] = useState(0);
	const [isGeneratingInsights, setIsGeneratingInsights] = useState(false);
	const globalProgressRef = useRef(null);
	const [isUploading, setIsUploading] = useState(false);
	const [isModelAnimating, setIsModelAnimating] = useState(false);
	const [isLoadingInsights, setIsLoadingInsights] = useState(false);
	const [insightsReadyNotification, setInsightsReadyNotification] =
		useState(false);
	const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
	const [waitlistSuccessMessage, setWaitlistSuccessMessage] = useState('');

	const insightsRef = useRef(null);
	const heroSectionRef = useRef(null);

	const handleScrollToDemo = () => {
		if (heroSectionRef.current) {
			gsap.to(window, {
				scrollTo: {
					y: heroSectionRef.current,
					offsetY: 50,
				},
				duration: 1.5,
				ease: 'power3.out',
			});
		}
	};
	const animateProgress = useCallback(
		(updatedReceipts) => {
			const totalProgress = updatedReceipts.reduce((acc, receipt) => {
				return acc + getProgressPercentage(receipt.status);
			}, 0);

			const overallRealProgress = receipts.length
				? (totalProgress / (receipts.length * 100)) * 100
				: 0;

			const overallProgress = Math.max(fakeProgress, overallRealProgress);

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
			if (overallRealProgress > 0) {
				setIsLoadingInsights(false);
			}

			if (overallRealProgress === 100) {
				setIsModelAnimating(false);
				setIsGeneratingInsights(false);
			}
		},
		[receipts.length, fakeProgress]
	);

	const getRandomNumber = (min, max) => {
		return Math.random() * (max - min) + min;
	};
	useEffect(() => {
		let timer;
		if (isGeneratingInsights) {
			const randomNumber = getRandomNumber(35, 60);
			timer = setInterval(() => {
				setFakeProgress((prev) => Math.min(prev + 10, randomNumber));
			}, 500);
		}
		return () => clearInterval(timer);
	}, [isGeneratingInsights]);

	useEffect(() => {
		const backendUrl = import.meta.env.VITE_RECEIPT_MS_URL;

		if (!backendUrl) {
			console.error('Backend URL is not defined in environment variables.');
			return;
		}

		const socket = io(backendUrl, {
			transports: ['websocket', 'polling'],
			reconnection: true,
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

	useEffect(() => {
		let timer;
		if (waitlistSuccessMessage) {
			timer = setTimeout(() => {
				setWaitlistSuccessMessage('');
			}, 2000);
		}
		return () => clearTimeout(timer);
	}, [waitlistSuccessMessage]);

	const handleReset = () => {
		setReceipts([]);
		setFiles([]);
		setUploading(false);
		setAllCompleted(false);
		setWarningMessage('');
		setUploadFinalized(false);
		setInsights(null);
		setInsightsGenerated(false);
		setAllReceiptsProcessed(false);
		setLoadingInsights(false);
		setFakeProgress(0);
		setIsGeneratingInsights(false);
		setIsUploading(false);
		setIsLoadingInsights(false);
		setInsightsReadyNotification(false);
		globalProgressRef.current = null;
	};

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

	const handlePresetSelection = (selectedPresetReceipts) => {
		const newReceipts = selectedPresetReceipts.map((presetReceipt) => ({
			receiptId: null,
			file: presetReceipt.imageFile,
			status: 'PENDING',
			isPreset: true,
			presetData: presetReceipt,
		}));

		setReceipts((prevReceipts) => [...prevReceipts, ...newReceipts]);
		setAllCompleted(false);
	};

	const clearSelection = useCallback(() => {
		setReceipts([]);
		setFiles([]);
	}, []);

	const handleGenerateInsights = async () => {
		if (!receipts.length || insightsGenerated || loadingInsights) return;

		setLoadingInsights(true);

		try {
			const job_id = receipts[0].job_id;
			const insightsData = await fetchInsights(job_id);
			setInsights(insightsData);
			setInsightsGenerated(true);
			setInsightsReadyNotification(true);
		} catch (error) {
			console.error('Failed to fetch insights:', error);
		} finally {
			setLoadingInsights(false);
		}
	};

	const handleUpload = async () => {
		if (!receipts || receipts.length === 0) {
			setWarningMessage(
				'No files selected. Please add receipts before uploading.'
			);
			return;
		}

		if (uploading) {
			return;
		}

		setUploading(true);
		setIsUploading(true);
		setIsLoadingInsights(true);
		setIsModelAnimating(true);
		try {
			const filesToUpload = receipts.map((receipt) => receipt.file);
			const createdReceipts = await uploadReceipts(filesToUpload, sessionId);
			if (createdReceipts) {
				const uploadedReceipts = createdReceipts.map((receipt, index) => ({
					...receipts[index],
					receiptId: receipt._id,
					status: 'UPLOADED',
					job_id: receipt.job_id,
				}));

				setReceipts(uploadedReceipts);
				setUploadFinalized(true);
				setFakeProgress(30);
				setIsGeneratingInsights(true);
			}
		} catch (error) {
			console.error('Upload failed:', error);
			setIsLoadingInsights(false);
			setIsModelAnimating(false);
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
			setAllReceiptsProcessed(true);
			setFakeProgress(100);
		}
	};

	const scrollToInsights = async () => {
		setAllReceiptsProcessed(false);
		await handleGenerateInsights();

		if (insightsRef.current) {
			gsap.to(window, {
				scrollTo: {
					y: insightsRef.current,
					offsetY: 50,
				},
				duration: 0.5,
				ease: 'power3.out',
			});
		}
	};

	return (
		<>
			<Navbar handleScrollToDemo={handleScrollToDemo} />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<HeroSectionProd
					handleScrollToDemo={handleScrollToDemo}
					setIsWaitlistModalOpen={setIsWaitlistModalOpen}
				/>
				<FeatureSection />
				<br />
				<br />
				<br />
				<HeroSection
					ref={heroSectionRef}
					handleSelectReceiptsClick={handleSelectReceiptsClick}
					handleUpload={handleUpload}
					uploading={uploading}
					files={receipts}
					warningMessage={warningMessage}
					fileInputRef={fileInputRef}
					handleFileChange={handleFileChange}
					allCompleted={allCompleted}
					isUploading={isUploading}
					isLoadingInsights={isLoadingInsights}
					isGeneratingInsights={isGeneratingInsights}
					openPresetModal={() => setIsPresetModalOpen(true)}
				/>
				<br />
				{/* Preset Receipts Modal */}
				<PresetReceiptsModal
					isOpen={isPresetModalOpen}
					onClose={() => setIsPresetModalOpen(false)}
					handlePresetSelection={handlePresetSelection}
				/>

				{/* Section containing progress and receipt uploads */}
				{receipts.length > 0 && (
					<div className="mt-10 max-w-7xl mx-auto px-6">
						<ProgressBar
							globalProgressRef={globalProgressRef}
							receipts={receipts}
						/>
						<br />
						<ReceiptsUploadSection
							receipts={receipts}
							handleRemoveReceipt={handleRemoveReceipt}
							uploadFinalized={uploadFinalized}
							getProgressPercentage={getProgressPercentage}
							clearSelection={clearSelection}
						/>
					</div>
				)}

				{allReceiptsProcessed && (
					<motion.div
						className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="bg-[#1f2937] p-8 rounded-lg shadow-lg text-center">
							<h2 className="text-3xl font-bold text-green-600 mb-4">
								🎉 Your insights are ready!
							</h2>
							<p className="text-lg text-gray-300 mb-6">
								Click the button below to view your insights.
							</p>
							<button
								className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
								onClick={scrollToInsights}
							>
								View My Insights
							</button>
						</div>
					</motion.div>
				)}

				<div ref={insightsRef}>
					<InsightsSummary insights={insights} handleReset={handleReset} />
				</div>

				<MobileAppFeatureSection />
				<Footer />

				{isWaitlistModalOpen && (
					<WaitlistModal
						setIsWaitlistModalOpen={setIsWaitlistModalOpen}
						setWaitlistSuccessMessage={setWaitlistSuccessMessage}
					/>
				)}
				{waitlistSuccessMessage && (
					<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg">
						{waitlistSuccessMessage}
					</div>
				)}
			</div>
		</>
	);
}

export default App;
