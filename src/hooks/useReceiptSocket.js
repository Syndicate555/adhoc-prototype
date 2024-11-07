import { useEffect } from 'react';
import { io } from 'socket.io-client';

const useReceiptSocket = (
	sessionId,
	setReceipts,
	animateProgress,
	checkAllCompleted
) => {
	useEffect(() => {
		const socket = io('https://www.receipt-ms.online', {
			transports: ['websocket', 'polling'],
			reconnectionAttempts: 5, // Automatically try to reconnect up to 5 times
		});

		socket.emit('join', sessionId);

		socket.on('receipt:update', (data) => {
			setReceipts((prevReceipts) => {
				const updatedReceipts = prevReceipts.map((receipt) =>
					receipt.receiptId === data.receiptId
						? { ...receipt, status: data.status }
						: receipt
				);
				animateProgress(updatedReceipts);
				checkAllCompleted(updatedReceipts);
				return updatedReceipts;
			});
		});

		socket.on('receipt:completed', (data) => {
			setReceipts((prevReceipts) => {
				const updatedReceipts = prevReceipts.map((receipt) =>
					receipt.receiptId === data.receiptId
						? { ...receipt, status: 'COMPLETED' }
						: receipt
				);
				animateProgress(updatedReceipts);
				checkAllCompleted(updatedReceipts);
				return updatedReceipts;
			});
		});

		socket.on('connect_error', (err) => {
			console.error('WebSocket connection error:', err.message);
		});

		socket.on('disconnect', (reason) => {
			console.warn('Socket disconnected:', reason);
			if (reason === 'io server disconnect') {
				// Manually disconnected, try to reconnect
				socket.connect();
			}
		});

		return () => {
			socket.disconnect();
		};
	}, [sessionId, setReceipts, animateProgress, checkAllCompleted]);
};

export default useReceiptSocket;
