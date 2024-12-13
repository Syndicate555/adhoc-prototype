import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';

const Navbar = ({ handleScrollToDemo }) => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	};

	return (
		<nav className="sticky top-6 z-50 py-5 rounded-full mx-auto w-[90%] max-w-[1250px] shadow-lg bg-[rgba(43,45,66,0.7)] backdrop-blur-sm relative transition-all duration-300 hover:shadow-xl">
			<div className="flex justify-between items-center px-6">
				{/* Logo */}
				<div className="flex items-center space-x-3">
					<img className="h-14 w-12" src={logo} alt="Logo" />
					<span className="text-xl font-bold tracking-tight text-white">
						Platen
					</span>
				</div>

				{/* Desktop Navigation */}
				<ul className="hidden lg:flex space-x-8 items-center">
					{navItems.map((item, index) => (
						<li key={index}>
							<a
								href={item.href}
								className="text-white font-medium text-lg transition-all duration-200 transform hover:text-green-400 hover:scale-105 hover:underline underline-offset-4 decoration-green-400"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				{/* Desktop CTAs */}
				<div className="hidden lg:flex space-x-4">
					<a
						href="#"
						className="py-2 px-6 border border-white text-white rounded-full text-lg font-medium transition-all duration-200 transform hover:bg-white hover:text-black hover:scale-105"
					>
						Demo
					</a>
					<button
						onClick={handleScrollToDemo}
						className="py-2 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-medium transition-all duration-200 transform hover:opacity-90 hover:scale-105"
					>
						Try it out!
					</button>
				</div>

				{/* Mobile Menu Button */}
				<div className="lg:hidden">
					<button
						onClick={toggleNavbar}
						className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
					>
						{mobileDrawerOpen ? (
							<X className="text-white w-6 h-6" />
						) : (
							<Menu className="text-white w-6 h-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Drawer (Dropdown Panel) */}
			{mobileDrawerOpen && (
				<div className="absolute top-[110%] right-6 w-64 rounded-xl bg-[rgba(43,45,66,0.95)] backdrop-blur-sm text-white p-6 flex flex-col space-y-4 z-50 shadow-lg border border-white/10">
					{/* Navigation Links */}
					<ul className="flex flex-col space-y-4">
						{navItems.map((item, index) => (
							<li key={index} className="text-lg font-medium">
								<a
									href={item.href}
									className="transition-all duration-200 transform hover:text-green-400 hover:scale-105 hover:underline underline-offset-4 decoration-green-400"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>

					<div className="border-t border-white/20 pt-4 flex flex-col space-y-4">
						{/* Close Button */}
						<button
							onClick={toggleNavbar}
							className="text-white text-center text-lg font-medium transition-all duration-200 transform hover:text-green-400 hover:scale-105"
						>
							X
						</button>

						{/* CTA Button */}
						<button
							onClick={handleScrollToDemo}
							className="py-2 w-full text-center bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:opacity-90 transition-all duration-200 transform hover:scale-105 text-lg font-medium"
						>
							Try it out!
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
