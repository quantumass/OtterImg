const IconDataError = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<circle cx="11" cy="8" r="1" />
			<circle cx="11" cy="16" r="1" />
			<circle cx="11" cy="24" r="1" />
			<path d="M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2h8V27H8V21H26V5A2,2,0,0,0,24,3Zm0,16H8V13H24Zm0-8H8V5H24Z" />
			<path d="M29.24 29.58L26.41 26.75 29.24 23.92 27.83 22.51 25 25.33 22.17 22.51 20.76 23.92 23.59 26.75 20.76 29.58 22.17 30.99 25 28.16 27.83 30.99 29.24 29.58z" />
		</svg>
	);
};
export default IconDataError;
