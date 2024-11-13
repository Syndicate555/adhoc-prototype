import React from 'react';

const ProgressBar = ({ globalProgressRef, receipts }) => {
	return (
		receipts.length > 0 && (
			<div className="container mx-auto px-4 my-10">
				<h4 className="text-xl font-semibold text-800 mb-2">
					Overall Processing Progress:
				</h4>
				<div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden mb-6 relative">
					<div
						ref={globalProgressRef}
						className="h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
						style={{ width: '0%' }}
					></div>
				</div>
			</div>
		)
	);
};

export default ProgressBar;
