import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const SummaryCard = ({ title, value, icon }) => {
	return (
		<Grid item xs={12} sm={4}>
			<Card>
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
						<Typography variant="h6" color="textSecondary" sx={{ ml: 1 }}>
							{title}
						</Typography>
					</Box>
					<Typography variant="h4" color="primary">
						{value}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default SummaryCard;
