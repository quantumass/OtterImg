const IconVmdkDisk = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<circle cx="10.5" cy="24.5" r="1.5" />
			<path d="M19.5 14.964H21.5V20.035H19.5z" transform="rotate(-45 20.5 17.5)" />
			<circle cx="16" cy="13" r="2" />
			<path d="M16,6a7,7,0,0,0,0,14V18a5,5,0,1,1,5-5h2A7,7,0,0,0,16,6Z" />
			<path d="M26,2H6A2,2,0,0,0,4,4V28a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H6V4H26Z" />
		</svg>
	);
};
export default IconVmdkDisk;
