import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const SummaryCard = ({ title, value, icon }) => {
	return (
		<Grid item xs={12} sm={4}>
			<Card
				sx={{
					backgroundColor: '#1f2937', // Dark card background color for consistency with the dark theme
					color: '#ffffff', // White text color for contrast against dark background
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)', // Slight shadow for emphasis
				}}
			>
				<CardContent sx={{ textAlign: 'center' }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							mb: 1,
						}}
					>
						{icon}
						<Typography variant="h6" sx={{ ml: 1, color: '#cbd5e1' }}>
							{title}
						</Typography>
					</Box>
					<Typography
						variant="h4"
						sx={{ color: '#6ccfe6', fontWeight: 'bold' }}
					>
						{value}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default SummaryCard;
