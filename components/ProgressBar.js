import NextNProgress from 'nextjs-progressbar';

const ProgressBar = () => {
	return (
		<NextNProgress
			color='#ef4444'
			startPosition={0.2}
			stopDelayMs={200}
			height={3}
			showOnShallow={true}
			options={{ easing: 'ease', speed: 500 }}
		/>
	);
};

export default ProgressBar;
