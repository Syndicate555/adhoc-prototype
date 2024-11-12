import React, { useRef } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';

const SpendingByPieChart = ({ chartTitle, dataLabels, dataValues }) => {
	const pieChartRef = useRef(null);

	return (
		<Card sx={{ height: '100%' }}>
			<CardContent>
				<Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
					{chartTitle}
				</Typography>
				<br />
				{dataValues.length > 0 ? (
					<Box sx={{ position: 'relative', height: '350px' }}>
						<Pie
							ref={pieChartRef}
							data={{
								labels: dataLabels,
								datasets: [
									{
										data: dataValues,
										backgroundColor: [
											'#FF6384',
											'#36A2EB',
											'#FFCE56',
											'#4BC0C0',
											'#9966FF',
											'#FF9F40',
											'#50E3C2',
											'#8B572A',
										],
									},
								],
							}}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								plugins: {
									legend: {
										position: 'bottom',
									},
								},
							}}
						/>
					</Box>
				) : (
					<Typography variant="subtitle1" color="textSecondary">
						No data available.
					</Typography>
				)}
			</CardContent>
		</Card>
	);
};

export default SpendingByPieChart;
