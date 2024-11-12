export const getProgressPercentage = (status) => {
	switch (status) {
		case 'PENDING':
			return 0;
		case 'PROCESSING':
			return 67;
		case 'COMPLETED':
			return 100;
		default:
			return 0;
	}
};

export const handleExport = (insights) => {
	let csvContent = 'data:text/csv;charset=utf-8,';

	// Summary Data Section
	csvContent += '========== SUMMARY DATA ==========\n';
	csvContent += 'Metric,Value\n';
	csvContent += `TOTAL SPENT,${
		insights.totalSpending ? `$${insights.totalSpending.toFixed(2)}` : '$0.00'
	}\n`;
	csvContent += `TOTAL TRANSACTIONS,${insights.totalReceipts || 0}\n`;
	csvContent += `UNIQUE VENDORS,${insights.uniqueVendors || 0}\n`;
	csvContent += `TOTAL PRODUCTS PURCHASED,${insights.uniqueVendors || 0}\n`;
	csvContent += `TOTAL DISCOUNT COLLECTED,${insights.uniqueVendors || 0}\n`;
	csvContent += `AVERAGE SPENT PER TRANSACTION,${
		insights.averageSpendingPerTransaction
			? `$${insights.averageSpendingPerTransaction.toFixed(2)}`
			: '$0.00'
	}\n`;
	csvContent += '\n\n';

	// Spending by Parent Category Section
	csvContent += '========== SPENDING BY PARENT CATEGORY ==========\n';
	csvContent += 'Parent Category,Total Spent\n';
	insights.spendingByParentCategory.forEach((item) => {
		csvContent += `${item.parent_category.toUpperCase()},$${item.totalSpent.toFixed(
			2
		)}\n`;
	});
	csvContent += '\n\n';

	// Spending by Category for Each Parent Category Section
	csvContent +=
		'========== SPENDING BY CATEGORY FOR EACH PARENT CATEGORY ==========\n';
	insights.spendingByParentCategory.forEach((parentCategory) => {
		csvContent += `\nParent Category: ${parentCategory.parent_category.toUpperCase()}\n`;
		csvContent += 'Category,Total Spent\n';
		insights.spendingByCategory
			.filter(
				(category) =>
					category.parent_category === parentCategory.parent_category
			)
			.forEach((category) => {
				csvContent += `${category.category},$${category.totalSpent.toFixed(
					2
				)}\n`;
			});
		csvContent += '\n';
	});

	// Spending by Vendor Section
	csvContent += '========== SPENDING BY VENDOR ==========\n';
	csvContent += 'Vendor,Total Spent\n';
	insights.spendingByVendor.forEach((vendor) => {
		csvContent += `${vendor.vendor.toUpperCase()},$${vendor.totalSpent.toFixed(
			2
		)}\n`;
	});
	csvContent += '\n\n';

	// Top Line Items Section
	csvContent += '========== TOP LINE ITEMS ==========\n';
	csvContent += 'Item,Quantity,Total Spent\n';
	insights.topLineItems.forEach((item) => {
		csvContent += `${item.title.toUpperCase()},${
			item.quantity
		},$${item.totalSpent.toFixed(2)}\n`;
	});
	csvContent += '\n';

	// Encode and create link for CSV download
	const encodedUri = encodeURI(csvContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', 'receipt_insights.csv');
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
