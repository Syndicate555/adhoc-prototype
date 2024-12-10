import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { features } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeatureSection = () => {
	return (
		<section className="mt-20 border-t py-10 border-neutral-700">
			<div className="relative mt-20 border-b border-neutral-800 min-h-[800px] pb-20">
				<div className="text-center">
					<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
						Easily store{' '}
						<span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
							your Receipts
						</span>
					</h2>
				</div>
				<div className="relative mt-10 lg:mt-20 max-w-6xl mx-auto px-4">
					<Swiper
						modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
						effect="coverflow"
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={1} // Default for smaller screens
						coverflowEffect={{
							rotate: 30,
							stretch: 0, // No excessive stretching for a clean look
							depth: 100,
							modifier: 1,
							slideShadows: false,
						}}
						breakpoints={{
							640: {
								slidesPerView: 1.2, // Slight overlap for mobile
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 2, // Tablets
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 2, // Laptops
								spaceBetween: 30,
							},
							1440: {
								slidesPerView: 3, // Larger desktops
								spaceBetween: 30,
							},
						}}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						pagination={{ clickable: true }}
						loop={true}
						autoplay={{
							delay: 5000, // Set interval for autoplay
							disableOnInteraction: false,
						}}
						className="w-full pb-20"
					>
						{features.map((feature, index) => (
							<SwiperSlide key={index} className="p-5 md:p-8 lg:p-6">
								<div
									className="bg-neutral-800 p-6 md:p-10 rounded-3xl shadow-lg flex flex-col items-center"
									style={{
										minHeight: '400px', // Standardized height to ensure consistency across cards
										width: '100%',
										maxWidth: '380px', // To prevent over-stretching
									}}
								>
									<div className="w-16 h-16 p-3 md:w-20 md:h-20 md:p-4 mb-4 bg-neutral-900 text-orange-700 flex justify-center items-center rounded-full">
										{feature.icon}
									</div>
									<h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-3 lg:mb-5">
										{feature.text}
									</h5>
									<p className="text-sm md:text-md lg:text-lg text-neutral-400 text-center leading-relaxed">
										{feature.description}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Navigation buttons repositioned */}
					<div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-4">
						<ChevronLeft
							size={30} // Adjusted size for mobile friendliness
							className="text-neutral-500 hover:text-white transition-colors"
						/>
					</div>
					<div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-4">
						<ChevronRight
							size={30} // Adjusted size for mobile friendliness
							className="text-neutral-500 hover:text-white transition-colors"
						/>
					</div>

					{/* Increased spacing between swiper and pagination */}
					<div className="swiper-pagination mt-10 sm:mt-16"></div>
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;
