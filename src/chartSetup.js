// chartSetup.js
import {
	Chart,
	ArcElement,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from 'chart.js';

// Register all required Chart.js components globally
Chart.register(
	ArcElement,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend
);
