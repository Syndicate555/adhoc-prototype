import React, { useEffect, useState } from 'react';
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
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DiscountIcon from '@mui/icons-material/Discount';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SummaryCard from './components/SummayCard';
import ParentCategoryDropdown from './components/ParentCategoryDropdown';
import SpendingByPieChart from './components/SpendingByPieChart';
import SpendingByVendorChart from './components/SpendingByVendorChart';
import { handleExport } from '../../utilities/utils';

const InsightsSummary = ({ insights, handleReset }) => {
	const [selectedParentCategory, setSelectedParentCategory] = useState('');

	// Extract data for charts
	const parentCategories =
		insights?.spendingByParentCategory?.map(
			(category) => category.parent_category
		) || [];

	const spendingByParentCategoryLabels =
		insights?.spendingByParentCategory?.map((item) => item.parent_category) ||
		[];

	const spendingByParentCategoryValues =
		insights?.spendingByParentCategory?.map((item) => item.totalSpent) || [];

	const filteredSpendingByCategory =
		insights?.spendingByCategory?.filter(
			(category) => category.parent_category === selectedParentCategory
		) || [];

	const spendingByCategoryLabels = filteredSpendingByCategory.map(
		(category) => category.category
	);
	const spendingByCategoryValues = filteredSpendingByCategory.map(
		(category) => category.totalSpent
	);

	useEffect(() => {
		// Set default selected category if available
		if (parentCategories.length > 0 && !selectedParentCategory) {
			setSelectedParentCategory(parentCategories[0]);
		}
	}, [parentCategories, selectedParentCategory]);

	if (!insights) {
		return null;
	}

	const handleCSVExport = () => {
		return handleExport(insights);
	};

	// Handle parent category change
	const handleParentCategoryChange = (event) => {
		setSelectedParentCategory(event.target.value);
	};

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
				sx={{
					fontWeight: 'bold',
					textAlign: 'center',
					color: '#ffffff', // Updated text color for dark theme
				}}
			>
				Receipt Insights Dashboard
			</Typography>
			<Typography
				variant="subtitle1"
				sx={{ textAlign: 'center', marginBottom: 4, color: '#cbd5e1' }} // Lighter text color for better contrast
			>
				Get an overview of your spending based on your uploaded receipts.
			</Typography>

			{/* Summary Cards */}
			<Grid container spacing={4} justifyContent="center">
				<SummaryCard
					title="Total Spent"
					value={
						insights.totalSpending
							? `$${insights.totalSpending.toFixed(2)}`
							: '$0.00'
					}
					icon={
						<MonetizationOnIcon
							sx={{ color: '#22c55e' }} // Bright green for visibility
							fontSize="large"
						/>
					}
					cardColor="bg-neutral-900" // Dark card background
				/>
				<SummaryCard
					title="Total Transactions"
					value={insights.totalReceipts || 0}
					icon={
						<ReceiptIcon
							sx={{ color: '#3b82f6' }} // Bright blue icon
							fontSize="large"
						/>
					}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Unique Vendors"
					value={insights.totalUniqueVendors || 0}
					icon={
						<StoreIcon
							sx={{ color: '#f59e0b' }} // Bright orange for contrast
							fontSize="large"
						/>
					}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Total Products Purchased"
					value={insights.totalLineItems || 0}
					icon={
						<ShoppingCartIcon
							sx={{ color: '#f97316' }} // Vibrant orange
							fontSize="large"
						/>
					}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Total Discount Collected"
					value={
						insights.totalDiscounts
							? `$${insights.totalDiscounts.toFixed(2)}`
							: '$0.00'
					}
					icon={
						<DiscountIcon
							sx={{ color: '#e11d48' }} // Red for emphasis
							fontSize="large"
						/>
					}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Average Spent per Transaction"
					value={
						insights.averageSpendingPerTransaction
							? `$${insights.averageSpendingPerTransaction.toFixed(2)}`
							: '$0.00'
					}
					icon={
						<AccountBalanceWalletIcon
							sx={{ color: '#a855f7' }} // Purple for variety
							fontSize="large"
						/>
					}
					cardColor="bg-neutral-900"
				/>
			</Grid>

			{/* Parent Category Dropdown */}
			{parentCategories.length > 0 && (
				<ParentCategoryDropdown
					parentCategories={parentCategories}
					selectedParentCategory={selectedParentCategory}
					handleParentCategoryChange={handleParentCategoryChange}
				/>
			)}

			{/* Pie Charts Section */}
			<Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
				<Grid item xs={12} md={6}>
					<SpendingByPieChart
						chartTitle="Spending by Parent Category"
						dataLabels={spendingByParentCategoryLabels}
						dataValues={spendingByParentCategoryValues}
						backgroundColor="#1f2937" // Dark background for the pie chart
						textColor="#ffffff" // White text for visibility
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<SpendingByPieChart
						chartTitle={`Spending by Category: ${selectedParentCategory}`}
						dataLabels={spendingByCategoryLabels}
						dataValues={spendingByCategoryValues}
						backgroundColor="#1f2937"
						textColor="#ffffff"
					/>
				</Grid>
			</Grid>

			{/* Spending by Vendor Bar Chart */}
			<Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
				<Grid item xs={12}>
					<SpendingByVendorChart
						spendingByVendor={insights.spendingByVendor}
						backgroundColor="#1f2937"
						textColor="#ffffff"
						titleAlign="center"
					/>
				</Grid>
			</Grid>

			{/* Top Line Items Data Grid */}
			<Card
				sx={{
					my: 4,
					backgroundColor: '#1f2937',
					color: '#ffffff',
				}}
			>
				<CardContent>
					<Typography
						variant="h5"
						gutterBottom
						sx={{ textAlign: 'center', color: '#ffffff' }}
					>
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
						sx={{
							color: '#ffffff',
							backgroundColor: '#374151',
							'& .MuiDataGrid-cell': {
								borderBottom: '1px solid #4b5563',
							},
						}}
					/>
				</CardContent>
			</Card>

			{/* Export Button */}
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
				<Button
					onClick={handleCSVExport}
					variant="contained"
					sx={{
						backgroundColor: '#3b82f6',
						color: '#ffffff',
						'&:hover': {
							backgroundColor: '#2563eb',
						},
					}}
					size="large"
					startIcon={<DownloadOutlinedIcon />}
				>
					Export as CSV
				</Button>
			</Box>

			{/* Try it again Button */}
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
				<Button
					onClick={handleReset}
					variant="contained"
					sx={{
						backgroundColor: '#22c55e',
						color: '#ffffff',
						'&:hover': {
							backgroundColor: '#16a34a',
						},
					}}
					size="large"
				>
					Try it again with another batch of receipts
				</Button>
			</Box>
		</motion.section>
	);
};

export default InsightsSummary;
