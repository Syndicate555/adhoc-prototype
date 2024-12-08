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
import { handleExport } from '../../utilities/utils';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts';

const InsightsSummary = ({ insights, handleReset }) => {
	const [selectedParentCategory, setSelectedParentCategory] = useState('');
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 1200
	);

	useEffect(() => {
		// Handle window resize
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		};
	}, []);

	if (!insights) {
		return null;
	}

	const parentCategories =
		insights?.spendingByParentCategory?.map(
			(category) => category.parent_category
		) || [];

	const spendingByVendorData =
		insights?.spendingByVendor?.map((item) => ({
			name: item.vendor,
			totalSpent: parseFloat(item.totalSpent.toFixed(2)),
			fullName: item.vendor,
		})) || [];

	// Determine how many bars to show based on screen size

	let maxBars;
	if (windowWidth <= 600) {
		// Mobile
		maxBars = 5;
	} else if (windowWidth <= 1024) {
		// Tablet
		maxBars = 10;
	} else {
		// Desktop
		maxBars = spendingByVendorData.length;
	}

	const displayedVendorData = spendingByVendorData.slice(0, maxBars);

	// Determine legend font size dynamically
	let legendFontSize;
	if (windowWidth <= 600) {
		legendFontSize = 12; // Smaller legend font on mobile
	} else if (windowWidth <= 1024) {
		legendFontSize = 14; // Slightly smaller on tablet
	} else {
		legendFontSize = 18; // Default larger font on desktop
	}

	const spendingByParentCategoryLabels =
		insights?.spendingByParentCategory?.map((item) => item.parent_category) ||
		[];

	const spendingByParentCategoryValues =
		insights?.spendingByParentCategory?.map((item) => item.totalSpent) || [];

	useEffect(() => {
		if (parentCategories.length > 0 && !selectedParentCategory) {
			setSelectedParentCategory(parentCategories[0]);
		}
	}, [parentCategories, selectedParentCategory]);

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

	const handleCSVExport = () => {
		return handleExport(insights);
	};

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
					color: '#ffffff',
				}}
			>
				Receipt Insights Dashboard
			</Typography>
			<Typography
				variant="subtitle1"
				sx={{ textAlign: 'center', marginBottom: 4, color: '#cbd5e1' }}
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
						<MonetizationOnIcon sx={{ color: '#22c55e' }} fontSize="large" />
					}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Total Transactions"
					value={insights.totalReceipts || 0}
					icon={<ReceiptIcon sx={{ color: '#3b82f6' }} fontSize="large" />}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Unique Vendors"
					value={insights.totalUniqueVendors || 0}
					icon={<StoreIcon sx={{ color: '#f59e0b' }} fontSize="large" />}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Total Products Purchased"
					value={insights.totalLineItems || 0}
					icon={<ShoppingCartIcon sx={{ color: '#f97316' }} fontSize="large" />}
					cardColor="bg-neutral-900"
				/>
				<SummaryCard
					title="Total Discount Collected"
					value={
						insights.totalDiscounts
							? `$${insights.totalDiscounts.toFixed(2)}`
							: '$0.00'
					}
					icon={<DiscountIcon sx={{ color: '#e11d48' }} fontSize="large" />}
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
							sx={{ color: '#a855f7' }}
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
						backgroundColor="#1f2937"
						textColor="#ffffff"
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
					<Typography
						variant="h5"
						align="center"
						sx={{
							color: '#ffffff',
							fontWeight: 'bold',
							marginBottom: 2,
							fontSize: 28,
						}}
					>
						Spending by Vendor
					</Typography>
					<br />
					<br />
					<ResponsiveContainer
						width="100%"
						height={windowWidth <= 600 ? 400 : 800}
					>
						<BarChart
							data={displayedVendorData}
							margin={{ top: 0, right: 0, left: 20, bottom: 40 }}
						>
							<CartesianGrid strokeDasharray="3 3" stroke="#444" />

							<Legend
								verticalAlign="right"
								align="center"
								wrapperStyle={{
									color: '#6ccfe6',
									fontSize: legendFontSize,
									fontWeight: 'bold',
									whiteSpace: 'nowrap',
								}}
							/>

							<XAxis
								dataKey="name"
								stroke="#ffffff"
								tick={{ fill: '#ffffff', fontSize: 12 }}
								interval={0}
								height={40}
								tickFormatter={(name) =>
									name.length > 6 ? name.substring(0, 6) + '...' : name
								}
								label={{
									value: 'Vendor',
									position: 'insideBottom',
									dy: 20,
									fill: '#ffffff',
									fontSize: 22,
									fontWeight: 'bold',
								}}
							/>

							<YAxis
								stroke="#ffffff"
								tick={{ fill: '#ffffff', fontSize: 12 }}
								label={{
									value: 'Total Money Spent (in $)',
									angle: -90,
									position: 'insideLeft',
									dx: -15,
									fill: '#ffffff',
									fontSize: 22,
									fontWeight: 'bold',
								}}
							/>

							<Tooltip
								formatter={(value, name, props) => [
									`$${value.toFixed(2)}`,
									props.payload.fullName,
								]}
								contentStyle={{ backgroundColor: '#333', color: '#ffffff' }}
							/>

							<Bar
								dataKey="totalSpent"
								fill="#3b82f6"
								barSize={windowWidth <= 600 ? 20 : 40}
								name="Total money spent"
							/>
						</BarChart>
					</ResponsiveContainer>
				</Grid>
			</Grid>

			<br />
			{/* Top Line Items Data Grid */}
			<Box sx={{ my: 4 }}>
				<Typography
					variant="h5"
					sx={{
						textAlign: 'center',
						color: '#ffffff',
						fontWeight: 'bold',
						marginBottom: 2,
					}}
				>
					Top Purchases
				</Typography>
				<DataGrid
					rows={insights.topLineItems.map((item, index) => ({
						id: index,
						title: item.title,
						quantity: item.quantity,
						totalSpent: `$${item.totalSpent.toFixed(2)}`,
						category: item.category,
					}))}
					columns={[
						{
							field: 'title',
							headerName: 'Item',
							flex: 1,
							headerAlign: 'center',
							align: 'center',
						},
						{
							field: 'quantity',
							headerName: 'Quantity',
							flex: 1,
							headerAlign: 'center',
							align: 'center',
						},
						{
							field: 'totalSpent',
							headerName: 'Total Spent',
							flex: 1,
							headerAlign: 'center',
							align: 'center',
						},
						{
							field: 'category',
							headerName: 'Category',
							flex: 1,
							headerAlign: 'center',
							align: 'center',
						},
					]}
					autoHeight
					pageSize={5}
					sx={{
						color: '#ffffff',
						backgroundColor: '#1f2937',
						border: 'none',
						'& .MuiDataGrid-cell': {
							borderBottom: '1px solid #4b5563',
						},
						'& .MuiDataGrid-footerContainer': {
							backgroundColor: '#1f2937',
							color: '#cbd5e1',
						},
						'& .MuiTablePagination-root': {
							color: '#cbd5e1',
						},
						'& .MuiDataGrid-columnHeaders': {
							backgroundColor: '#1f2937',
							color: '#1f2937',
							borderBottom: '1px solid #4b5563',
						},
						'& .data-grid-header': {
							fontWeight: 'bold',
							fontSize: '1rem',
						},
					}}
				/>
			</Box>

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
