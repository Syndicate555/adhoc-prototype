import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	Box,
	Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const InsightsSummary = ({ insights, handleReset }) => {
	const pieChartRef = useRef(null);
	const barChartRef = useRef(null);

	// To avoid unhandled reference errors with charts, add null checks
	useEffect(() => {
		return () => {
			if (pieChartRef.current?.chartInstance) {
				pieChartRef.current.chartInstance.destroy();
			}
			if (barChartRef.current?.chartInstance) {
				barChartRef.current.chartInstance.destroy();
			}
		};
	}, [insights]);

	if (!insights) {
		return null; // Don't render anything if insights are not ready
	}

	return (
		<motion.section
			className="container mx-auto px-4 my-10"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			{/* Dashboard Header */}
			<Typography
				variant="h3"
				gutterBottom
				sx={{ fontWeight: 'bold', textAlign: 'center' }}
			>
				Receipt Insights Dashboard
			</Typography>
			<Typography
				variant="subtitle1"
				sx={{ textAlign: 'center', marginBottom: 4 }}
			>
				Get an overview of your spending based on your uploaded receipts.
			</Typography>

			{/* Summary Cards */}
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={4}>
					<Card>
						<CardContent>
							<Typography variant="h6" color="textSecondary">
								Total Spent
							</Typography>
							<Typography variant="h4" color="primary">
								{insights.totalSpent
									? `$${insights.totalSpent.toFixed(2)}`
									: '$0.00'}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card>
						<CardContent>
							<Typography variant="h6" color="textSecondary">
								Total Transactions
							</Typography>
							<Typography variant="h4" color="primary">
								{insights.totalTransactions || 0}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card>
						<CardContent>
							<Typography variant="h6" color="textSecondary">
								Unique Vendors
							</Typography>
							<Typography variant="h4" color="primary">
								{insights.uniqueVendors || 0}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			{/* Spending by Category Pie Chart */}
			<Card sx={{ my: 4 }}>
				<CardContent>
					<Typography variant="h5" gutterBottom>
						Spending by Category
					</Typography>
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
								},
							],
						}}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							devicePixelRatio: window.devicePixelRatio || 1, // Set devicePixelRatio to improve quality
							plugins: {
								legend: {
									position: 'bottom',
								},
							},
						}}
						style={{ maxHeight: '400px' }}
					/>
				</CardContent>
			</Card>

			{/* Spending by Vendor Bar Chart */}
			<Card sx={{ my: 4 }}>
				<CardContent>
					<Typography variant="h5" gutterBottom>
						Spending by Vendor
					</Typography>
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
							devicePixelRatio: window.devicePixelRatio || 1, // Set devicePixelRatio to improve quality
							plugins: {
								legend: { display: false },
							},
							scales: {
								x: { ticks: { maxRotation: 90, minRotation: 45 } },
								y: { beginAtZero: true },
							},
						}}
						style={{ maxHeight: '400px' }}
					/>
				</CardContent>
			</Card>

			{/* Top Line Items Data Grid */}
			<Card sx={{ my: 4 }}>
				<CardContent>
					<Typography variant="h5" gutterBottom>
						Top Purchases
					</Typography>
					<DataGrid
						rows={insights.topLineItems.map((item, index) => ({
							id: index,
							title: item.title,
							quantity: item.quantity,
							totalSpent: `$${item.totalSpent.toFixed(2)}`,
						}))}
						columns={[
							{ field: 'title', headerName: 'Item', flex: 1 },
							{ field: 'quantity', headerName: 'Quantity', flex: 1 },
							{ field: 'totalSpent', headerName: 'Total Spent', flex: 1 },
						]}
						autoHeight
						pageSize={5}
					/>
				</CardContent>
			</Card>

			{/* Try it again Button */}
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
				<Button
					onClick={handleReset}
					variant="contained"
					color="primary"
					size="large"
				>
					Try it again with another batch of receipts
				</Button>
			</Box>
		</motion.section>
	);
};

export default InsightsSummary;
