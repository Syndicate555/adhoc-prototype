import {
	Accessibility,
	Activity,
	AlertCircle,
	Award,
	Bell,
	Bot,
	Briefcase,
	Camera,
	Cloud,
	DollarSign,
	FileText,
	Gift,
	Globe,
	Layers,
	Leaf,
	Link,
	List,
	Lock,
	MessageCircle,
	PieChart,
	Receipt,
	RotateCcw,
	Share,
	Share2,
	ShieldCheck,
	Sliders,
	Tag,
	TrendingUp,
	Wallet,
	WifiOff,
} from 'lucide-react';

import {
	discordBlack,
	facebook,
	instagram,
	telegram,
	twitter,
	notification2,
	notification3,
	homeSmile,
	file02,
	searchMd,
	plusSquare,
	notification4,
} from '../assets';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
	{ label: 'Features', href: '#' },
	{ label: 'Company', href: '#' },
	{ label: 'Blogs', href: '#' },
	{ label: 'Testimonials', href: '#' },
];

export const testimonials = [
	{
		user: 'John Doe',
		company: 'Stellar Solutions',
		image: user1,
		text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
	},
];

export const features = [
	{
		icon: <Receipt />,
		text: 'Centralized Digital Receipts',
		description:
			'Store all your receipts in one secure place with detailed, itemized data for every purchase, eliminating paper clutter and making retrieval effortless.',
	},
	{
		icon: <Activity />,
		text: 'AI-Driven Insights',
		description:
			'Leverage advanced AI algorithms to analyze your spending habits, providing personalized insights that help you make smarter financial decisions.',
	},
	{
		icon: <Wallet />,
		text: 'Personal Finance Management',
		description:
			'Set budgets, track spending, and monitor expenses across categories and vendors, all within a single intuitive app.',
	},
	{
		icon: <Bot />,
		text: 'Personalized AI Assistant',
		description:
			'Receive tailored financial advice from an AI assistant that understands your unique spending patterns and goals.',
	},
	{
		icon: <Leaf />,
		text: 'Eco-Friendly Solution',
		description:
			'Contribute to a greener planet by eliminating paper receipts, reducing waste, and lowering carbon emissions associated with paper production.',
	},
	{
		icon: <Gift />,
		text: 'Rewards and Incentives',
		description:
			'Earn points for using Platen, redeemable for monetary value through various gift cards, incentivizing you to keep track of your purchases.',
	},
	{
		icon: <Camera />,
		text: 'Easy Receipt Uploads',
		description:
			'Add receipts manually by taking a picture, ensuring no purchase goes untracked—even from vendors not yet integrated with Platen.',
	},
	{
		icon: <Tag />,
		text: 'Personalized Vendor Offers',
		description:
			'Receive custom discounts and promotions from vendors based on your purchase history, helping you save money on products you love.',
	},
	{
		icon: <PieChart />,
		text: 'Comprehensive Spending Analytics',
		description:
			'Visualize your expenses with interactive charts and graphs, giving you a clear picture of where your money goes.',
	},
	{
		icon: <Globe />,
		text: 'Environmental Impact Tracker',
		description:
			'Track and quantify your environmental impact by choosing digital, turning sustainable choices into measurable achievements.',
	},
	{
		icon: <ShieldCheck />,
		text: 'Secure Data Storage',
		description:
			'Benefit from top-notch security protocols that protect your financial data, ensuring your information remains private and secure.',
	},
	{
		icon: <Bell />,
		text: 'Smart Notifications',
		description:
			'Stay informed with timely notifications about upcoming bills, expiring warranties, or when items you’ve purchased go on sale.',
	},
	{
		icon: <List />,
		text: 'Expense Categorization',
		description:
			'Automatically categorize your expenses for easier tracking and budgeting, making financial management more streamlined than ever.',
	},
	{
		icon: <FileText />,
		text: 'Tax Preparation Assistance',
		description:
			'Simplify tax season with organized receipts and categorized expenses, making it easier to claim deductions and prepare your returns.',
	},
	{
		icon: <TrendingUp />,
		text: 'Price Comparison',
		description:
			'Compare prices of items between different vendors to ensure you always get the best deal.',
	},
	{
		icon: <RotateCcw />,
		text: 'Return and Warranty Tracking',
		description:
			'Keep track of purchase dates and warranty periods, making returns and warranty claims hassle-free.',
	},
	{
		icon: <Briefcase />,
		text: 'Business Expense Management',
		description:
			'Easily tag and separate personal and business expenses, simplifying reimbursements and accounting for freelancers and professionals.',
	},
	{
		icon: <Sliders />,
		text: 'Customizable Budgeting Tools',
		description:
			'Tailor your budgeting experience with customizable categories and limits that fit your unique financial situation.',
	},
	{
		icon: <Lock />,
		text: 'User Privacy Controls',
		description:
			'Have full control over your data with robust privacy settings, allowing you to decide what information is shared and with whom.',
	},
	{
		icon: <Award />,
		text: 'Gamification Elements',
		description:
			'Engage with your finances through gamified experiences that make managing money fun and rewarding.',
	},
	{
		icon: <Link />,
		text: 'Seamless Vendor Integration',
		description:
			'Enjoy a seamless shopping experience with direct integration at point-of-sale terminals, eliminating the need for paper receipts entirely.',
	},
	{
		icon: <Cloud />,
		text: 'Cloud Synchronization',
		description:
			'Access your receipts and financial data from any device with automatic cloud synchronization.',
	},
	{
		icon: <Share />,
		text: 'Data Export and Sharing',
		description:
			'Export your financial data in various formats to share with accountants or import into other financial software.',
	},
	{
		icon: <DollarSign />,
		text: 'Multi-Currency Support',
		description:
			'Track purchases and manage expenses in multiple currencies, ideal for travelers and international shoppers.',
	},
	{
		icon: <Accessibility />,
		text: 'Accessibility Features',
		description:
			'Designed with inclusivity in mind, offering features that make the app usable for people with disabilities.',
	},
	{
		icon: <Layers />,
		text: 'Integration with Financial Apps',
		description:
			'Sync Platen with other financial applications and services for a holistic view of your finances.',
	},
	{
		icon: <MessageCircle />,
		text: 'Customer Support Chatbot',
		description:
			'Get instant assistance with any queries or issues through an integrated customer support chatbot.',
	},
	{
		icon: <AlertCircle />,
		text: 'Smart Purchase Alerts',
		description:
			'Receive alerts when items you frequently purchase are on sale, maximizing your savings.',
	},
	{
		icon: <Share2 />,
		text: 'Social Sharing',
		description:
			'Share your eco-friendly achievements and savings milestones with friends and family on social media.',
	},
	{
		icon: <WifiOff />,
		text: 'Offline Access',
		description:
			'Access your stored receipts and financial data even without an internet connection.',
	},
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const socials = [
	{
		id: '0',
		title: 'Discord',
		iconUrl: discordBlack,
		url: '#',
	},
	{
		id: '1',
		title: 'Twitter',
		iconUrl: twitter,
		url: '#',
	},
	{
		id: '2',
		title: 'Instagram',
		iconUrl: instagram,
		url: '#',
	},
	{
		id: '3',
		title: 'Telegram',
		iconUrl: telegram,
		url: '#',
	},
	{
		id: '4',
		title: 'Facebook',
		iconUrl: facebook,
		url: '#',
	},
];

export const pricingOptions = [
	{
		title: 'Free',
		price: '$0',
		features: [
			'Private board sharing',
			'5 Gb Storage',
			'Web Analytics',
			'Private Mode',
		],
	},
	{
		title: 'Pro',
		price: '$10',
		features: [
			'Private board sharing',
			'10 Gb Storage',
			'Web Analytics (Advance)',
			'Private Mode',
		],
	},
	{
		title: 'Enterprise',
		price: '$200',
		features: [
			'Private board sharing',
			'Unlimited Storage',
			'High Performance Network',
			'Private Mode',
		],
	},
];

export const resourcesLinks = [
	{ href: '#', text: 'Getting Started' },
	{ href: '#', text: 'Documentation' },
	{ href: '#', text: 'Tutorials' },
	{ href: '#', text: 'API Reference' },
	{ href: '#', text: 'Community Forums' },
];

export const platformLinks = [
	{ href: '#', text: 'Features' },
	{ href: '#', text: 'Supported Devices' },
	{ href: '#', text: 'System Requirements' },
	{ href: '#', text: 'Downloads' },
	{ href: '#', text: 'Release Notes' },
];

export const communityLinks = [
	{ href: '#', text: 'Events' },
	{ href: '#', text: 'Meetups' },
	{ href: '#', text: 'Conferences' },
	{ href: '#', text: 'Hackathons' },
	{ href: '#', text: 'Jobs' },
];
