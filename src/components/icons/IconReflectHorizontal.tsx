const IconReflectHorizontal = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M19.386,15.2105l9-7A1,1,0,0,1,30,9V23a1,1,0,0,1-1.614.79l-9-7a1,1,0,0,1,0-1.5791Z" />
			<path d="M15 2H17V30H15z" transform="rotate(-180 16 16)" />
			<path d="M13,16a1.001,1.001,0,0,1-.386.79l-9,7A1,1,0,0,1,2,23V9a1,1,0,0,1,1.614-.79l9,7A1.001,1.001,0,0,1,13,16ZM4,20.9556,10.3711,16,4,11.0444Z" />
		</svg>
	);
};
export default IconReflectHorizontal;
