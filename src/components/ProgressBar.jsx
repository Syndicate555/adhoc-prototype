import React from 'react';

const ProgressBar = ({ globalProgressRef, receipts }) => {
	return (
		receipts.length > 0 && (
			<div className="w-full mb-6">
				<h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
					Overall Processing Progress:
				</h2>
				<br />
				<div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden relative">
					<div
						ref={globalProgressRef}
						className="h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold whitespace-nowrap transition-all duration-300 ease-out"
						style={{ width: '0%' }}
					></div>
				</div>
			</div>
		)
	);
};

export default ProgressBar;
