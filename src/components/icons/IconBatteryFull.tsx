const IconBatteryFull = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M24,24H6a2,2,0,0,1-2-2V10A2,2,0,0,1,6,8H24a2,2,0,0,1,2,2v1h1a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H26v1A2,2,0,0,1,24,24ZM6,10V22H24V19h3V13H24V10Z" />
			<path d="M11 9H19V23H11z" transform="rotate(90 15 16)" />
		</svg>
	);
};
export default IconBatteryFull;
