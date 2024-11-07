import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const InsightsSummary = ({ insights }) => {
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
		return null; // Do not render anything if there are no insights.
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
		<section className="container mx-auto px-4 my-10">
			<h3 className="text-3xl font-semibold text-gray-800 mb-6">
				Insights Summary
			</h3>

			{/* Spending by Category Pie Chart */}
			<div className="chart-container my-8">
				<h4 className="text-2xl font-bold text-gray-700 mb-4">
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
			</div>

			{/* Spending by Vendor Bar Chart */}
			<div className="chart-container my-8">
				<h4 className="text-2xl font-bold text-gray-700 mb-4">
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
			</div>

			{/* Top Line Items */}
			<div className="chart-container my-8">
				<h4 className="text-2xl font-bold text-gray-700 mb-4">
					Top Line Items
				</h4>
				<ul className="list-disc list-inside">
					{insights.topLineItems.map((item, index) => (
						<li key={index} className="text-lg text-gray-700">
							{item.title} - Quantity: {item.quantity}, Total Spent: $
							{item.totalSpent.toFixed(2)}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default InsightsSummary;
