import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { v2 as cloudinary } from 'cloudinary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
	cloud_name: 'dsdumoonx',
	api_key: '467231835958911',
	api_secret: '9W2G0K5UVGf9nmZH6W9cEmz3yuo',
});

// Define the output file where the generated code will be written
const outputFile = path.join(__dirname, '../constants/output.jsx');

// Define the categories based on folder names in cloudinary
const categoriesList = ['Groceries', 'Gas', 'Restaurants', 'Shopping'];

// Initialize arrays to hold presetReceipts entries
let presetReceiptsArray = [];

// Import statements for react-icons
const iconImports = `import React from 'react';
import { FaShoppingCart, FaGasPump, FaUtensils, FaShoppingBag, FaThLarge } from 'react-icons/fa';`;

// Function to fetch images from Cloudinary
async function fetchImagesForCategory(category) {
	const options = {
		type: 'upload',
		max_results: 500, // Adjust if you have more than 500 images per category
	};

	const resources = [];
	let nextCursor = undefined;

	do {
		if (nextCursor) {
			options.next_cursor = nextCursor;
		}

		const result = await cloudinary.api.resources(options);
		console.log(result);

		resources.push(...result.resources);

		nextCursor = result.next_cursor;
	} while (nextCursor);

	return resources.map((resource, index) => ({
		id: `receipt_${category.toLowerCase()}_${index + 1}`,
		imageUrl: resource.secure_url,
		categories: [resource.asset_folder.toLowerCase()],
	}));
}

(async () => {
	try {
		for (const category of categoriesList) {
			const images = await fetchImagesForCategory(category);
			presetReceiptsArray.push(...images);
		}

		// Generate the categories array
		const categoriesArrayContent = `export const categories = [
  { name: 'All Receipts', icon: <FaThLarge />, value: 'all' },
  { name: 'Grocery', icon: <FaShoppingCart />, value: 'grocery' },
  { name: 'Gas', icon: <FaGasPump />, value: 'gas' },
  { name: 'Restaurant', icon: <FaUtensils />, value: 'restaurant' },
  { name: 'Shopping', icon: <FaShoppingBag />, value: 'shopping' },
];`;

		// Generate presetReceipts array as a string
		const presetReceiptsString = `export const presetReceipts = [
${presetReceiptsArray
	.map(
		(receipt) => `  {
    id: '${receipt.id}',
    imageUrl: '${receipt.imageUrl}',
    categories: [ '${receipt.categories[0]}' ],
  },`
	)
	.join('\n')}
];`;

		// Generate the final content
		const generatedCode = `${iconImports}

${presetReceiptsString}

${categoriesArrayContent}
`;

		// Ensure the constants directory exists
		const constantsDir = path.join(__dirname, '../constants');
		if (!fs.existsSync(constantsDir)) {
			fs.mkdirSync(constantsDir);
		}

		// Write the generated code to the output file
		fs.writeFileSync(outputFile, generatedCode, 'utf8');

		console.log('Preset receipts have been generated successfully.');
	} catch (error) {
		console.error('Error generating preset receipts:', error);
	}
})();
