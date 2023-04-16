const IconCovariate = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<circle cx="8" cy="16" r="2" />
			<circle cx="14" cy="8" r="2" />
			<circle cx="28" cy="12" r="2" />
			<circle cx="21" cy="18" r="2" />
			<path d="M30,3.4141,28.5859,2,4,26.5859V2H2V28a2,2,0,0,0,2,2H30V28H5.4141ZM4,28Z" />
		</svg>
	);
};
export default IconCovariate;
