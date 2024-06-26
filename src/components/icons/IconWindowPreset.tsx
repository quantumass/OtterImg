const IconWindowPreset = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M15 6H17V8H15zM24 15H26V17H24zM15 24H17V26H15zM6 15H8V17H6z" />
			<path d="M8.586 8.586H10.586V10.586H8.586z" transform="rotate(-45 9.586 9.586)" />
			<path d="M21.414 8.586H23.414V10.586H21.414z" transform="rotate(-45 22.414 9.586)" />
			<path d="M21.414 21.414H23.414V23.414H21.414z" transform="rotate(-45 22.414 22.414)" />
			<path d="M8.586 21.414H10.586V23.414H8.586z" transform="rotate(-45 9.586 22.414)" />
			<path d="M16,22a6,6,0,1,0-6-6A6,6,0,0,0,16,22Zm0-10v8a4,4,0,0,1,0-8Z" />
			<path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z" />
		</svg>
	);
};
export default IconWindowPreset;
