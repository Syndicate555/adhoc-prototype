import React, { useRef } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const SpendingByVendorChart = ({ spendingByVendor, sx }) => {
	const barChartRef = useRef(null);

	// Dynamic height adjustment based on the number of vendors
	const chartHeight = spendingByVendor.length > 10 ? 800 : 600;

	return (
		<Card sx={{ height: '100%' }}>
			<CardContent>
				<Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
					Spending by Vendor
				</Typography>
				<br />
				<Box sx={{ position: 'relative', height: `${chartHeight}px` }}>
					<Bar
						ref={barChartRef}
						data={{
							labels: spendingByVendor.map((vendor) => vendor.vendor),
							datasets: [
								{
									label: 'Total Spent',
									data: spendingByVendor.map((vendor) => vendor.totalSpent),
									backgroundColor: '#3b82f6',
								},
							],
						}}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							plugins: {
								legend: { display: false },
							},
							scales: {
								x: {
									ticks: {
										autoSkip: false,
										maxRotation: spendingByVendor.length > 10 ? 90 : 45,
										minRotation: 0,
									},
								},
								y: {
									beginAtZero: true,
									ticks: {
										stepSize: Math.ceil(
											Math.max(...spendingByVendor.map((v) => v.totalSpent)) /
												10
										),
									},
								},
							},
						}}
					/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default SpendingByVendorChart;
