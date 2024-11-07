export const handleFileChange = (
	e,
	files,
	setFiles,
	setReceipts,
	setWarningMessage
) => {
	const selectedFiles = Array.from(e.target.files);
	let isDuplicate = false;

	const uniqueFiles = selectedFiles.filter((file) => {
		const isFileAlreadySelected = files.some(
			(existingFile) =>
				existingFile.name === file.name && existingFile.size === file.size
		);
		if (isFileAlreadySelected) {
			isDuplicate = true;
			return false;
		}
		return true;
	});

	if (isDuplicate) {
		setWarningMessage('Some files were not added as they are duplicates.');
	} else {
		setWarningMessage('');
	}

	const newReceipts = uniqueFiles.map((file) => ({
		receiptId: null,
		file,
		status: 'PENDING',
	}));

	setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
	setReceipts((prevReceipts) => [...prevReceipts, ...newReceipts]);
};
