const IconVirtualColumn = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M25 11L26.414 12.414 23.828 15 30 15 30 17 23.828 17 26.414 19.586 25 21 20 16 25 11z" />
			<path d="M30 28H20a2.0023 2.0023 0 01-2-2V6a2.0023 2.0023 0 012-2H30V6H20V26H30zM12 28H2V26H12V6H2V4H12a2.0023 2.0023 0 012 2V26A2.0023 2.0023 0 0112 28z" />
			<path d="M7 11L5.586 12.414 8.172 15 2 15 2 17 8.172 17 5.586 19.586 7 21 12 16 7 11z" />
		</svg>
	);
};
export default IconVirtualColumn;
