import React, { useRef, useEffect, useState } from 'react';
import Tree from 'react-d3-tree';

const ReceiptHierarchyTree = ({ data }) => {
	const treeContainerRef = useRef(null);

	const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

	useEffect(() => {
		const updateDimensions = () => {
			if (treeContainerRef.current) {
				const { clientWidth, clientHeight } = treeContainerRef.current;
				setDimensions({ width: clientWidth, height: clientHeight });
			}
		};

		window.addEventListener('resize', updateDimensions);
		updateDimensions();

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	return (
		<div className="chart-container my-8">
			<h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
				Receipt Item Hierarchy
			</h4>
			<div
				ref={treeContainerRef}
				id="treeWrapper"
				style={{ width: '100%', height: '500px' }}
			>
				<Tree
					data={data}
					orientation="vertical"
					translate={{ x: dimensions.width / 2, y: 50 }}
					pathFunc="diagonal"
					collapsible={false}
					styles={{
						nodes: {
							node: {
								circle: {
									stroke: '#1f2937', // Gray-800
									strokeWidth: 1,
								},
								name: {
									fontSize: '12px',
									fill: '#1f2937',
								},
								attributes: {
									fontSize: '10px',
									fill: '#4b5563',
								},
							},
							leafNode: {
								circle: {
									stroke: '#1f2937',
									strokeWidth: 1,
								},
								name: {
									fontSize: '12px',
									fill: '#1f2937',
								},
								attributes: {
									fontSize: '10px',
									fill: '#4b5563',
								},
							},
						},
						links: {
							stroke: '#9ca3af', // Gray-400
							strokeWidth: 1,
						},
					}}
				/>
			</div>
		</div>
	);
};

export default ReceiptHierarchyTree;
