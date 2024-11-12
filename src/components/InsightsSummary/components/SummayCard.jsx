import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const SummaryCard = ({ title, value }) => {
	return (
		<Grid item xs={12} sm={4}>
			<Card>
				<CardContent sx={{ textAlign: 'center' }}>
					<Typography variant="h6" color="textSecondary">
						{title}
					</Typography>
					<Typography variant="h4" color="primary">
						{value}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default SummaryCard;
