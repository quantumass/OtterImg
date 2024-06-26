const IconReflectVertical = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M16.79,19.386l7,9A1,1,0,0,1,23,30H9a1,1,0,0,1-.79-1.614l7-9a1,1,0,0,1,1.5791,0Z" />
			<path d="M15 2H17V30H15z" transform="rotate(-90 16 16)" />
			<path d="M16,13a1.001,1.001,0,0,1-.79-.386l-7-9A1,1,0,0,1,9,2H23a1,1,0,0,1,.79,1.614l-7,9A1.001,1.001,0,0,1,16,13ZM11.0444,4,16,10.3711,20.9556,4Z" />
		</svg>
	);
};
export default IconReflectVertical;
