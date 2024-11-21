const HeroSectionProd = ({ handleScrollToDemo }) => {
	return (
		<section className="flex-1 flex flex-col items-center justify-start text-center pt-4">
			<div className="flex flex-col items-center mt-6 lg:mt-20">
				<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
					Your Receipts. Organized, Analyzed,
					<span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
						{' '}
						Optimized.
					</span>
				</h1>
				<p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
					Transform every purchase into actionable insights with Platen.
					Centralize your digital receipts, harness AI-driven analytics, and
					contribute to a greener planet—all in one intuitive app.
				</p>
				<div className="flex justify-center my-10">
					<button
						onClick={handleScrollToDemo} // Updated from <a> to <button> for better handling
						className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white font-semibold transition-transform transform hover:scale-105"
					>
						Try it out!
					</button>
					<a
						href="#"
						className="py-3 px-4 mx-3 rounded-md border text-neutral-700 font-semibold"
					>
						Join the waitlist
					</a>
				</div>
				{/* <div className="flex mt-10 justify-center">
				<video
					autoPlay
					loop
					muted
					className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4"
				>
					<source src={video1} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<video
					autoPlay
					loop
					muted
					className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4"
				>
					<source src={video2} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div> */}
			</div>
		</section>
	);
};

export default HeroSectionProd;
