const IconChartClusterBar = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z" />
			<path d="M10 16H12V26H10zM7 22H9V26H7zM26 8H28V26H26zM23 14H25V26H23z" />
			<path d="M15 12H17V26H15z" transform="rotate(-180 16 19)" />
			<path d="M18 18H20V26H18z" transform="rotate(-180 19 22)" />
		</svg>
	);
};
export default IconChartClusterBar;
