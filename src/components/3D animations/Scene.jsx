import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Suspense } from 'react';
import { useProgress, Html, OrbitControls } from '@react-three/drei';
import PropTypes from 'prop-types';

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene({ isAnimating }) {
	return (
		<Canvas
			gl={{ antialias: true }}
			dpr={[1, 2]}
			className="relative w-full h-[60vh] md:h-[70vh]" // Increased canvas height for better visual use
			camera={{ position: [0, 2.5, 4], fov: 45 }}
		>
			<directionalLight position={[-5, -5, 10]} intensity={3} />
			<ambientLight intensity={1} />
			<Suspense fallback={<Loader />}>
				<Model isGeneratingInsights={isAnimating} />
			</Suspense>
			<OrbitControls enableZoom={false} />
		</Canvas>
	);
}
