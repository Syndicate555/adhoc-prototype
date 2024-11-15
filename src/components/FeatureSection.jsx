import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper's core CSS
import 'swiper/css/effect-coverflow'; // Import styles for 3D coverflow effect
import 'swiper/css/navigation'; // Import styles for navigation (arrows)
import 'swiper/css/pagination'; // Import styles for pagination (dots)
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { features } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeatureSection = () => {
	return (
		<div className="relative mt-20 border-b border-neutral-800 min-h-[800px] pb-20">
			<div className="text-center">
				<span className="bg-neutral-900 text-orange-500 rounded-full h-10 text-lg font-medium px-2 py-1 uppercase">
					Feature
				</span>
				<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
					Easily store{' '}
					<span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
						your Receipts
					</span>
				</h2>
			</div>
			<div className="relative mt-10 lg:mt-20 max-w-6xl mx-auto px-4">
				{/* Adjusted Swiper to show only three cards */}
				<Swiper
					modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
					effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={3}
					coverflowEffect={{
						rotate: 30,
						stretch: 10,
						depth: 150,
						modifier: 1,
						slideShadows: false,
					}}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 3000, // Set interval for autoplay
						disableOnInteraction: false,
					}}
					className="w-full pb-20" // Added padding-bottom to ensure enough spacing between swiper and pagination
				>
					{features.map((feature, index) => (
						<SwiperSlide key={index} className="p-10">
							<div
								className="bg-neutral-800 p-8 rounded-3xl shadow-xl flex flex-col items-center"
								style={{ minHeight: '400px' }} // Standardized height for all cards
							>
								<div className="w-20 h-20 p-4 mb-4 bg-neutral-900 text-orange-700 flex justify-center items-center rounded-full">
									{feature.icon}
								</div>
								<h5 className="text-xl font-semibold text-center mb-4">
									{feature.text}
								</h5>
								<p className="text-md text-neutral-500 text-center">
									{feature.description}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Navigation buttons repositioned */}
				<div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-4">
					<ChevronLeft
						size={40}
						className="text-neutral-500 hover:text-white transition-colors"
					/>
				</div>
				<div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-4">
					<ChevronRight
						size={40}
						className="text-neutral-500 hover:text-white transition-colors"
					/>
				</div>

				{/* Increased spacing between swiper and pagination */}
				<div className="swiper-pagination mt-16"></div>
			</div>
		</div>
	);
};

export default FeatureSection;
