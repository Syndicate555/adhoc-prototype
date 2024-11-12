import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
import App from './App.jsx';
import './index.css';
import './chartSetup';

import { createTheme, ThemeProvider } from '@mui/material/styles';
Modal.setAppElement('#root');

const theme = createTheme({
	palette: {
		primary: {
			main: '#1a73e8',
		},
		secondary: {
			main: '#ff6d00',
		},
	},
	typography: {
		fontFamily: 'Roboto, sans-serif',
	},
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
