import React from 'react';
import {
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Typography,
} from '@mui/material';
import { categoryIcons } from '../../../utilities/icons';

const ParentCategoryDropdown = ({
	parentCategories,
	selectedParentCategory,
	handleParentCategoryChange,
}) => {
	return (
		<Box sx={{ my: 4, textAlign: 'center' }}>
			<FormControl
				variant="outlined"
				sx={{
					minWidth: 350,
					backgroundColor: '#1f2937', // Dark background color for the dropdown
					borderRadius: '8px',
					color: '#ffffff',
				}}
			>
				<InputLabel
					id="parent-category-select-label"
					sx={{
						color: '#cbd5e1', // Lighter color for better visibility in dark theme
						fontSize: '1.6rem', // Increased font size for better readability
					}}
				>
					Select Parent Category
				</InputLabel>
				<Select
					labelId="parent-category-select-label"
					value={selectedParentCategory}
					label="Select Parent Category"
					onChange={handleParentCategoryChange}
					sx={{
						backgroundColor: '#374151', // Darker dropdown background
						borderRadius: '8px',
						color: '#ffffff', // White text color for visibility
						fontSize: '1.2rem', // Larger font size for dropdown text
						padding: '12px', // Increased padding for better spacing
						'& .MuiSelect-select': {
							display: 'flex',
							alignItems: 'center',
							gap: 1,
						},
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
					}}
					MenuProps={{
						PaperProps: {
							sx: {
								backgroundColor: '#1f2937', // Dark theme for dropdown options
								color: '#ffffff',
								borderRadius: '8px',
								boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
							},
						},
					}}
				>
					{parentCategories.map((parentCategory, index) => {
						const IconComponent = categoryIcons[parentCategory];
						return (
							<MenuItem
								key={index}
								value={parentCategory}
								sx={{
									backgroundColor: '#1f2937', // Dark background for each item
									padding: '10px 16px', // Increased padding for better spacing
									fontSize: '1.1rem', // Larger font size for each item
									'&:hover': {
										backgroundColor: '#374151', // Darker background on hover
									},
								}}
							>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									{IconComponent && <IconComponent />}
									<Typography variant="body1" sx={{ fontWeight: 500 }}>
										{parentCategory}
									</Typography>
								</Box>
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
};

export default ParentCategoryDropdown;
