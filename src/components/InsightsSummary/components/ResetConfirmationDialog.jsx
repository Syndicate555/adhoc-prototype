import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const ResetConfirmationDialog = ({
	open,
	dataExported,
	handleCloseResetDialog,
	handleConfirmReset,
	handleExport,
}) => {
	return (
		<Dialog open={open} onClose={handleCloseResetDialog}>
			<DialogTitle>
				<WarningAmberIcon sx={{ color: 'orange', mr: 1 }} /> Reset Confirmation
			</DialogTitle>
			<DialogContent>
				{!dataExported ? (
					<DialogContentText>
						All unsaved/unexported data will be permanently lost. Please export
						your data first if you haven't already.
					</DialogContentText>
				) : (
					<DialogContentText>
						Resetting Everything... Please wait.
					</DialogContentText>
				)}
			</DialogContent>
			<DialogActions>
				{!dataExported && (
					<>
						<Button onClick={handleExport} color="primary">
							Export Data
						</Button>
						<Button onClick={handleConfirmReset} color="secondary">
							I don't want to export the data and try another batch instead
						</Button>
					</>
				)}
			</DialogActions>
		</Dialog>
	);
};

export default ResetConfirmationDialog;
