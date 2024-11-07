// hooks/useReceiptSocket.js
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const useReceiptSocket = (
	sessionId,
	setReceipts,
	animateProgress,
	checkAllCompleted
) => {
	const socketRef = useRef(null);

	useEffect(() => {
		// Initialize Socket.IO client
		socketRef.current = io('https://www.receipt-ms.online', {
			transports: ['websocket'],
			reconnection: true, // Enable auto-reconnection
			reconnectionAttempts: 10, // Max number of reconnection attempts
			reconnectionDelay: 5000, // Delay between reconnection attempts (5 seconds)
			timeout: 20000, // Connection timeout (20 seconds)
		});

		// Connection event handlers
		socketRef.current.on('connect', () => {
			console.log('Connected to WebSocket server.');
			socketRef.current.emit('join', sessionId);
		});

		socketRef.current.on('disconnect', (reason) => {
			console.warn('Socket disconnected:', reason);
			if (reason === 'io server disconnect') {
				// Server forced disconnection, need to reconnect manually
				socketRef.current.connect();
			}
		});

		socketRef.current.on('connect_error', (error) => {
			console.error('Connection error:', error);
		});

		// Handle receipt updates
		socketRef.current.on('receipt:update', (data) => {
			console.log('Receipt update received:', data);
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

		// Handle receipt completed updates
		socketRef.current.on('receipt:completed', (data) => {
			console.log('Receipt completed received:', data);
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

		// Clean up on component unmount
		return () => {
			if (socketRef.current) {
				socketRef.current.disconnect();
			}
		};
	}, [sessionId, setReceipts, animateProgress, checkAllCompleted]);
};

export default useReceiptSocket;
