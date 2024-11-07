import React from 'react';

const HeroSection = ({
	handleSelectReceiptsClick,
	handleUpload,
	uploading,
	files,
	warningMessage,
	fileInputRef,
	handleFileChange,
}) => {
	return (
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
	);
};

export default HeroSection;
