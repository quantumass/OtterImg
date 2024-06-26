const IconTerm = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M28,26H25V24h3V8H25V6h3a2.0023,2.0023,0,0,1,2,2V24A2.0027,2.0027,0,0,1,28,26Z" />
			<circle cx="23" cy="16" r="2" />
			<circle cx="16" cy="16" r="2" />
			<circle cx="9" cy="16" r="2" />
			<path d="M7,26H4a2.0023,2.0023,0,0,1-2-2V8A2.002,2.002,0,0,1,4,6H7V8H4V24H7Z" />
		</svg>
	);
};
export default IconTerm;
