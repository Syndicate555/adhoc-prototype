// scripts/generatePresetReceipts.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Since __dirname and __filename are not available in ES modules,
// we need to recreate them
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the root directory where the images are stored
const assetsDir = path.join(__dirname, '../assets/preset-receipts');

// Define the output file where the generated code will be written
const outputFile = path.join(__dirname, '../constants/output.jsx');

// Define the categories and their corresponding subdirectories
const categoriesList = ['Groceries', 'Gas', 'Restaurants', 'Shopping'];

// Initialize arrays to hold import statements and presetReceipts entries
let importStatements = [];
let presetReceiptsArray = [];

// Keep track of the image index for generating unique variable names
let imageIndex = 1;

// Import statements for react-icons
const iconImports = `import React from 'react';
import { FaShoppingCart, FaGasPump, FaUtensils, FaShoppingBag, FaThLarge } from 'react-icons/fa';`;

// Function to sanitize variable names
function sanitizeVariableName(name) {
	return name.replace(/[^a-zA-Z0-9_]/g, '_');
}

// Function to capitalize category names
function capitalizeCategory(category) {
	return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
}

for (const category of categoriesList) {
	const categoryDir = path.join(assetsDir, category);
	if (fs.existsSync(categoryDir)) {
		const files = fs.readdirSync(categoryDir);

		for (const file of files) {
			// Only process image files
			if (/\.(jpe?g|png|gif)$/i.test(file)) {
				const variableName = `receipt${imageIndex}Image`;
				const importPath = `../assets/preset-receipts/${category}/${file}`;
				importStatements.push(`import ${variableName} from '${importPath}';`);

				const receiptId = `receipt${imageIndex}`;
				const categoriesArray = `[ '${category.toLowerCase()}' ]`;

				presetReceiptsArray.push(`  {
    id: '${receiptId}',
    imageUrl: ${variableName},
    categories: ${categoriesArray},
  },`);

				imageIndex++;
			}
		}
	} else {
		console.warn(`Category directory not found: ${categoryDir}`);
	}
}

// Generate the categories array
const categoriesArrayContent = `export const categories = [
  { name: 'All Receipts', icon: <FaThLarge />, value: 'all' },
  { name: 'Grocery', icon: <FaShoppingCart />, value: 'grocery' },
  { name: 'Gas', icon: <FaGasPump />, value: 'gas' },
  { name: 'Restaurant', icon: <FaUtensils />, value: 'restaurant' },
  { name: 'Shopping', icon: <FaShoppingBag />, value: 'shopping' },
];`;

// Generate the final content
const generatedCode = `${iconImports}

${importStatements.join('\n')}

export const presetReceipts = [
${presetReceiptsArray.join('\n')}
];

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
