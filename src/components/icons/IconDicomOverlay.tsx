const IconDicomOverlay = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M28,6V26H4V6H28m0-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z" />
			<path d="M6 8H16V10H6zM6 12H16V14H6zM6 16H12V18H6z" />
		</svg>
	);
};
export default IconDicomOverlay;
