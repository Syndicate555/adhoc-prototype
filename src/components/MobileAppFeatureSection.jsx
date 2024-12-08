import { useState } from 'react';
import appOverview from '../assets/app-screenshots/app-overview.png';
import appSpending from '../assets/app-screenshots/app-spending.png';
import appDiscounts from '../assets/app-screenshots/app-discounts.png';
import appReceiptUpload from '../assets/app-screenshots/app-receipt-upload.png';
import appSafewayReceipt from '../assets/app-screenshots/app-safeway-receipt.png';
import appCostcoReceipt from '../assets/app-screenshots/app-costco-receipt.png';

const MobileAppFeatureSection = () => {
	const screenshots = [
		{
			image: appOverview,
			title: 'Organized Dashboard',
			description: 'View all your receipts in an organized manner.',
		},
		{
			image: appSpending,
			title: 'Spending Analytics',
			description: 'Gain insights into your spending habits.',
		},
		{
			image: appDiscounts,
			title: 'Savings Analytics',
			description: 'Discover where you saved the most.',
		},
		{
			image: appReceiptUpload,
			title: 'Easy Receipt Upload',
			description: 'Quickly upload your receipts with a simple snap.',
		},
		{
			image: appSafewayReceipt,
			title: 'Itemized Breakdown',
			description: 'Enrich each transaction with itemized data.',
		},
		{
			image: appCostcoReceipt,
			title: 'Granular Spending',
			description:
				'Find out exactly where your money is spent on big-ticket purchases.',
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const handlePrev = () => {
		setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className="py-24 border-t py-10 border-neutral-700">
			<h2 className="text-3xl font-semibold text-center mb-8 text-white">
				Explore Our Mobile App
			</h2>
			<div className="relative max-w-6xl mx-auto">
				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-500"
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					>
						{screenshots.map((item, index) => (
							<div
								key={index}
								className="min-w-full flex flex-col items-center px-4"
							>
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-auto mb-6 max-w-lg md:max-w-2xl lg:max-w-3xl"
								/>
								<h3 className="text-2xl font-bold mb-2 text-white">
									{item.title}
								</h3>
								<p className="text-neutral-300 text-center">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
				<button
					onClick={handlePrev}
					className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md focus:outline-none"
					aria-label="Previous Slide"
					tabIndex="0"
				>
					&#8592;
				</button>
				<button
					onClick={handleNext}
					className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md focus:outline-none"
					aria-label="Next Slide"
					tabIndex="0"
				>
					&#8594;
				</button>
				<div className="flex justify-center mt-6 space-x-2">
					{screenshots.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full ${
								currentSlide === index ? 'bg-green-600' : 'bg-gray-500'
							}`}
							aria-label={`Slide ${index + 1}`}
							tabIndex="0"
						></button>
					))}
				</div>
			</div>
		</section>
	);
};

export default MobileAppFeatureSection;
