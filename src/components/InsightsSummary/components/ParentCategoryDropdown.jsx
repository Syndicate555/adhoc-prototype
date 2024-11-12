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
			<FormControl variant="outlined" sx={{ minWidth: 300 }}>
				<InputLabel
					id="parent-category-select-label"
					sx={{ textAlign: 'center' }}
				>
					Select Parent Category
				</InputLabel>
				<Select
					labelId="parent-category-select-label"
					value={selectedParentCategory}
					label="Select Parent Category"
					onChange={handleParentCategoryChange}
					sx={{
						backgroundColor: '#fff',
						borderRadius: '8px',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
						'& .MuiSelect-select': {
							display: 'flex',
							alignItems: 'center',
							gap: 1,
						},
					}}
				>
					{parentCategories.map((parentCategory, index) => {
						const IconComponent = categoryIcons[parentCategory];
						return (
							<MenuItem key={index} value={parentCategory}>
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
