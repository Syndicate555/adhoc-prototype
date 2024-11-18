import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

useGLTF.preload('/robot_playground.glb');

export default function Model({ isGeneratingInsights }) {
	const group = useRef();
	const { nodes, materials, animations, scene } = useGLTF(
		'/robot_playground.glb'
	);
	const { actions } = useAnimations(animations, group);
	const [animationEndTime, setAnimationEndTime] = useState(4);

	useEffect(() => {
		if (actions && actions['Experiment']) {
			const clipDuration = actions['Experiment'].getClip().duration;
			if (isGeneratingInsights) {
				// Play full animation during generation
				actions['Experiment'].reset().play().paused = false;
				setAnimationEndTime(clipDuration);
			} else {
				// Play first 4 seconds in a loop as the idle state
				actions['Experiment'].reset().play();
				actions['Experiment'].paused = false;
				actions['Experiment'].loop = true;
				setAnimationEndTime(Math.min(clipDuration, 4));
			}
		}
	}, [isGeneratingInsights, actions]);

	useFrame(() => {
		if (actions && actions['Experiment']) {
			// Limit the animation to the desired time frame
			if (actions['Experiment'].time > animationEndTime) {
				actions['Experiment'].time = 0;
			}
		}
	});

	return (
		<group ref={group} scale={[0.85, 0.85, 0.85]} position={[0, -1.5, 0]}>
			{/* Reduced scale slightly and adjusted position for a better fit */}
			<primitive object={scene} />
		</group>
	);
}
