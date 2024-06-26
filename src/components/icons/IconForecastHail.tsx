const IconForecastHail = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M26,18A10,10,0,1,1,16,8h4v5l6-6L20,1V6H16A12,12,0,1,0,28,18Z" />
			<circle cx="14.5" cy="23.5" r="1.5" />
			<circle cx="11.5" cy="19.5" r="1.5" />
			<circle cx="17.5" cy="19.5" r="1.5" />
			<path d="M12.964 14.5H18.036V16.499H12.964z" transform="rotate(-45 15.5 15.5)" />
			<path d="M18.964 14.5H24.035999999999998V16.499H18.964z" transform="rotate(-45 21.5 15.5)" />
		</svg>
	);
};
export default IconForecastHail;
