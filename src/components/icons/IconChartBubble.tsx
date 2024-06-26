const IconChartBubble = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z" />
			<path d="M10 16a2 2 0 11-2 2 2 2 0 012-2m0-2a4 4 0 104 4 4 4 0 00-4-4zM21 6a4 4 0 11-4 4 4 4 0 014-4m0-2a6 6 0 106 6 6 6 0 00-6-6zM24.5 21A1.5 1.5 0 1123 22.5 1.5 1.5 0 0124.5 21m0-2A3.5 3.5 0 1028 22.5 3.5 3.5 0 0024.5 19z" />
		</svg>
	);
};
export default IconChartBubble;
