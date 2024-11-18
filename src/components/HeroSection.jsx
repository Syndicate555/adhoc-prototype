import React, { forwardRef } from 'react';
import Scene from './3D animations/Scene';

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
			allCompleted,
			isUploading,
			isLoadingInsights,
			isGeneratingInsights,
		},
		ref
	) => {
		return (
			<section
				ref={ref}
				className="flex-1 flex flex-col items-center justify-start text-center pt-4"
			>
				<div className="container mx-auto px-4 flex flex-col items-center mt-4 lg:mt-10">
					<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide px-4">
						Unlock <span className="btn-shine">Insights</span> from Your
						Receipts
					</h2>
					<p className="text-lg sm:text-xl text-600 mb-6 mt-4 px-4">
						Upload 20-50 of your receipts and let our AI generate valuable
						spending insights for you.
					</p>
					<div className="w-full flex justify-center items-center mb-4">
						<div className="w-full max-w-[800px] aspect-[16/11]">
							<Scene isAnimating={isGeneratingInsights} />
						</div>
					</div>
					<div className="flex justify-center space-x-6 mt-4">
						{isLoadingInsights ? (
							<div className="flex flex-col items-center">
								<h2 className="text-2xl font-bold text-800 mt-4">
									Generating Insights...
								</h2>
								<p className="text-white-600 mt-2">
									This may take a moment, please wait.
								</p>
							</div>
						) : (
							<>
								{!isUploading && (
									<button
										onClick={handleSelectReceiptsClick}
										className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transform hover:scale-105 transition-transform"
									>
										Select Receipts
									</button>
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

								{!isUploading && (
									<button
										onClick={handleUpload}
										className={`bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-md shadow-lg transform hover:scale-105 transition-transform ${
											uploading || files.length === 0
												? 'opacity-50 cursor-not-allowed'
												: ''
										}`}
										disabled={uploading || files.length === 0}
									>
										{uploading ? 'Generate' : 'Generate Insights'}
									</button>
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
