import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const InsightsSummary = ({ insights, handleReset }) => {
	const pieChartRef = useRef(null);
	const barChartRef = useRef(null);

	useEffect(() => {
		return () => {
			if (pieChartRef.current) {
				pieChartRef.current.destroy();
			}
			if (barChartRef.current) {
				barChartRef.current.destroy();
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

	return (
		<motion.section
			className="container mx-auto px-4 my-10"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<motion.h3
				className="text-4xl font-bold text-gray-800 mb-10 text-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 1 }}
			>
				Insights Summary
			</motion.h3>

			{/* Spending by Category Pie Chart */}
			<motion.div
				className="chart-container my-8 bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 1 }}
			>
				<h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
					Spending by Category
				</h4>
				<Pie
					ref={pieChartRef}
					data={{
						labels: insights.spendingByCategory.map(
							(category) => category.category
						),
						datasets: [
							{
								data: insights.spendingByCategory.map(
									(category) => category.totalSpent
								),
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
					}}
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
					data={{
						labels: insights.spendingByVendor.map((vendor) => vendor.vendor),
						datasets: [
							{
								label: 'Total Spent',
								data: insights.spendingByVendor.map(
									(vendor) => vendor.totalSpent
								),
								backgroundColor: '#3b82f6',
							},
						],
					}}
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

			{/* Top Line Items - Structured Table */}
			<motion.div
				className="chart-container my-8 bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 1 }}
			>
				<h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
					Top Purchases
				</h4>
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white border border-gray-300 rounded-md">
						<thead className="bg-gray-200">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
									Line Item
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
									Quantity
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
									Total Spent ($)
								</th>
							</tr>
						</thead>
						<tbody>
							{insights.topLineItems.map((item, index) => (
								<tr
									key={index}
									className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
								>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
										{item.title}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
										{item.quantity}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
										${item.totalSpent.toFixed(2)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</motion.div>
			<br />
			{/* Try it again Button - Repositioned and Improved Styling */}
			<div className="flex justify-center mt-12">
				<button
					onClick={handleReset}
					className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
				>
					Try it again with another batch of receipts
				</button>
			</div>
		</motion.section>
	);
};

export default InsightsSummary;
