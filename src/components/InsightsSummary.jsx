import React, { useEffect, useRef } from 'react';
import {
	Chart,
	PointElement,
	LineElement,
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';

Chart.register(
	PointElement,
	LineElement,
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	ArcElement
);

const InsightsSummary = ({ insights, handleReset }) => {
	const pieChartRef = useRef(null);
	const barChartRef = useRef(null);

	useEffect(() => {
		// Clean up on unmount
		return () => {
			if (pieChartRef.current && pieChartRef.current.chartInstance) {
				pieChartRef.current.chartInstance.destroy();
			}
			if (barChartRef.current && barChartRef.current.chartInstance) {
				barChartRef.current.chartInstance.destroy();
			}
		};
	}, [insights]);

	if (!insights) {
		return null;
	}

	if (
		!insights.spendingByCategory ||
		!insights.spendingByVendor ||
		!insights.topLineItems ||
		!Array.isArray(insights.spendingByCategory) ||
		!Array.isArray(insights.spendingByVendor) ||
		!Array.isArray(insights.topLineItems)
	) {
		return (
			<p className="text-center text-red-500 my-10">Invalid insights data.</p>
		);
	}

	// Dummy data for charts as a fallback in case insights data is not available
	const dummySpendingByCategory = [
		{ category: 'Groceries', totalSpent: 120.5 },
		{ category: 'Transportation', totalSpent: 75.8 },
		{ category: 'Entertainment', totalSpent: 50.3 },
		{ category: 'Utilities', totalSpent: 80.6 },
	];

	const dummySpendingByVendor = [
		{ vendor: 'Walmart', totalSpent: 150.0 },
		{ vendor: 'Amazon', totalSpent: 95.4 },
		{ vendor: 'Netflix', totalSpent: 20.0 },
	];

	// Pie Chart Data Configuration
	const pieChartData = {
		labels:
			insights?.spendingByCategory?.map((category) => category.category) ||
			dummySpendingByCategory.map((category) => category.category),
		datasets: [
			{
				data:
					insights?.spendingByCategory?.map(
						(category) => category.totalSpent
					) || dummySpendingByCategory.map((category) => category.totalSpent),
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#4BC0C0',
					'#9966FF',
					'#FF9F40',
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#4BC0C0',
					'#9966FF',
					'#FF9F40',
				],
			},
		],
	};

	// Bar Chart Data Configuration
	const barChartData = {
		labels:
			insights?.spendingByVendor?.map((vendor) => vendor.vendor) ||
			dummySpendingByVendor.map((vendor) => vendor.vendor),
		datasets: [
			{
				label: 'Total Spent',
				data:
					insights?.spendingByVendor?.map((vendor) => vendor.totalSpent) ||
					dummySpendingByVendor.map((vendor) => vendor.totalSpent),
				backgroundColor: '#3b82f6',
			},
		],
	};

	// Placeholder data for the rest of the dashboard
	const totalSpent = 950.25;
	const totalTransactions = 120;
	const uniqueVendors = 15;

	return (
		<motion.section
			className="container mx-auto px-6 my-10"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			{/* KPI Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
				<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
					<h4 className="text-xl font-bold text-gray-700">Total Spent</h4>
					<p className="text-3xl font-semibold text-blue-600 mt-2">
						${totalSpent.toFixed(2)}
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
					<h4 className="text-xl font-bold text-gray-700">
						Total Transactions
					</h4>
					<p className="text-3xl font-semibold text-blue-600 mt-2">
						{totalTransactions}
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
					<h4 className="text-xl font-bold text-gray-700">Unique Vendors</h4>
					<p className="text-3xl font-semibold text-blue-600 mt-2">
						{uniqueVendors}
					</p>
				</div>
			</div>

			{/* Spending by Category Pie Chart */}
			<motion.div
				className="chart-container bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform my-8"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 1 }}
			>
				<h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
					Spending by Category
				</h4>
				<Pie
					ref={pieChartRef}
					data={pieChartData}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							legend: {
								position: 'bottom',
								labels: {
									boxWidth: 20,
									padding: 10,
								},
							},
						},
					}}
					style={{ maxHeight: '400px' }}
				/>
			</motion.div>

			{/* Spending by Vendor Bar Chart */}
			<motion.div
				className="chart-container my-8 bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6, duration: 1 }}
			>
				<h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
					Spending by Vendor
				</h4>
				<Bar
					ref={barChartRef}
					data={barChartData}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							legend: {
								display: false,
							},
						},
						scales: {
							x: {
								ticks: {
									maxRotation: 90,
									minRotation: 45,
								},
							},
							y: {
								beginAtZero: true,
							},
						},
					}}
					style={{ maxHeight: '400px' }}
				/>
			</motion.div>
			<br />
			{/* Try it again Button */}
			<div className="flex justify-center mt-10">
				<button
					onClick={handleReset}
					className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
				>
					Try it again with another batch of receipts
				</button>
			</div>
		</motion.section>
	);
};

export default InsightsSummary;
