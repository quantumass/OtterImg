const IconSnooze = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M20 14L20 12 12 12 12 14 17.5 14 12 20 12 22 20 22 20 20 14.507 20 20 14z" />
			<path d="M24.5 3.965H26.499V9.036999999999999H24.5z" transform="rotate(-44.945 25.5 6.5)" />
			<path d="M16,28A11,11,0,1,1,27,17,11.0125,11.0125,0,0,1,16,28ZM16,8a9,9,0,1,0,9,9A9.01,9.01,0,0,0,16,8Z" />
			<path d="M3.965 5.501H9.036999999999999V7.5H3.965z" transform="rotate(-45.055 6.5 6.5)" />
		</svg>
	);
};
export default IconSnooze;
