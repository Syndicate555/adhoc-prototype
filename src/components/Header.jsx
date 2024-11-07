import React from 'react';

const Header = () => {
	return (
		<header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-lg">
			<div className="container mx-auto flex justify-between items-center px-4">
				<h1 className="text-2xl font-bold">Platen Receipt Insight Generator</h1>
				<nav>
					<ul className="flex space-x-6 text-lg">
						<li>
							<a href="#home" className="hover:underline">
								Home
							</a>
						</li>
						<li>
							<a href="#features" className="hover:underline">
								Features
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
