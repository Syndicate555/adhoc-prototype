import Lottie from 'lottie-react';
import phoneAnimation from '../assets/lottie/phone.json';

const HeroSectionProd = ({ handleScrollToDemo, setIsWaitlistModalOpen }) => {
	const handleJoinWaitlistClick = () => {
		setIsWaitlistModalOpen(true);
	};

	return (
		<section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-16 relative bg-transparent">
			<div className="absolute inset-0 bg-gradient-to-b from-neutral-1100 to-transparent z-0"></div>

			<div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 space-y-6">
				<h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide font-extrabold leading-tight">
					Your Receipts
					<br />
					<span className="bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text">
						Organized
					</span>{' '}
					<span className="text-green-600">Analyzed</span>
					<br />
					<span className="text-green-400">Optimized!</span>
				</h1>
				<p className="mt-6 text-lg lg:text-xl text-neutral-400 max-w-lg lg:max-w-md leading-relaxed">
					Transform every purchase into actionable insights with Platen.
					Centralize your digital receipts, harness AI-driven analytics, and
					contribute to a greener planet—all in one intuitive app.
				</p>
				<div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 space-y-4 sm:space-y-0">
					<button
						onClick={handleScrollToDemo}
						className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white font-semibold transition-transform transform hover:scale-105 shadow-md"
						aria-label="Try it out"
					>
						Try it out!
					</button>
					<button
						onClick={handleJoinWaitlistClick}
						className="py-3 px-6 rounded-md border border-neutral-400 text-white font-semibold transition-transform transform hover:scale-105 hover:border-neutral-200"
						aria-label="Join the waitlist"
					>
						Join the waitlist
					</button>
				</div>
			</div>

			{/* Right Side - Animation */}
			<div className="flex-1 mt-10 lg:mt-0 lg:ml-12 relative z-10">
				<div className="w-full max-w-md lg:max-w-lg mx-auto">
					<Lottie
						animationData={phoneAnimation}
						className="shadow-lg rounded-lg transform hover:scale-105 transition-transform"
					/>
				</div>
				{/* Floating Decorative Elements */}
				<div className="absolute -top-10 -left-10 w-32 h-32 bg-green-500 opacity-20 blur-3xl rounded-full"></div>
				<div className="absolute -bottom-16 -right-16 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>
			</div>
		</section>
	);
};

export default HeroSectionProd;
