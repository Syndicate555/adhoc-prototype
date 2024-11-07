import axios from 'axios';

const API_BASE_URL = 'https://www.receipt-ms.online';

export const uploadReceipts = async (files, sessionId) => {
	const formData = new FormData();
	files.forEach((file) => {
		formData.append('images', file);
	});
	formData.append('session', sessionId);

	try {
		const response = await axios.post(
			`${API_BASE_URL}/receipts/upload-multiple`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		return response.data.createdReceipts;
	} catch (error) {
		console.error('Upload failed:', error);
		throw error;
	}
};

export const fetchInsights = async (jobId) => {
	try {
		const response = await axios.get(
			`${API_BASE_URL}/analytics/summary?demo=true&job=${jobId}`
		);
		return response.data.insights;
	} catch (error) {
		console.error('Failed to fetch insights:', error);
		throw error;
	}
};
