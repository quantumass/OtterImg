const IconAlarm = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M16,28A11,11,0,1,1,27,17,11,11,0,0,1,16,28ZM16,8a9,9,0,1,0,9,9A9,9,0,0,0,16,8Z" />
			<path d="M18.59 21L15 17.41 15 11 17 11 17 16.58 20 19.59 18.59 21z" />
			<path d="M3.96 5.5H9.030000000000001V7.5H3.96z" transform="rotate(-45.06 6.502 6.497)" />
			<path d="M24.5 3.96H26.5V9.030000000000001H24.5z" transform="rotate(-44.94 25.5 6.498)" />
		</svg>
	);
};
export default IconAlarm;
