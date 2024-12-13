import React, { forwardRef } from 'react';
import Scene from './3D animations/Scene';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import receiptScanningAnimation from '../assets/lottie/receipt.json';
import { ReactTyped } from 'react-typed';

const HeroSection = forwardRef(
	(
		{
			handleSelectReceiptsClick,
			handleUpload,
			uploading,
			files,
			warningMessage,
			fileInputRef,
			handleFileChange,
			isUploading,
			isLoadingInsights,
			isGeneratingInsights,
			openPresetModal,
			insightsGenerated,
			uploadFinalized,
			isFakeProgressActive,
			handleGenerateInsights,
			presetReceiptsSelected,
		},
		ref
	) => {
		const shouldAnimateGenerate =
			files.length > 0 &&
			!isUploading &&
			!insightsGenerated &&
			!uploadFinalized;

		const showActionButtons = !insightsGenerated && !uploadFinalized;

		const generateButtonText = uploading ? 'Generate' : 'Generate Insights';

		return (
			<section
				ref={ref}
				className="flex-1 flex flex-col items-center justify-start text-center pt-4"
			>
				<div className="container mx-auto px-4 flex flex-col items-center mt-4 lg:mt-10">
					<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold tracking-wide px-4">
						Unlock <span className="btn-shine">Insights</span> from Your
						Receipts
					</h2>
					<p className="text-lg sm:text-xl text-600 mb-6 mt-4 px-4">
						Upload 20-50 of your receipts and let our AI generate valuable
						spending insights for you.
					</p>

					{/* <div className="w-full flex justify-center items-center mb-4">
						<div className="w-full max-w-[800px] aspect-[16/11]">
							<Scene isAnimating={isGeneratingInsights} />
						</div>
					</div> */}
					<div className="flex justify-center space-x-6 mt-4">
						{isLoadingInsights || isFakeProgressActive ? (
							<div className="flex flex-col items-center">
								{/* <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white-500">
									<ReactTyped
										strings={['Scanning your Receipts', '']}
										typeSpeed={40}
										backSpeed={40}
										showCursor={false}
									/>
								</div>
								<Lottie animationData={receiptScanningAnimation} loop={false} /> */}
							</div>
						) : (
							<>
								{/* Only show these buttons if user hasn't completed or generated insights yet */}
								{showActionButtons && !isUploading && (
									<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
										<button
											onClick={handleSelectReceiptsClick}
											className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transform hover:scale-105 transition-transform"
										>
											Upload your own Receipts
										</button>
										<button
											onClick={openPresetModal}
											className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transform hover:scale-105 transition-transform"
										>
											Use Preset Receipts
										</button>
									</div>
								)}

								{/* Hidden File Input */}
								<input
									type="file"
									ref={fileInputRef}
									style={{ display: 'none' }}
									accept="image/*"
									multiple
									onChange={handleFileChange}
								/>

								{showActionButtons && !isUploading && (
									<motion.button
										onClick={
											presetReceiptsSelected
												? handleGenerateInsights
												: handleUpload
										}
										className={`bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-md shadow-lg transform transition-transform ${
											uploading || files.length === 0
												? 'opacity-50 cursor-not-allowed'
												: ''
										}`}
										disabled={uploading || files.length === 0}
										animate={
											shouldAnimateGenerate
												? {
														scale: [1, 1.2, 1],
														boxShadow: [
															'0px 0px 0px rgba(0,255,0,0)',
															'0px 0px 15px rgba(0,255,0,0.5)',
															'0px 0px 0px rgba(0,255,0,0)',
														],
												  }
												: {}
										}
										transition={
											shouldAnimateGenerate
												? {
														repeat: Infinity,
														repeatType: 'mirror',
														duration: 1.5,
														ease: 'easeInOut',
												  }
												: {}
										}
									>
										{generateButtonText}
									</motion.button>
								)}
							</>
						)}
					</div>
					{warningMessage && (
						<p className="mt-4 text-red-500 font-bold">{warningMessage}</p>
					)}
				</div>
			</section>
		);
	}
);

export default HeroSection;
