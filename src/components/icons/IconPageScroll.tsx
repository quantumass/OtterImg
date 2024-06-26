const IconPageScroll = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M16,28H4a1.89,1.89,0,0,1-2-2V14a1.89,1.89,0,0,1,2-2H16a1.89,1.89,0,0,1,2,2V26A1.89,1.89,0,0,1,16,28ZM4,14V26H16V14Z" />
			<path d="M22,19H20V10H10V8H20a1.89,1.89,0,0,1,2,2Z" />
			<path d="M26 14H24V6H16V4h8a1.89 1.89 0 012 2zM24 17L24 19 26.8 19 22 24.4 22 22 20 22 20 28 26 28 26 26 23.2 26 28 20.6 28 23 30 23 30 17 24 17z" />
		</svg>
	);
};
export default IconPageScroll;
